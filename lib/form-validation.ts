// ============= INTERFACES =============

export interface ValidationError {
  field: string;
  message: string;
}

/**
 * NEW Selling Form Data Interface
 * Updated to match McMakler flow with range-based values
 */
export interface SellingFormData {
  // Step 2: Property Type
  propertyType: 'wohnung' | 'haus' | 'gewerbe' | 'grundstueck' | '';

  // Step 3: Property Subtype (conditional)
  propertySubtype?: string;

  // Step 4: Construction Year
  constructionYear: string; // 'bis-1918' | '1919-1949' | etc.

  // Step 5: Rooms
  rooms: string; // '1' | '2' | '3' | '4' | '5' | 'mehr-als-5'

  // Step 6: Living Area
  livingArea: string; // 'bis-80' | '81-120' | '121-160' | etc.

  // Step 7: Condition
  condition: 'neuwertig' | 'saniert' | 'gepflegt' | 'renovierungsbedürftig' | '';

  // Step 8: Location
  postalCode: string;
  city: string;
  district: string;

  // Step 9: Contact
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gdprConsent: boolean;
  newsletter?: boolean;
}

/**
 * NEW Buying Form Data Interface
 * Updated to match McMakler-style flow
 */
export interface BuyingFormData {
  // Step 1: Property Type
  propertyType: 'wohnung' | 'haus' | 'gewerbe' | 'grundstueck' | '';

  // Step 2: Purchase Reason
  purchaseReason: 'eigennutzung' | 'kapitalanlage' | '';

  // Step 3: Property Subtype (conditional)
  propertySubtype?: string;

  // Step 4: Rooms
  minRooms: string;

  // Step 5: Living Area
  minLivingArea: string;

  // Step 6: Budget
  maxBudget: string; // 'bis-200k' | '200k-300k' | etc.

  // Step 7: Location
  postalCode: string;
  city: string;
  district: string;
  includeNeighboring?: boolean;

  // Step 8: Features (multi-select, optional)
  features: string[];

  // Step 9: Contact
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gdprConsent: boolean;
  newsletter?: boolean;
}

// ============= BASIC VALIDATORS =============

/**
 * Email validation
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * German phone validation (accepts various formats)
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\+\(\)]{8,}$/;
  return phoneRegex.test(phone);
};

/**
 * German postal code validation
 */
export const isValidPostalCode = (postalCode: string): boolean => {
  const postalCodeRegex = /^\d{5}$/;
  return postalCodeRegex.test(postalCode);
};

/**
 * Validate tile selection (required)
 */
export const validateTileSelection = (
  value: string | undefined,
  fieldName: string,
  message: string = 'Bitte wählen Sie eine Option aus'
): ValidationError[] => {
  if (!value || value === '') {
    return [{ field: fieldName, message }];
  }
  return [];
};

/**
 * Validate name fields (split firstName/lastName)
 */
export const validateName = (
  firstName: string,
  lastName: string
): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (!firstName || firstName.trim().length < 2) {
    errors.push({
      field: 'firstName',
      message: 'Bitte geben Sie Ihren Vornamen ein',
    });
  }

  if (!lastName || lastName.trim().length < 2) {
    errors.push({
      field: 'lastName',
      message: 'Bitte geben Sie Ihren Nachnamen ein',
    });
  }

  return errors;
};

/**
 * Validate postal code and city
 */
export const validateLocation = (
  postalCode: string,
  city: string
): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (!postalCode || !isValidPostalCode(postalCode)) {
    errors.push({
      field: 'postalCode',
      message: 'Bitte geben Sie eine gültige Postleitzahl ein (5 Ziffern)',
    });
  }

  if (!city || city.trim().length < 2) {
    errors.push({
      field: 'city',
      message: 'Bitte geben Sie eine Stadt ein',
    });
  }

  return errors;
};

/**
 * Validate contact information (shared by both funnels)
 */
export const validateContactInfo = (
  data: Partial<SellingFormData | BuyingFormData>
): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Validate first name and last name
  errors.push(...validateName(data.firstName || '', data.lastName || ''));

  // Validate email
  if (!data.email || !isValidEmail(data.email)) {
    errors.push({
      field: 'email',
      message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
    });
  }

  // Validate phone
  if (!data.phone || !isValidPhone(data.phone)) {
    errors.push({
      field: 'phone',
      message: 'Bitte geben Sie eine gültige Telefonnummer ein',
    });
  }

  // Validate GDPR consent
  if (!data.gdprConsent) {
    errors.push({
      field: 'gdprConsent',
      message: 'Bitte akzeptieren Sie die Datenschutzerklärung',
    });
  }

  return errors;
};

// ============= VERKAUFEN (SELLING) VALIDATORS =============

/**
 * Validate selling form step by step
 * @param step Current step number (2-9, step 1 is auto-filled)
 * @param data Partial form data
 */
export const validateSellingStep = (
  step: number,
  data: Partial<SellingFormData>
): ValidationError[] => {
  switch (step) {
    case 1:
      // Step 1: Intent (auto-filled, no validation needed)
      return [];

    case 2:
      // Step 2: Property Type
      return validateTileSelection(
        data.propertyType,
        'propertyType',
        'Bitte wählen Sie einen Immobilientyp aus'
      );

    case 3:
      // Step 3: Property Subtype (only if wohnung or haus)
      if (data.propertyType === 'wohnung' || data.propertyType === 'haus') {
        return validateTileSelection(
          data.propertySubtype,
          'propertySubtype',
          'Bitte wählen Sie einen Untertyp aus'
        );
      }
      return [];

    case 4:
      // Step 4: Construction Year
      return validateTileSelection(
        data.constructionYear,
        'constructionYear',
        'Bitte wählen Sie das Baujahr aus'
      );

    case 5:
      // Step 5: Rooms
      return validateTileSelection(
        data.rooms,
        'rooms',
        'Bitte wählen Sie die Anzahl der Zimmer aus'
      );

    case 6:
      // Step 6: Living Area
      return validateTileSelection(
        data.livingArea,
        'livingArea',
        'Bitte wählen Sie die Wohnfläche aus'
      );

    case 7:
      // Step 7: Condition
      return validateTileSelection(
        data.condition,
        'condition',
        'Bitte wählen Sie den Zustand aus'
      );

    case 8:
      // Step 8: Location
      return validateLocation(data.postalCode || '', data.city || '');

    case 9:
      // Step 9: Contact
      return validateContactInfo(data);

    default:
      return [];
  }
};

// Legacy validators for backwards compatibility (if needed)
export const validateStep1Selling = (propertyType: string): ValidationError[] => {
  return validateTileSelection(
    propertyType,
    'propertyType',
    'Bitte wählen Sie einen Immobilientyp aus'
  );
};

export const validateStep2Selling = (data: Partial<SellingFormData>): ValidationError[] => {
  return validateLocation(data.postalCode || '', data.city || '');
};

export const validateStep3Selling = (data: Partial<SellingFormData>): ValidationError[] => {
  const errors: ValidationError[] = [];

  errors.push(...validateTileSelection(data.livingArea, 'livingArea', 'Bitte wählen Sie die Wohnfläche aus'));
  errors.push(...validateTileSelection(data.rooms, 'rooms', 'Bitte wählen Sie die Anzahl der Zimmer aus'));
  errors.push(...validateTileSelection(data.condition, 'condition', 'Bitte wählen Sie den Zustand aus'));

  return errors;
};

// ============= KAUFEN (BUYING) VALIDATORS =============

/**
 * Validate buying form step by step
 * @param step Current step number (1-9)
 * @param data Partial form data
 */
export const validateBuyingStep = (
  step: number,
  data: Partial<BuyingFormData>
): ValidationError[] => {
  switch (step) {
    case 1:
      // Step 1: Property Type
      return validateTileSelection(
        data.propertyType,
        'propertyType',
        'Bitte wählen Sie einen Immobilientyp aus'
      );

    case 2:
      // Step 2: Purchase Reason
      return validateTileSelection(
        data.purchaseReason,
        'purchaseReason',
        'Bitte wählen Sie einen Kaufgrund aus'
      );

    case 3:
      // Step 3: Property Subtype (only if wohnung or haus)
      if (data.propertyType === 'wohnung' || data.propertyType === 'haus') {
        return validateTileSelection(
          data.propertySubtype,
          'propertySubtype',
          'Bitte wählen Sie einen Untertyp aus'
        );
      }
      return [];

    case 4:
      // Step 4: Rooms
      return validateTileSelection(
        data.minRooms,
        'minRooms',
        'Bitte wählen Sie die Mindestanzahl an Zimmern aus'
      );

    case 5:
      // Step 5: Living Area
      return validateTileSelection(
        data.minLivingArea,
        'minLivingArea',
        'Bitte wählen Sie die Mindestwohnfläche aus'
      );

    case 6:
      // Step 6: Budget
      return validateTileSelection(
        data.maxBudget,
        'maxBudget',
        'Bitte wählen Sie Ihr maximales Budget aus'
      );

    case 7:
      // Step 7: Location
      return validateLocation(data.postalCode || '', data.city || '');

    case 8:
      // Step 8: Features (optional, no validation needed)
      return [];

    case 9:
      // Step 9: Contact
      return validateContactInfo(data);

    default:
      return [];
  }
};

// Legacy validators for backwards compatibility (if needed)
export const validateStep1Buying = (propertyType: string): ValidationError[] => {
  return validateTileSelection(
    propertyType,
    'propertyType',
    'Bitte wählen Sie einen Immobilientyp aus'
  );
};

export const validateStep2Buying = (locations: string[]): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (!locations || locations.length === 0) {
    errors.push({
      field: 'locations',
      message: 'Bitte wählen Sie mindestens einen Standort aus',
    });
  }

  return errors;
};

export const validateStep3Buying = (data: Partial<BuyingFormData>): ValidationError[] => {
  return validateTileSelection(data.maxBudget, 'maxBudget', 'Bitte wählen Sie Ihr maximales Budget aus');
};

export const validateStep4Buying = (minRooms: string): ValidationError[] => {
  return validateTileSelection(minRooms, 'minRooms', 'Bitte wählen Sie die Mindestanzahl an Zimmern aus');
};
