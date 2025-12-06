export interface PostalCodeData {
  postalCode: string;
  city: string;
  district: string;
  state: string;
}

// Sample postal codes for Berlin & Brandenburg
// In production, this should be a complete database or API call
export const berlinBrandenburgPostalCodes: PostalCodeData[] = [
  // Berlin Mitte
  { postalCode: '10115', city: 'Berlin', district: 'Mitte', state: 'Berlin' },
  { postalCode: '10117', city: 'Berlin', district: 'Mitte', state: 'Berlin' },
  { postalCode: '10119', city: 'Berlin', district: 'Mitte', state: 'Berlin' },
  { postalCode: '10178', city: 'Berlin', district: 'Mitte', state: 'Berlin' },
  { postalCode: '10179', city: 'Berlin', district: 'Mitte', state: 'Berlin' },

  // Berlin Charlottenburg-Wilmersdorf
  { postalCode: '10585', city: 'Berlin', district: 'Charlottenburg', state: 'Berlin' },
  { postalCode: '10587', city: 'Berlin', district: 'Charlottenburg', state: 'Berlin' },
  { postalCode: '10623', city: 'Berlin', district: 'Charlottenburg', state: 'Berlin' },
  { postalCode: '10625', city: 'Berlin', district: 'Charlottenburg', state: 'Berlin' },
  { postalCode: '10627', city: 'Berlin', district: 'Charlottenburg', state: 'Berlin' },
  { postalCode: '10629', city: 'Berlin', district: 'Charlottenburg', state: 'Berlin' },
  { postalCode: '10707', city: 'Berlin', district: 'Wilmersdorf', state: 'Berlin' },
  { postalCode: '10709', city: 'Berlin', district: 'Wilmersdorf', state: 'Berlin' },
  { postalCode: '10711', city: 'Berlin', district: 'Wilmersdorf', state: 'Berlin' },
  { postalCode: '10713', city: 'Berlin', district: 'Wilmersdorf', state: 'Berlin' },
  { postalCode: '10715', city: 'Berlin', district: 'Wilmersdorf', state: 'Berlin' },
  { postalCode: '10717', city: 'Berlin', district: 'Wilmersdorf', state: 'Berlin' },

  // Berlin Prenzlauer Berg
  { postalCode: '10405', city: 'Berlin', district: 'Prenzlauer Berg', state: 'Berlin' },
  { postalCode: '10407', city: 'Berlin', district: 'Prenzlauer Berg', state: 'Berlin' },
  { postalCode: '10409', city: 'Berlin', district: 'Prenzlauer Berg', state: 'Berlin' },
  { postalCode: '10435', city: 'Berlin', district: 'Prenzlauer Berg', state: 'Berlin' },
  { postalCode: '10437', city: 'Berlin', district: 'Prenzlauer Berg', state: 'Berlin' },

  // Berlin Friedrichshain
  { postalCode: '10243', city: 'Berlin', district: 'Friedrichshain', state: 'Berlin' },
  { postalCode: '10245', city: 'Berlin', district: 'Friedrichshain', state: 'Berlin' },
  { postalCode: '10247', city: 'Berlin', district: 'Friedrichshain', state: 'Berlin' },

  // Berlin Kreuzberg
  { postalCode: '10961', city: 'Berlin', district: 'Kreuzberg', state: 'Berlin' },
  { postalCode: '10963', city: 'Berlin', district: 'Kreuzberg', state: 'Berlin' },
  { postalCode: '10965', city: 'Berlin', district: 'Kreuzberg', state: 'Berlin' },
  { postalCode: '10967', city: 'Berlin', district: 'Kreuzberg', state: 'Berlin' },
  { postalCode: '10969', city: 'Berlin', district: 'Kreuzberg', state: 'Berlin' },

  // Berlin Schöneberg
  { postalCode: '10777', city: 'Berlin', district: 'Schöneberg', state: 'Berlin' },
  { postalCode: '10779', city: 'Berlin', district: 'Schöneberg', state: 'Berlin' },
  { postalCode: '10781', city: 'Berlin', district: 'Schöneberg', state: 'Berlin' },
  { postalCode: '10783', city: 'Berlin', district: 'Schöneberg', state: 'Berlin' },
  { postalCode: '10789', city: 'Berlin', district: 'Schöneberg', state: 'Berlin' },

  // Berlin Neukölln
  { postalCode: '12043', city: 'Berlin', district: 'Neukölln', state: 'Berlin' },
  { postalCode: '12045', city: 'Berlin', district: 'Neukölln', state: 'Berlin' },
  { postalCode: '12047', city: 'Berlin', district: 'Neukölln', state: 'Berlin' },
  { postalCode: '12049', city: 'Berlin', district: 'Neukölln', state: 'Berlin' },
  { postalCode: '12051', city: 'Berlin', district: 'Neukölln', state: 'Berlin' },

  // Berlin Tempelhof
  { postalCode: '12099', city: 'Berlin', district: 'Tempelhof', state: 'Berlin' },
  { postalCode: '12101', city: 'Berlin', district: 'Tempelhof', state: 'Berlin' },
  { postalCode: '12103', city: 'Berlin', district: 'Tempelhof', state: 'Berlin' },

  // Berlin Steglitz
  { postalCode: '12161', city: 'Berlin', district: 'Steglitz', state: 'Berlin' },
  { postalCode: '12163', city: 'Berlin', district: 'Steglitz', state: 'Berlin' },
  { postalCode: '12165', city: 'Berlin', district: 'Steglitz', state: 'Berlin' },
  { postalCode: '12167', city: 'Berlin', district: 'Steglitz', state: 'Berlin' },

  // Berlin Zehlendorf
  { postalCode: '14163', city: 'Berlin', district: 'Zehlendorf', state: 'Berlin' },
  { postalCode: '14165', city: 'Berlin', district: 'Zehlendorf', state: 'Berlin' },
  { postalCode: '14167', city: 'Berlin', district: 'Zehlendorf', state: 'Berlin' },
  { postalCode: '14169', city: 'Berlin', district: 'Zehlendorf', state: 'Berlin' },

  // Berlin Spandau
  { postalCode: '13581', city: 'Berlin', district: 'Spandau', state: 'Berlin' },
  { postalCode: '13583', city: 'Berlin', district: 'Spandau', state: 'Berlin' },
  { postalCode: '13585', city: 'Berlin', district: 'Spandau', state: 'Berlin' },
  { postalCode: '13587', city: 'Berlin', district: 'Spandau', state: 'Berlin' },
  { postalCode: '13589', city: 'Berlin', district: 'Spandau', state: 'Berlin' },

  // Berlin Pankow
  { postalCode: '13086', city: 'Berlin', district: 'Pankow', state: 'Berlin' },
  { postalCode: '13088', city: 'Berlin', district: 'Pankow', state: 'Berlin' },
  { postalCode: '13089', city: 'Berlin', district: 'Pankow', state: 'Berlin' },

  // Brandenburg - Potsdam
  { postalCode: '14467', city: 'Potsdam', district: 'Zentrum', state: 'Brandenburg' },
  { postalCode: '14469', city: 'Potsdam', district: 'Babelsberg', state: 'Brandenburg' },
  { postalCode: '14471', city: 'Potsdam', district: 'West', state: 'Brandenburg' },
  { postalCode: '14473', city: 'Potsdam', district: 'Nord', state: 'Brandenburg' },
  { postalCode: '14476', city: 'Potsdam', district: 'Golm', state: 'Brandenburg' },
  { postalCode: '14478', city: 'Potsdam', district: 'Drewitz', state: 'Brandenburg' },
  { postalCode: '14480', city: 'Potsdam', district: 'Bornim', state: 'Brandenburg' },
  { postalCode: '14482', city: 'Potsdam', district: 'Bornstedt', state: 'Brandenburg' },

  // Brandenburg an der Havel
  { postalCode: '14770', city: 'Brandenburg an der Havel', district: 'Altstadt', state: 'Brandenburg' },
  { postalCode: '14772', city: 'Brandenburg an der Havel', district: 'Neustadt', state: 'Brandenburg' },
  { postalCode: '14774', city: 'Brandenburg an der Havel', district: 'Nord', state: 'Brandenburg' },
  { postalCode: '14776', city: 'Brandenburg an der Havel', district: 'Kirchmöser', state: 'Brandenburg' },

  // Frankfurt (Oder)
  { postalCode: '15230', city: 'Frankfurt (Oder)', district: 'Zentrum', state: 'Brandenburg' },
  { postalCode: '15232', city: 'Frankfurt (Oder)', district: 'West', state: 'Brandenburg' },
  { postalCode: '15234', city: 'Frankfurt (Oder)', district: 'Nord', state: 'Brandenburg' },
  { postalCode: '15236', city: 'Frankfurt (Oder)', district: 'Süd', state: 'Brandenburg' },
];

/**
 * Search postal codes by query string
 * @param query - Search term (postal code or city name)
 * @param limit - Maximum number of results to return
 */
export const searchPostalCodes = (query: string, limit: number = 10): PostalCodeData[] => {
  if (!query || query.length < 2) {
    return [];
  }

  const normalizedQuery = query.toLowerCase().trim();

  // Search in postal code, city, and district
  const results = berlinBrandenburgPostalCodes.filter((item) => {
    return (
      item.postalCode.startsWith(normalizedQuery) ||
      item.city.toLowerCase().includes(normalizedQuery) ||
      item.district.toLowerCase().includes(normalizedQuery)
    );
  });

  // Sort by relevance: exact postal code matches first
  results.sort((a, b) => {
    const aStartsWithQuery = a.postalCode.startsWith(normalizedQuery);
    const bStartsWithQuery = b.postalCode.startsWith(normalizedQuery);

    if (aStartsWithQuery && !bStartsWithQuery) return -1;
    if (!aStartsWithQuery && bStartsWithQuery) return 1;

    // If both start with query or neither does, sort alphabetically
    return a.postalCode.localeCompare(b.postalCode);
  });

  return results.slice(0, limit);
};

/**
 * Get postal code data by exact postal code
 */
export const getPostalCodeData = (postalCode: string): PostalCodeData | undefined => {
  return berlinBrandenburgPostalCodes.find((item) => item.postalCode === postalCode);
};

/**
 * Format postal code data for display
 */
export const formatPostalCodeDisplay = (data: PostalCodeData): string => {
  return `${data.postalCode}, ${data.city} ${data.district}`;
};
