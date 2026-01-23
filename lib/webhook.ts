import type { SellingFormData, BuyingFormData } from './form-validation';

export type WebhookType = 'selling' | 'buying' | 'referral';

export interface WebhookResponse {
  success: boolean;
  message?: string;
  error?: string;
}

const N8N_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL ||
  'https://automation.codariq.de/webhook/533c1daf-0e9f-4a18-bcb5-560f56944676';
const N8N_BASIC_AUTH_USER = process.env.NEXT_PUBLIC_N8N_BASIC_AUTH_USER || 'immoPalAdmin';
const N8N_BASIC_AUTH_PASS = process.env.NEXT_PUBLIC_N8N_BASIC_AUTH_PASS || 'xaxvet-fyfmav-bIgme0';

const buildBasicAuthHeader = () => {
  const raw = `${N8N_BASIC_AUTH_USER}:${N8N_BASIC_AUTH_PASS}`;
  const token =
    typeof btoa === 'function' ? btoa(raw) : Buffer.from(raw, 'utf-8').toString('base64');
  return `Basic ${token}`;
};

export const getN8nHeaders = () => ({
  'Content-Type': 'application/json',
  Authorization: buildBasicAuthHeader(),
});

const WEBHOOK_ENDPOINTS = {
  funnel: process.env.NEXT_PUBLIC_FUNNEL_WEBHOOK_URL || N8N_WEBHOOK_URL,
  contact: process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL || N8N_WEBHOOK_URL,
  referral: process.env.NEXT_PUBLIC_N8N_REFERRAL_WEBHOOK || '/api/webhook/referral',
};

export const getContactWebhookUrl = () => WEBHOOK_ENDPOINTS.contact;

/**
 * Submit selling funnel data directly to N8N webhook (client-side for static export)
 */
export const submitSellingForm = async (data: SellingFormData): Promise<WebhookResponse> => {
  try {
    const webhookUrl = WEBHOOK_ENDPOINTS.funnel;

    if (!webhookUrl) {
      throw new Error('Webhook URL not configured');
    }

    const payload = {
      type: 'verkaufen',
      timestamp: new Date().toISOString(),
      ...data,
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: getN8nHeaders(),
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Webhook request failed');
    }

    // Try to parse response, but don't fail if it's not JSON
    try {
      await response.json();
    } catch {
      // Response might not be JSON, which is fine
    }

    return {
      success: true,
      message: 'Ihre Anfrage wurde erfolgreich übermittelt',
    };
  } catch (error) {
    console.error('Error submitting selling form:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
    };
  }
};

/**
 * Submit buying funnel data directly to N8N webhook (client-side for static export)
 */
export const submitBuyingForm = async (data: BuyingFormData): Promise<WebhookResponse> => {
  try {
    const webhookUrl = WEBHOOK_ENDPOINTS.funnel;

    if (!webhookUrl) {
      throw new Error('Webhook URL not configured');
    }

    const payload = {
      type: 'kaufen',
      timestamp: new Date().toISOString(),
      ...data,
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: getN8nHeaders(),
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Webhook request failed');
    }

    // Try to parse response, but don't fail if it's not JSON
    try {
      await response.json();
    } catch {
      // Response might not be JSON, which is fine
    }

    return {
      success: true,
      message: 'Ihr Suchauftrag wurde erfolgreich erstellt',
    };
  } catch (error) {
    console.error('Error submitting buying form:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
    };
  }
};

/**
 * Submit referral inquiry to N8N webhook
 */
export const submitReferral = async (data: {
  name: string;
  email: string;
  phone: string;
  propertyAddress: string;
  estimatedValue: number;
  message?: string;
  gdprConsent: boolean;
}): Promise<WebhookResponse> => {
  try {
    const payload = {
      type: 'referral',
      timestamp: new Date().toISOString(),
      referral: {
        propertyAddress: data.propertyAddress,
        estimatedValue: data.estimatedValue,
        message: data.message || null,
      },
      contact: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        gdprConsent: data.gdprConsent,
        consentTimestamp: new Date().toISOString(),
      },
    };

    const response = await fetch(WEBHOOK_ENDPOINTS.referral, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Webhook request failed: ${response.statusText}`);
    }

    // Try to parse response, but don't fail if it's not JSON
    try {
      await response.json();
    } catch {
      // Response might not be JSON, which is fine
    }

    return {
      success: true,
      message: 'Vielen Dank für Ihre Empfehlung!',
    };
  } catch (error) {
    console.error('Error submitting referral:', error);
    return {
      success: false,
      error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
    };
  }
};
