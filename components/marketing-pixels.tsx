'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

type PixelCommand = (...args: unknown[]) => void;
type MetaCommand = PixelCommand & {
  callMethod?: PixelCommand;
  queue: unknown[][];
  loaded: boolean;
  version: string;
  push?: PixelCommand;
};
type OpenAiCommand = PixelCommand & { q: unknown[][] };

type PixelWindow = Window & {
  CCM?: {
    consent?: boolean;
    acceptedEmbeddings?: { name?: string }[];
  };
  fbq?: MetaCommand;
  _fbq?: MetaCommand;
  oaiq?: OpenAiCommand;
};

const META_PIXEL_ID = '1555301829627604';
const OPENAI_PIXEL_ID = 'UR195AKoL3rpbmSQkLJTgL';
const CONSENT_EVENTS = ['ccm19WidgetLoaded', 'ccm19WidgetClosed', 'ccm19EmbeddingAccepted'];

let metaReady = false;
let openAiReady = false;
let pendingSellingLead = false;

function hasEmbeddingConsent(serviceName: string): boolean {
  const ccm = (window as PixelWindow).CCM;
  return ccm?.consent === true &&
    Array.isArray(ccm.acceptedEmbeddings) &&
    ccm.acceptedEmbeddings.some((embedding) => embedding.name === serviceName);
}

function startMetaPixel(onReady: () => void) {
  const pixelWindow = window as PixelWindow;
  if (pixelWindow.fbq) return;

  const fbq = ((...args: unknown[]) => {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue.push(args);
  }) as MetaCommand;
  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.push = fbq;
  pixelWindow.fbq = fbq;
  pixelWindow._fbq = fbq;

  // Keep tracking disabled while the asynchronous SDK loads.
  fbq('consent', 'revoke');
  fbq('init', META_PIXEL_ID);

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  script.onload = () => {
    metaReady = true;
    onReady();
  };
  document.head.appendChild(script);
}

function startOpenAiPixel(onReady: () => void) {
  const pixelWindow = window as PixelWindow;
  if (pixelWindow.oaiq) return;

  const oaiq = ((...args: unknown[]) => {
    oaiq.q.push(args);
  }) as OpenAiCommand;
  oaiq.q = [];
  pixelWindow.oaiq = oaiq;

  // The SDK defaults to consent granted, so deny it before initialization.
  oaiq('consent', false);
  oaiq('init', { pixelId: OPENAI_PIXEL_ID });

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://bzrcdn.openai.com/sdk/oaiq.min.js';
  script.onload = () => {
    openAiReady = true;
    onReady();
  };
  document.head.appendChild(script);
}

export function trackSuccessfulSellingLead() {
  if (window.location.pathname !== '/verkaufen/' && window.location.pathname !== '/verkaufen') return;
  if (!hasEmbeddingConsent('OpenAI Pixel')) return;
  if (!openAiReady) {
    pendingSellingLead = true;
    return;
  }
  (window as PixelWindow).oaiq?.('measure', 'lead_created', { type: 'customer_action' });
}

export function MarketingPixels() {
  const pathname = usePathname();
  const pathnameRef = useRef(pathname);
  const lastMetaPath = useRef<string | null>(null);
  const lastOpenAiPath = useRef<string | null>(null);

  useEffect(() => {
    pathnameRef.current = pathname;

    function syncPixels() {
      const pixelWindow = window as PixelWindow;
      const currentPath = pathnameRef.current;
      const metaAllowed = hasEmbeddingConsent('Meta Pixel');
      const openAiAllowed =
        (currentPath === '/verkaufen/' || currentPath === '/verkaufen') &&
        hasEmbeddingConsent('OpenAI Pixel');

      if (metaAllowed) {
        startMetaPixel(syncPixels);
        if (metaReady) {
          pixelWindow.fbq?.('consent', 'grant');
          if (currentPath && lastMetaPath.current !== currentPath) {
            pixelWindow.fbq?.('track', 'PageView');
            lastMetaPath.current = currentPath;
          }
        }
      } else {
        if (metaReady) pixelWindow.fbq?.('consent', 'revoke');
        lastMetaPath.current = null;
      }

      if (openAiAllowed) {
        startOpenAiPixel(syncPixels);
        if (openAiReady) {
          pixelWindow.oaiq?.('consent', true);
          if (currentPath && lastOpenAiPath.current !== currentPath) {
            pixelWindow.oaiq?.('measure', 'page_viewed', {
              type: 'contents',
              contents: [{ id: 'verkaufen', name: 'Immobilie verkaufen', content_type: 'page' }],
            });
            lastOpenAiPath.current = currentPath;
          }
          if (pendingSellingLead) {
            pendingSellingLead = false;
            pixelWindow.oaiq?.('measure', 'lead_created', { type: 'customer_action' });
          }
        }
      } else {
        if (openAiReady) pixelWindow.oaiq?.('consent', false);
        lastOpenAiPath.current = null;
        pendingSellingLead = false;
      }
    }

    for (const eventName of CONSENT_EVENTS) window.addEventListener(eventName, syncPixels);
    window.addEventListener('focus', syncPixels);
    syncPixels();

    return () => {
      for (const eventName of CONSENT_EVENTS) window.removeEventListener(eventName, syncPixels);
      window.removeEventListener('focus', syncPixels);
    };
  }, [pathname]);

  return null;
}
