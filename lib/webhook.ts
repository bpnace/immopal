import type { SellingFormData, BuyingFormData } from './form-validation';
import {
  parseAreaRange,
  parseBudgetRange,
  parseConstructionYearRange,
  parseRoomsValue,
} from './funnel-helpers';

export type WebhookType = 'selling' | 'buying' | 'referral';

export interface WebhookResponse {
  success: boolean;
  message?: string;
  error?: string;
}

const WEBHOOK_ENDPOINTS = {
  selling: process.env.NEXT_PUBLIC_N8N_SELLING_WEBHOOK || '/api/webhook/selling',
  buying: process.env.NEXT_PUBLIC_N8N_BUYING_WEBHOOK || '/api/webhook/buying',
  referral: process.env.NEXT_PUBLIC_N8N_REFERRAL_WEBHOOK || '/api/webhook/referral',
};

/**
 * Submit selling funnel data to N8N webhook
 */
export const submitSellingForm = async (data: SellingFormData): Promise<WebhookResponse> => {
  try {
    // Parse range values to numeric
    const livingAreaRange = parseAreaRange(data.livingArea);
    const constructionYearRange = parseConstructionYearRange(data.constructionYear);
    const roomsValue = parseRoomsValue(data.rooms);

    const payload = {
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

    const response = await fetch(WEBHOOK_ENDPOINTS.selling, {
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
      message: 'Ihre Anfrage wurde erfolgreich übermittelt',
    };
  } catch (error) {
    console.error('Error submitting selling form:', error);
    return {
      success: false,
      error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
    };
  }
};

/**
 * Submit buying funnel data to N8N webhook
 */
export const submitBuyingForm = async (data: BuyingFormData): Promise<WebhookResponse> => {
  try {
    // Parse range values to numeric
    const livingAreaRange = parseAreaRange(data.minLivingArea);
    const budgetRange = parseBudgetRange(data.maxBudget);
    const roomsValue = parseRoomsValue(data.minRooms);

    const payload = {
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

    const response = await fetch(WEBHOOK_ENDPOINTS.buying, {
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
      message: 'Ihr Suchauftrag wurde erfolgreich erstellt',
    };
  } catch (error) {
    console.error('Error submitting buying form:', error);
    return {
      success: false,
      error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
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
