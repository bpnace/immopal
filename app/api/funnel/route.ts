import { NextRequest, NextResponse } from 'next/server';

import type { BuyingFormData, SellingFormData } from '@/lib/form-validation';
import { isValidEmail, isValidPhone, isValidPostalCode } from '@/lib/form-validation';
import {
  parseAreaRange,
  parseBudgetRange,
  parseConstructionYearRange,
  parseRoomsValue,
} from '@/lib/funnel-helpers';

const WEBHOOK_URL =
  process.env.FUNNEL_WEBHOOK_URL || 'https://automation.codariq.de/webhook/533c1daf-0e9f-4a18-bcb5-560f56944676';

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

function validateSellingData(data: Record<string, unknown>): string[] {
  const errors: string[] = [];

  // Required fields
  if (!data.propertyType) errors.push('Immobilientyp ist erforderlich');
  if (!data.constructionYear) errors.push('Baujahr ist erforderlich');
  if (!data.rooms) errors.push('Zimmeranzahl ist erforderlich');
  if (!data.livingArea) errors.push('Wohnfläche ist erforderlich');
  if (!data.condition) errors.push('Zustand ist erforderlich');

  // Location validation
  if (!data.postalCode || !isValidPostalCode(String(data.postalCode))) {
    errors.push('Gültige Postleitzahl ist erforderlich');
  }
  if (!data.city) errors.push('Stadt ist erforderlich');

  // Contact validation
  if (!data.firstName || typeof data.firstName !== 'string' || data.firstName.trim().length < 2) {
    errors.push('Vorname ist erforderlich');
  }
  if (!data.lastName || typeof data.lastName !== 'string' || data.lastName.trim().length < 2) {
    errors.push('Nachname ist erforderlich');
  }
  if (!data.email || !isValidEmail(String(data.email))) {
    errors.push('Gültige E-Mail-Adresse ist erforderlich');
  }
  if (!data.phone || !isValidPhone(String(data.phone))) {
    errors.push('Gültige Telefonnummer ist erforderlich');
  }
  if (!data.gdprConsent) {
    errors.push('Datenschutzerklärung muss akzeptiert werden');
  }

  return errors;
}

function validateBuyingData(data: Record<string, unknown>): string[] {
  const errors: string[] = [];

  // Required fields
  if (!data.propertyType) errors.push('Immobilientyp ist erforderlich');
  if (!data.purchaseReason) errors.push('Kaufgrund ist erforderlich');
  if (!data.minRooms) errors.push('Mindestanzahl Zimmer ist erforderlich');
  if (!data.minLivingArea) errors.push('Mindestwohnfläche ist erforderlich');
  if (!data.maxBudget) errors.push('Budget ist erforderlich');

  // Location validation
  if (!data.postalCode || !isValidPostalCode(String(data.postalCode))) {
    errors.push('Gültige Postleitzahl ist erforderlich');
  }
  if (!data.city) errors.push('Stadt ist erforderlich');

  // Contact validation
  if (!data.firstName || typeof data.firstName !== 'string' || data.firstName.trim().length < 2) {
    errors.push('Vorname ist erforderlich');
  }
  if (!data.lastName || typeof data.lastName !== 'string' || data.lastName.trim().length < 2) {
    errors.push('Nachname ist erforderlich');
  }
  if (!data.email || !isValidEmail(String(data.email))) {
    errors.push('Gültige E-Mail-Adresse ist erforderlich');
  }
  if (!data.phone || !isValidPhone(String(data.phone))) {
    errors.push('Gültige Telefonnummer ist erforderlich');
  }
  if (!data.gdprConsent) {
    errors.push('Datenschutzerklärung muss akzeptiert werden');
  }

  return errors;
}

function buildSellingPayload(data: SellingFormData) {
  const livingAreaRange = parseAreaRange(data.livingArea);
  const constructionYearRange = parseConstructionYearRange(data.constructionYear);
  const roomsValue = parseRoomsValue(data.rooms);

  return {
    type: 'selling',
    timestamp: new Date().toISOString(),
    property: {
      type: data.propertyType,
      subtype: data.propertySubtype || null,
      address: {
        postalCode: data.postalCode,
        city: data.city,
        district: data.district,
      },
      details: {
        livingArea: {
          min: livingAreaRange.min,
          max: livingAreaRange.max,
          display: data.livingArea,
        },
        rooms: {
          value: roomsValue,
          display: data.rooms,
        },
        constructionYear: {
          min: constructionYearRange.min,
          max: constructionYearRange.max,
          display: data.constructionYear,
        },
        condition: data.condition,
      },
    },
    contact: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      newsletter: data.newsletter || false,
      gdprConsent: data.gdprConsent,
      consentTimestamp: new Date().toISOString(),
    },
  };
}

function buildBuyingPayload(data: BuyingFormData) {
  const livingAreaRange = parseAreaRange(data.minLivingArea);
  const budgetRange = parseBudgetRange(data.maxBudget);
  const roomsValue = parseRoomsValue(data.minRooms);

  return {
    type: 'buying',
    timestamp: new Date().toISOString(),
    search: {
      propertyType: data.propertyType,
      subtype: data.propertySubtype || null,
      purchaseReason: data.purchaseReason,
      location: {
        postalCode: data.postalCode,
        city: data.city,
        district: data.district,
        includeNeighboring: data.includeNeighboring || false,
      },
      budget: {
        min: budgetRange.min,
        max: budgetRange.max,
        display: data.maxBudget,
      },
      requirements: {
        minArea: {
          min: livingAreaRange.min,
          max: livingAreaRange.max,
          display: data.minLivingArea,
        },
        minRooms: {
          value: roomsValue,
          display: data.minRooms,
        },
        features: data.features || [],
      },
    },
    contact: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      newsletter: data.newsletter || false,
      gdprConsent: data.gdprConsent,
      consentTimestamp: new Date().toISOString(),
    },
  };
}

export async function POST(request: NextRequest) {
  let responseStatus = 200;
  let errorMessage = '';
  let requestData: Record<string, unknown> = {};

  try {
    requestData = await request.json();
    const data = requestData;
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    // Validate funnel type
    if (data.type !== 'selling' && data.type !== 'buying') {
      responseStatus = 400;
      errorMessage = 'Ungültiger Formulartyp';

      await sendToWebhook(
        {
          type: data.type || 'unknown',
          timestamp: new Date().toISOString(),
          error: 'invalid_funnel_type',
          metadata: {
            source: 'funnel_api',
            userAgent: request.headers.get('user-agent'),
            referrer: request.headers.get('referer'),
            ip,
            reason: 'invalid_type',
          },
        },
        responseStatus
      );

      return NextResponse.json({ error: errorMessage }, { status: responseStatus });
    }

    // Type-specific validation and payload construction
    let payload: Record<string, unknown> | undefined;
    let validationErrors: string[] = [];

    if (data.type === 'selling') {
      validationErrors = validateSellingData(data);
      if (validationErrors.length === 0) {
        payload = buildSellingPayload(data as unknown as SellingFormData);
      }
    } else {
      validationErrors = validateBuyingData(data);
      if (validationErrors.length === 0) {
        payload = buildBuyingPayload(data as unknown as BuyingFormData);
      }
    }

    // Handle validation errors
    if (validationErrors.length > 0) {
      responseStatus = 400;
      errorMessage = validationErrors[0]; // Return first error

      await sendToWebhook(
        {
          type: data.type,
          timestamp: new Date().toISOString(),
          error: 'validation_failed',
          validationErrors,
          formData: data,
          metadata: {
            source: 'funnel_api',
            userAgent: request.headers.get('user-agent'),
            referrer: request.headers.get('referer'),
            ip,
            reason: 'validation_failed',
          },
        },
        responseStatus
      );

      return NextResponse.json({ error: errorMessage }, { status: responseStatus });
    }

    // Add metadata to payload
    const enrichedPayload = {
      ...payload,
      metadata: {
        source: data.type === 'selling' ? 'verkaufen_funnel' : 'kaufen_funnel',
        userAgent: request.headers.get('user-agent'),
        referrer: request.headers.get('referer'),
        ip,
      },
    };

    // Send to webhook with status 200
    await sendToWebhook(enrichedPayload, 200);

    return NextResponse.json({
      success: true,
      message:
        data.type === 'selling'
          ? 'Ihre Anfrage wurde erfolgreich übermittelt'
          : 'Ihr Suchauftrag wurde erfolgreich erstellt',
    });
  } catch (error) {
    console.error('Error submitting funnel:', error);

    await sendToWebhook(
      {
        type: (requestData?.type as string) || 'unknown',
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error',
        metadata: {
          source: 'funnel_api',
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
