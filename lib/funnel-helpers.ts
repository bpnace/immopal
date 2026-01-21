import type { TileSelectOption } from '@/components/funnel/multi-tile-select';

// ============= RANGE PARSERS =============

export interface Range {
  min: number;
  max: number | null;
}

/**
 * Parse living area range string to numeric values
 */
export const parseAreaRange = (range: string): Range => {
  const ranges: Record<string, Range> = {
    'bis-60': { min: 0, max: 60 },
    '61-80': { min: 61, max: 80 },
    'bis-80': { min: 0, max: 80 },
    '81-100': { min: 81, max: 100 },
    '81-120': { min: 81, max: 120 },
    '101-120': { min: 101, max: 120 },
    '121-160': { min: 121, max: 160 },
    '161-200': { min: 161, max: 200 },
    '201-240': { min: 201, max: 240 },
    'ueber-160': { min: 160, max: null },
    'ueber-240': { min: 240, max: null },
  };
  return ranges[range] || { min: 0, max: null };
};

/**
 * Parse budget range string to numeric values (in EUR)
 */
export const parseBudgetRange = (budget: string): Range => {
  const budgets: Record<string, Range> = {
    'bis-200k': { min: 0, max: 200000 },
    '200k-300k': { min: 200000, max: 300000 },
    '300k-400k': { min: 300000, max: 400000 },
    '400k-500k': { min: 400000, max: 500000 },
    '500k-750k': { min: 500000, max: 750000 },
    'ueber-750k': { min: 750000, max: null },
  };
  return budgets[budget] || { min: 0, max: null };
};

/**
 * Parse construction year range string to numeric values
 */
export const parseConstructionYearRange = (year: string): Range => {
  const years: Record<string, Range> = {
    'bis-1918': { min: 0, max: 1918 },
    '1919-1949': { min: 1919, max: 1949 },
    '1950-1969': { min: 1950, max: 1969 },
    '1970-1990': { min: 1970, max: 1990 },
    '1991-2000': { min: 1991, max: 2000 },
    '2001-2015': { min: 2001, max: 2015 },
    'ab-2016': { min: 2016, max: null },
  };
  return years[year] || { min: 0, max: null };
};

/**
 * Parse rooms string to numeric value
 */
export const parseRoomsValue = (rooms: string): number => {
  const roomValues: Record<string, number> = {
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    'mehr-als-5': 6,
  };
  return roomValues[rooms] || 0;
};

// ============= SUBTYPE OPTIONS =============

/**
 * Get property subtype options based on property type
 */
export const getSubtypeOptions = (
  propertyType: string
): TileSelectOption[] => {
  const subtypes: Record<string, TileSelectOption[]> = {
    wohnung: [
      { value: 'erdgeschoss', label: 'Erdgeschoss', icon: '🏢' },
      { value: 'etage', label: 'Etage', icon: '🏢' },
      { value: 'penthouse', label: 'Penthouse / Dachgeschoss', icon: '🏙️' },
      { value: 'maisonette', label: 'Maisonette', icon: '🏢' },
    ],
    haus: [
      { value: 'einfamilienhaus', label: 'Einfamilienhaus', icon: '🏠' },
      { value: 'doppelhaushaelfte', label: 'Doppelhaushälfte', icon: '🏠' },
      { value: 'reihenhaus', label: 'Reihenhaus', icon: '🏘️' },
      { value: 'villa', label: 'Villa', icon: '🏰' },
    ],
    gewerbe: [
      { value: 'buero', label: 'Büro / Praxis', icon: '🏢' },
      { value: 'einzelhandel', label: 'Einzelhandel', icon: '🛍️' },
      { value: 'gastronomie', label: 'Gastronomie', icon: '🍽️' },
      { value: 'lager', label: 'Lager / Produktion', icon: '🏭' },
    ],
    grundstueck: [
      { value: 'baugrundstueck', label: 'Baugrundstück', icon: '🏗️' },
      { value: 'gewerbe', label: 'Gewerbe', icon: '🏢' },
      { value: 'landwirtschaft', label: 'Landwirtschaftlich', icon: '🌾' },
      { value: 'freizeit', label: 'Freizeit / Garten', icon: '🌳' },
    ],
  };

  return subtypes[propertyType] || [];
};

/**
 * Check if property type requires subtype selection
 */
export const requiresSubtype = (propertyType: string): boolean => {
  return propertyType === 'wohnung' || propertyType === 'haus';
};

// ============= STEP CALCULATION =============

/**
 * Calculate total number of steps based on property type (verkaufen funnel)
 */
export const getSellingStepCount = (propertyType: string): number => {
  // Steps: Intent(hidden) + PropertyType + [Subtype] + ConstructionYear + Rooms + Area + Condition + Location + Contact + Success
  // If subtype required: 10 steps, otherwise: 9 steps
  return requiresSubtype(propertyType) ? 10 : 9;
};

/**
 * Calculate total number of steps based on property type (kaufen funnel)
 */
export const getBuyingStepCount = (propertyType: string): number => {
  // Steps: PropertyType + PurchaseReason + [Subtype] + Rooms + Area + Budget + Location + Features + Contact + Success
  // If subtype required: 10 steps, otherwise: 9 steps
  return requiresSubtype(propertyType) ? 10 : 9;
};

// ============= OPTION DATA =============

/**
 * Property type options
 */
export const propertyTypeOptions: TileSelectOption[] = [
  { value: 'wohnung', label: 'Wohnung', icon: '🏢' },
  { value: 'haus', label: 'Haus', icon: '🏠' },
  { value: 'gewerbe', label: 'Gewerbe', icon: '🏪' },
  { value: 'grundstueck', label: 'Grundstück', icon: '🏞️' },
];

/**
 * Purchase reason options (kaufen funnel)
 */
export const purchaseReasonOptions: TileSelectOption[] = [
  { value: 'eigennutzung', label: 'Eigennutzung', icon: '🏡' },
  { value: 'kapitalanlage', label: 'Kapitalanlage', icon: '💰' },
];

/**
 * Construction year options
 */
export const constructionYearOptions: TileSelectOption[] = [
  { value: 'bis-1918', label: 'Bis 1918' },
  { value: '1919-1949', label: '1919 - 1949' },
  { value: '1950-1969', label: '1950 - 1969' },
  { value: '1970-1990', label: '1970 - 1990' },
  { value: '1991-2000', label: '1991 - 2000' },
  { value: '2001-2015', label: '2001 - 2015' },
  { value: 'ab-2016', label: 'Ab 2016' },
];

/**
 * Rooms options
 */
export const roomsOptions: TileSelectOption[] = [
  { value: '1', label: '1 Zimmer' },
  { value: '2', label: '2 Zimmer' },
  { value: '3', label: '3 Zimmer' },
  { value: '4', label: '4 Zimmer' },
  { value: '5', label: '5 Zimmer' },
  { value: 'mehr-als-5', label: 'Mehr als 5' },
];

/**
 * Living area options (verkaufen funnel)
 */
export const livingAreaOptionsVerkaufen: TileSelectOption[] = [
  { value: 'bis-80', label: 'Bis 80 m²' },
  { value: '81-120', label: '81 - 120 m²' },
  { value: '121-160', label: '121 - 160 m²' },
  { value: '161-200', label: '161 - 200 m²' },
  { value: '201-240', label: '201 - 240 m²' },
  { value: 'ueber-240', label: 'Über 240 m²' },
];

/**
 * Living area options (kaufen funnel)
 */
export const livingAreaOptionsKaufen: TileSelectOption[] = [
  { value: 'bis-60', label: 'Bis 60 m²' },
  { value: '61-80', label: '61 - 80 m²' },
  { value: '81-100', label: '81 - 100 m²' },
  { value: '101-120', label: '101 - 120 m²' },
  { value: '121-160', label: '121 - 160 m²' },
  { value: 'ueber-160', label: 'Über 160 m²' },
];

/**
 * Condition options
 */
export const conditionOptions: TileSelectOption[] = [
  { value: 'neuwertig', label: 'Neuwertig' },
  { value: 'saniert', label: 'Saniert' },
  { value: 'gepflegt', label: 'Gepflegt' },
  { value: 'baufaellig', label: 'Baufällig' },
];

/**
 * Budget options (kaufen funnel)
 */
export const budgetOptions: TileSelectOption[] = [
  { value: 'bis-200k', label: 'Bis 200.000 €' },
  { value: '200k-300k', label: '200.000 - 300.000 €' },
  { value: '300k-400k', label: '300.000 - 400.000 €' },
  { value: '400k-500k', label: '400.000 - 500.000 €' },
  { value: '500k-750k', label: '500.000 - 750.000 €' },
  { value: 'ueber-750k', label: 'Über 750.000 €' },
];

/**
 * Feature options (kaufen funnel)
 */
export const featureOptions: TileSelectOption[] = [
  { value: 'balkon', label: 'Balkon', icon: '🌿' },
  { value: 'garten', label: 'Garten', icon: '🌳' },
  { value: 'garage', label: 'Garage / Stellplatz', icon: '🚗' },
  { value: 'aufzug', label: 'Aufzug', icon: '🛗' },
  { value: 'barrierefrei', label: 'Barrierefrei', icon: '♿' },
  { value: 'einbaukueche', label: 'Einbauküche', icon: '🍳' },
  { value: 'keller', label: 'Keller', icon: '🏚️' },
  { value: 'fussbodenheizung', label: 'Fußbodenheizung', icon: '🔥' },
];
