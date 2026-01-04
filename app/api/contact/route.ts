import { NextRequest, NextResponse } from 'next/server';

const WEBHOOK_URL = 'https://automation.codariq.de/webhook/533c1daf-0e9f-4a18-bcb5-560f56944676';

// Simple in-memory rate limiting (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3;

// Simple spam detection patterns
const SPAM_PATTERNS = [
  /viagra/i,
  /cialis/i,
  /casino/i,
  /poker/i,
  /lottery/i,
  /bitcoin/i,
  /cryptocurrency/i,
  /loan.*fast/i,
  /\b(http|https):\/\/[^\s]+\b/g, // Multiple URLs
];

function detectSpam(text: string): boolean {
  const urlMatches = text.match(/\b(http|https):\/\/[^\s]+\b/g);
  if (urlMatches && urlMatches.length > 2) return true;

  return SPAM_PATTERNS.some((pattern) => pattern.test(text));
}

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count++;
  return false;
}

async function sendToWebhook(payload: Record<string, unknown>, httpStatus: number) {
  const webhookPayload = {
    ...payload,
    httpStatus,
  };

  try {
    console.log('Sending to webhook:', WEBHOOK_URL);
    console.log('Payload:', JSON.stringify(webhookPayload, null, 2));

    // Basic Auth credentials
    const username = 'immoPalAdmin';
    const password = 'Nepal2030=!';
    const authHeader = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader,
      },
      body: JSON.stringify(webhookPayload),
    });

    console.log('Webhook response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Webhook error response:', errorText);
      throw new Error(`Webhook returned ${response.status}: ${errorText}`);
    }

    const responseData = await response.text();
    console.log('Webhook response:', responseData);
  } catch (error) {
    console.error('Failed to send to webhook:', error);
    // Don't throw - we don't want webhook failures to fail the user's submission
  }
}

export async function POST(request: NextRequest) {
  let responseStatus = 200;
  let errorMessage = '';

  try {
    const data = await request.json();
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    // Check honeypot - if filled, it's a bot
    if (data.website) {
      responseStatus = 403;
      errorMessage = 'Ihre Nachricht konnte nicht gesendet werden.';

      await sendToWebhook(
        {
          type: 'contact',
          timestamp: new Date().toISOString(),
          contact: data,
          metadata: {
            source: 'website_contact_form',
            userAgent: request.headers.get('user-agent'),
            referrer: request.headers.get('referer'),
            ip,
            reason: 'honeypot_filled',
          },
        },
        responseStatus
      );

      return NextResponse.json({ error: errorMessage }, { status: responseStatus });
    }

    // Check rate limiting
    if (checkRateLimit(ip)) {
      responseStatus = 429;
      errorMessage = 'Zu viele Anfragen. Bitte versuchen Sie es in einer Minute erneut.';

      await sendToWebhook(
        {
          type: 'contact',
          timestamp: new Date().toISOString(),
          contact: data,
          metadata: {
            source: 'website_contact_form',
            userAgent: request.headers.get('user-agent'),
            referrer: request.headers.get('referer'),
            ip,
            reason: 'rate_limit',
          },
        },
        responseStatus
      );

      return NextResponse.json({ error: errorMessage }, { status: responseStatus });
    }

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      responseStatus = 400;
      errorMessage = 'Bitte füllen Sie alle Pflichtfelder aus';

      await sendToWebhook(
        {
          type: 'contact',
          timestamp: new Date().toISOString(),
          contact: data,
          metadata: {
            source: 'website_contact_form',
            userAgent: request.headers.get('user-agent'),
            referrer: request.headers.get('referer'),
            ip,
            reason: 'missing_fields',
          },
        },
        responseStatus
      );

      return NextResponse.json({ error: errorMessage }, { status: responseStatus });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      responseStatus = 400;
      errorMessage = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';

      await sendToWebhook(
        {
          type: 'contact',
          timestamp: new Date().toISOString(),
          contact: data,
          metadata: {
            source: 'website_contact_form',
            userAgent: request.headers.get('user-agent'),
            referrer: request.headers.get('referer'),
            ip,
            reason: 'invalid_email',
          },
        },
        responseStatus
      );

      return NextResponse.json({ error: errorMessage }, { status: responseStatus });
    }

    // Validate GDPR consent
    if (!data.privacy) {
      responseStatus = 400;
      errorMessage = 'Bitte stimmen Sie der Datenschutzerklärung zu';

      await sendToWebhook(
        {
          type: 'contact',
          timestamp: new Date().toISOString(),
          contact: data,
          metadata: {
            source: 'website_contact_form',
            userAgent: request.headers.get('user-agent'),
            referrer: request.headers.get('referer'),
            ip,
            reason: 'no_consent',
          },
        },
        responseStatus
      );

      return NextResponse.json({ error: errorMessage }, { status: responseStatus });
    }

    // Check for spam
    const messageText = `${data.firstName} ${data.lastName} ${data.email} ${data.message}`;
    if (detectSpam(messageText)) {
      responseStatus = 403;
      errorMessage = 'Ihre Nachricht konnte nicht gesendet werden.';

      await sendToWebhook(
        {
          type: 'contact',
          timestamp: new Date().toISOString(),
          contact: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone || null,
            subject: data.subject || 'Keine Angabe',
            message: data.message,
            gdprConsent: data.privacy === 'on' || data.privacy === true,
            consentTimestamp: new Date().toISOString(),
          },
          metadata: {
            source: 'website_contact_form',
            userAgent: request.headers.get('user-agent'),
            referrer: request.headers.get('referer'),
            ip,
            reason: 'spam_detected',
          },
        },
        responseStatus
      );

      return NextResponse.json({ error: errorMessage }, { status: responseStatus });
    }

    // Prepare payload for valid lead (200)
    const payload = {
      type: 'contact',
      timestamp: new Date().toISOString(),
      contact: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone || null,
        subject: data.subject || 'Keine Angabe',
        message: data.message,
        gdprConsent: data.privacy === 'on' || data.privacy === true,
        consentTimestamp: new Date().toISOString(),
      },
      metadata: {
        source: 'website_contact_form',
        userAgent: request.headers.get('user-agent'),
        referrer: request.headers.get('referer'),
        ip,
      },
    };

    // Send to webhook with status 200
    await sendToWebhook(payload, 200);

    return NextResponse.json({
      success: true,
      message: 'Vielen Dank für Ihre Nachricht. Wir melden uns in Kürze bei Ihnen.',
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);

    // Send error to webhook with status 500
    await sendToWebhook(
      {
        type: 'contact',
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error',
        metadata: {
          source: 'website_contact_form',
          reason: 'server_error',
        },
      },
      500
    );

    return NextResponse.json(
      {
        error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
      },
      { status: 500 }
    );
  }
}
