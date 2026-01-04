import type { SellingFormData, BuyingFormData } from './form-validation';

export type WebhookType = 'selling' | 'buying' | 'referral';

export interface WebhookResponse {
  success: boolean;
  message?: string;
  error?: string;
}

const WEBHOOK_ENDPOINTS = {
  referral: process.env.NEXT_PUBLIC_N8N_REFERRAL_WEBHOOK || '/api/webhook/referral',
};

/**
 * Submit selling funnel data to API route (which then forwards to N8N webhook)
 */
export const submitSellingForm = async (data: SellingFormData): Promise<WebhookResponse> => {
  try {
    const response = await fetch('/api/funnel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'selling',
        ...data,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Webhook request failed');
    }

    const result = await response.json();
    return {
      success: true,
      message: result.message || 'Ihre Anfrage wurde erfolgreich übermittelt',
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
 * Submit buying funnel data to API route (which then forwards to N8N webhook)
 */
export const submitBuyingForm = async (data: BuyingFormData): Promise<WebhookResponse> => {
  try {
    const response = await fetch('/api/funnel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'buying',
        ...data,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Webhook request failed');
    }

    const result = await response.json();
    return {
      success: true,
      message: result.message || 'Ihr Suchauftrag wurde erfolgreich erstellt',
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
