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
  name: 'Dennis Darwiche',
  role: 'Immobilienberater',
  initials: 'DD',
  // photo: '/images/consultants/berater1.jpg', // Uncomment when real photo is available
};

/**
 * Consultant for Kaufen (Buying) funnel
 */
export const KAUFEN_CONSULTANT: Consultant = {
  name: 'Kya Bayat',
  role: 'Immobilienberater',
  initials: 'KB',
  // photo: '/images/consultants/berater.jpg', // Uncomment when real photo is available
};

/**
 * Get consultant by funnel type
 */
export const getConsultantByFunnel = (
  funnelType: 'verkaufen' | 'kaufen'
): Consultant => {
  return funnelType === 'verkaufen' ? VERKAUFEN_CONSULTANT : KAUFEN_CONSULTANT;
};
