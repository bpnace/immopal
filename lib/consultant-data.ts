/**
 * Consultant profiles for funnels
 * These are placeholder data that can be replaced with real team members later
 */

export interface Consultant {
  name: string;
  role: string;
  initials: string;
  photo?: string;
}

/**
 * Consultant for Verkaufen (Selling) funnel
 */
export const VERKAUFEN_CONSULTANT: Consultant = {
  name: 'Dennis Darrrr',
  role: 'Immobilienberater',
  initials: 'DD',
  // photo: '/images/consultants/max-mueller.jpg', // Uncomment when real photo is available
};

/**
 * Consultant for Kaufen (Buying) funnel
 */
export const KAUFEN_CONSULTANT: Consultant = {
  name: 'Lisa Schmidt',
  role: 'Kundenberaterin',
  initials: 'LS',
  // photo: '/images/consultants/lisa-schmidt.jpg', // Uncomment when real photo is available
};

/**
 * Get consultant by funnel type
 */
export const getConsultantByFunnel = (
  funnelType: 'verkaufen' | 'kaufen'
): Consultant => {
  return funnelType === 'verkaufen' ? VERKAUFEN_CONSULTANT : KAUFEN_CONSULTANT;
};
