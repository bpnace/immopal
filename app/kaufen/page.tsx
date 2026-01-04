'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FunnelLayout } from '@/components/funnel/funnel-layout';
import { ConsultantAvatar } from '@/components/funnel/consultant-avatar';
import { MultiTileSelect } from '@/components/funnel/multi-tile-select';
import { PostalCodeAutocomplete } from '@/components/postal-code-autocomplete';
import {
  type BuyingFormData,
  type ValidationError,
  validateBuyingStep,
} from '@/lib/form-validation';
import { submitBuyingForm } from '@/lib/webhook';
import { KAUFEN_CONSULTANT } from '@/lib/consultant-data';
import {
  propertyTypeOptions,
  purchaseReasonOptions,
  getSubtypeOptions,
  requiresSubtype,
  roomsOptions,
  livingAreaOptionsKaufen,
  budgetOptions,
  featureOptions,
} from '@/lib/funnel-helpers';
import type { PostalCodeData } from '@/lib/postal-codes';
import { cn } from '@/lib/utils';

export default function KaufenPage() {
  // ...existing code...
  const [currentStep, setCurrentStep] = useState(1); // Start at step 1 (property type)
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');
  const [errors, setErrors] = useState<ValidationError[]>([]);

  const [formData, setFormData] = useState<Partial<BuyingFormData>>({
    propertyType: '',
    purchaseReason: '',
    propertySubtype: '',
    minRooms: '',
    minLivingArea: '',
    maxBudget: '',
    postalCode: '',
    city: '',
    district: '',
    includeNeighboring: false,
    features: [],
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gdprConsent: false,
    newsletter: false,
  });

  // Compute nextDisabled for the navigation button
  // Compute nextDisabled for the navigation button
  let nextDisabled = false;
  switch (currentStep) {
    case 1:
      nextDisabled = !formData.propertyType;
      break;
    case 2:
      nextDisabled = !formData.purchaseReason;
      break;
    case 3:
      nextDisabled = !formData.propertySubtype;
      break;
    case 4:
      nextDisabled = !formData.minRooms;
      break;
    case 5:
      nextDisabled = !formData.minLivingArea;
      break;
    case 6:
      nextDisabled = !formData.maxBudget;
      break;
    case 7:
      nextDisabled = !formData.postalCode;
      break;
    case 9:
      nextDisabled = !formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.gdprConsent;
      break;
    default:
      nextDisabled = false;
  }

  // Handle input change
  const handleInputChange = (field: keyof BuyingFormData, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors([]);
    setSubmitError('');
  };

  // Handle postal code selection
  const handlePostalCodeSelect = (data: PostalCodeData) => {
    setFormData((prev) => ({
      ...prev,
      postalCode: data.postalCode,
      city: data.city,
      district: data.district,
    }));
    setErrors([]);
    if (currentStep === 7) {
      setDirection(1);
      setCurrentStep(8);
    }
  };

  // Get error for specific field
  const getError = (field: string): string | undefined => {
    return errors.find((e) => e.field === field)?.message;
  };

  // Validate current step
  const validateCurrentStep = (): boolean => {
    const stepErrors = validateBuyingStep(currentStep, formData);

    if (stepErrors.length > 0) {
      setErrors(stepErrors);
      return false;
    }

    return true;
  };

  // Handle auto-advance (no validation - user clicked a tile)
  const handleAutoAdvance = () => {
    setDirection(1);

    // Skip step 3 (subtype) if property type is Gewerbe or Grundstück
    if (currentStep === 2) {
      if (!requiresSubtype(formData.propertyType || '')) {
        setCurrentStep(4); // Jump to rooms
        return;
      }
    }

    // Normal progression
    setCurrentStep((prev) => prev + 1);
  };

  // Handle next step with conditional logic
  const handleNext = () => {
    if (!validateCurrentStep()) return;

    setDirection(1);

    // Skip step 3 (subtype) if property type is Gewerbe or Grundstück
    if (currentStep === 2) {
      if (!requiresSubtype(formData.propertyType || '')) {
        setCurrentStep(4); // Jump to rooms
        return;
      }
    }

    // Normal progression
    setCurrentStep((prev) => prev + 1);
  };

  // Handle back step with conditional logic
  const handleBack = () => {
    setDirection(-1);

    // Skip step 3 (subtype) when going back
    if (currentStep === 4) {
      if (!requiresSubtype(formData.propertyType || '')) {
        setCurrentStep(2); // Jump back to purchase reason
        return;
      }
    }

    // Normal back navigation
    setCurrentStep((prev) => prev - 1);
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!validateCurrentStep()) return;

    setIsSubmitting(true);
    setSubmitError('');

    const result = await submitBuyingForm(formData as BuyingFormData);

    if (!result.success) {
      setSubmitError(result.error || 'Es gab einen Fehler beim Absenden des Formulars.');
      setIsSubmitting(false);
      return;
    }

    setSubmitSuccess(true);
    setIsSubmitting(false);
  };

  // Page transition variants
  const pageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const pageTransition = {
    duration: 0.3,
    ease: 'easeInOut' as const,
  };

  // Success screen
  if (submitSuccess) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-2xl text-center"
        >
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary">
              <svg
                className="h-10 w-10 text-primary-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <h1 className="mb-4 text-4xl font-bold text-foreground">Suchauftrag erstellt!</h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Wir informieren Sie, sobald passende Immobilien verfügbar sind.
          </p>

          {/* Consultant Info */}
          <div className="mb-8 border border-border bg-card p-8 text-center min-h-[320px] flex flex-col items-center justify-center z-50">
            <div className="mb-4 flex items-center justify-center rounded-full bg-primary w-16 h-16">
              <span className="font-bold text-primary-foreground text-xl">{KAUFEN_CONSULTANT.initials}</span>
            </div>
            <h3 className="text-lg font-bold text-foreground">{KAUFEN_CONSULTANT.name}</h3>
            <p className="text-sm text-muted-foreground">{KAUFEN_CONSULTANT.role}</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/immobilien"
              className="inline-block bg-primary px-6 sm:px-8 py-3 sm:py-4 font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 whitespace-nowrap"
            >
              Angebote durchsuchen
            </Link>
            <Link
              href="/"
              className="inline-block border-2 border-primary bg-white px-6 sm:px-8 py-3 sm:py-4 font-semibold text-primary shadow-md transition-all hover:bg-primary/5"
            >
              Zur Startseite
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // Render current step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        // Step 1: Property Type
        return (
          <FunnelLayout
            consultant={KAUFEN_CONSULTANT}
            showConsultant={false}
            question="Was möchten Sie kaufen?"
            onNext={handleNext}
            showBack={false}
            nextDisabled={!formData.propertyType}
          >
            <MultiTileSelect
              options={propertyTypeOptions.map((opt) => ({
                ...opt,
                label: opt.label + ' kaufen',
              }))}
              value={formData.propertyType || ''}
              onChange={(value) => handleInputChange('propertyType', value as string)}
              onAutoAdvance={handleAutoAdvance}
              autoAdvanceDelay={300}
              columns={4}
            />
            {getError('propertyType') && (
              <p className="mt-4 text-sm text-destructive">{getError('propertyType')}</p>
            )}
          </FunnelLayout>
        );

      case 2:
        // Step 2: Purchase Reason
        return (
          <FunnelLayout
            consultant={KAUFEN_CONSULTANT}
            showConsultant={false}
            question="Weshalb wollen Sie eine Immobilie kaufen?"
            onBack={handleBack}
            onNext={handleNext}
            nextDisabled={!formData.purchaseReason}
          >
            <MultiTileSelect
              options={purchaseReasonOptions}
              value={formData.purchaseReason || ''}
              onChange={(value) => handleInputChange('purchaseReason', value as string)}
              onAutoAdvance={handleAutoAdvance}
              autoAdvanceDelay={300}
              columns={2}
            />
            {getError('purchaseReason') && (
              <p className="mt-4 text-sm text-destructive">{getError('purchaseReason')}</p>
            )}
          </FunnelLayout>
        );

      case 3:
        // Step 3: Property Subtype (conditional)
        const subtypeOptions = getSubtypeOptions(formData.propertyType || '');
        return (
          <FunnelLayout
            consultant={KAUFEN_CONSULTANT}
            showConsultant={false}
            question={`Bitte wählen Sie die Art ${
              formData.propertyType === 'wohnung' ? 'der Wohnung' : 'des Hauses'
            }`}
            onBack={handleBack}
            onNext={handleNext}
            nextDisabled={!formData.propertySubtype}
          >
            <MultiTileSelect
              options={subtypeOptions}
              value={formData.propertySubtype || ''}
              onChange={(value) => handleInputChange('propertySubtype', value as string)}
              onAutoAdvance={handleAutoAdvance}
              autoAdvanceDelay={300}
              columns={4}
            />
            {getError('propertySubtype') && (
              <p className="mt-4 text-sm text-destructive">{getError('propertySubtype')}</p>
            )}
          </FunnelLayout>
        );

      case 4:
        // Step 4: Rooms
        return (
          <FunnelLayout
            consultant={KAUFEN_CONSULTANT}
            showConsultant={false}
            question="Wie viele Zimmer sollte die Immobilie mindestens haben?"
            subtitle="Ohne Küche und Badezimmer"
            onBack={handleBack}
            onNext={handleNext}
            nextDisabled={!formData.minRooms}
          >
            <MultiTileSelect
              options={roomsOptions}
              value={formData.minRooms || ''}
              onChange={(value) => handleInputChange('minRooms', value as string)}
              onAutoAdvance={handleAutoAdvance}
              autoAdvanceDelay={300}
              columns={4}
            />
            {getError('minRooms') && (
              <p className="mt-4 text-sm text-destructive">{getError('minRooms')}</p>
            )}
          </FunnelLayout>
        );

      case 5:
        // Step 5: Living Area
        return (
          <FunnelLayout
            consultant={KAUFEN_CONSULTANT}
            showConsultant={false}
            question="Wie groß sollte die Wohnfläche mindestens sein?"
            onBack={handleBack}
            onNext={handleNext}
            nextDisabled={!formData.minLivingArea}
          >
            <MultiTileSelect
              options={livingAreaOptionsKaufen}
              value={formData.minLivingArea || ''}
              onChange={(value) => handleInputChange('minLivingArea', value as string)}
              onAutoAdvance={handleAutoAdvance}
              autoAdvanceDelay={300}
              columns={4}
            />
            {getError('minLivingArea') && (
              <p className="mt-4 text-sm text-destructive">{getError('minLivingArea')}</p>
            )}
          </FunnelLayout>
        );

      case 6:
        // Step 6: Budget
        return (
          <FunnelLayout
            consultant={KAUFEN_CONSULTANT}
            showConsultant={false}
            question="Was ist Ihr maximales Budget?"
            onBack={handleBack}
            onNext={handleNext}
            nextDisabled={!formData.maxBudget}
          >
            <MultiTileSelect
              options={budgetOptions}
              value={formData.maxBudget || ''}
              onChange={(value) => handleInputChange('maxBudget', value as string)}
              onAutoAdvance={handleAutoAdvance}
              autoAdvanceDelay={300}
              columns={4}
            />
            {getError('maxBudget') && (
              <p className="mt-4 text-sm text-destructive">{getError('maxBudget')}</p>
            )}
          </FunnelLayout>
        );

      case 7:
        // Step 7: Location
        return (
          <FunnelLayout
            consultant={KAUFEN_CONSULTANT}
            showConsultant={false}
            question="In welcher Region suchen Sie?"
            subtitle="Geben Sie Ihre bevorzugte Postleitzahl ein"
            onBack={handleBack}
            onNext={handleNext}
            nextDisabled={!formData.postalCode || !formData.city}
          >
            <div className="max-w-xl">
              <PostalCodeAutocomplete
                value={formData.postalCode || ''}
                onChange={(value) => handleInputChange('postalCode', value)}
                onSelect={handlePostalCodeSelect}
                error={getError('postalCode') || getError('city')}
              />

              {/* Checkbox for including neighboring districts */}
              <div className="mt-6">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={formData.includeNeighboring || false}
                    onChange={(e) => handleInputChange('includeNeighboring', e.target.checked)}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-muted-foreground">
                    Benachbarte Bezirke einbeziehen
                  </span>
                </label>
              </div>
            </div>
          </FunnelLayout>
        );

      case 8:
        // Step 8: Features (optional)
        return (
          <FunnelLayout
            consultant={KAUFEN_CONSULTANT}
            showConsultant={false}
            question="Welche Ausstattung ist Ihnen wichtig?"
            subtitle="Mehrfachauswahl möglich (optional)"
            onBack={handleBack}
            onNext={handleNext}
          >
            <MultiTileSelect
              options={featureOptions}
              value={formData.features || []}
              onChange={(value) => handleInputChange('features', value as string[])}
              multiSelect
              columns={4}
            />
          </FunnelLayout>
        );

      case 9:
        // Step 9: Contact Information
        return (
          <FunnelLayout
            consultant={KAUFEN_CONSULTANT}
            showConsultant={false}
            question="Wie können wir Sie kontaktieren?"
            subtitle="Ihre Daten werden vertraulich behandelt"
            onBack={handleBack}
            onNext={handleSubmit}
            nextLabel="Suchauftrag erstellen"
            nextDisabled={
              !formData.firstName ||
              !formData.lastName ||
              !formData.email ||
              !formData.phone ||
              !formData.gdprConsent
            }
            isSubmitting={isSubmitting}
            error={submitError}
          >
            <div className="grid gap-6 md:grid-cols-2">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Vorname *
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName || ''}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className={cn(
                    'w-full border px-4 py-3 transition-colors',
                    getError('firstName')
                      ? 'border-destructive focus:border-destructive focus:ring-destructive'
                      : 'border-input focus:border-primary focus:ring-primary'
                  )}
                  placeholder="Max"
                />
                {getError('firstName') && (
                  <p className="mt-1 text-sm text-destructive">{getError('firstName')}</p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Nachname *
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName || ''}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className={cn(
                    'w-full border px-4 py-3 transition-colors',
                    getError('lastName')
                      ? 'border-destructive focus:border-destructive focus:ring-destructive'
                      : 'border-input focus:border-primary focus:ring-primary'
                  )}
                  placeholder="Mustermann"
                />
                {getError('lastName') && (
                  <p className="mt-1 text-sm text-destructive">{getError('lastName')}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  E-Mail-Adresse *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email || ''}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={cn(
                    'w-full border px-4 py-3 transition-colors',
                    getError('email')
                      ? 'border-destructive focus:border-destructive focus:ring-destructive'
                      : 'border-input focus:border-primary focus:ring-primary'
                  )}
                  placeholder="max@beispiel.de"
                />
                {getError('email') && (
                  <p className="mt-1 text-sm text-destructive">{getError('email')}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                  Telefonnummer *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone || ''}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={cn(
                    'w-full border px-4 py-3 transition-colors',
                    getError('phone')
                      ? 'border-destructive focus:border-destructive focus:ring-destructive'
                      : 'border-input focus:border-primary focus:ring-primary'
                  )}
                  placeholder="+49 30 12345678"
                />
                {getError('phone') && (
                  <p className="mt-1 text-sm text-destructive">{getError('phone')}</p>
                )}
              </div>
            </div>

            {/* GDPR Consent */}
            <div className="mt-6">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={formData.gdprConsent || false}
                  onChange={(e) => handleInputChange('gdprConsent', e.target.checked)}
                  className="mt-1 h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-muted-foreground">
                  Ich stimme der{' '}
                  <Link
                    href="/datenschutz"
                    target="_blank"
                    className="text-primary underline hover:no-underline"
                  >
                    Datenschutzerklärung
                  </Link>{' '}
                  zu und bin damit einverstanden, dass meine Daten zur Kontaktaufnahme gespeichert
                  und verarbeitet werden. *
                </span>
              </label>
              {getError('gdprConsent') && (
                <p className="mt-1 text-sm text-destructive">{getError('gdprConsent')}</p>
              )}
            </div>

            {/* Newsletter (optional) */}
            <div className="mt-4">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={formData.newsletter || false}
                  onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                  className="mt-1 h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-muted-foreground">
                  Ich möchte regelmäßig Neuigkeiten und Angebote per E-Mail erhalten
                </span>
              </label>
            </div>
          </FunnelLayout>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Header */}
      {!submitSuccess && (
        <section className="bg-primary/5 py-12 min-h-[220px] flex items-center">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Traumimmobilie finden
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Erstellen Sie Ihren persönlichen Suchauftrag und lassen Sie sich passende Angebote zusenden
              </p>
            </div>
          </div>
        </section>
      )}

      <div className="container mx-auto px-4 py-8 relative">
        {!submitSuccess && (
          <>
            {/* Desktop Consultant - Absolute positioned next to content */}
            <div className="absolute left-4 top-8 w-64 z-40 hidden lg:block">
              <ConsultantAvatar
                name={KAUFEN_CONSULTANT.name}
                role={KAUFEN_CONSULTANT.role}
                initials={KAUFEN_CONSULTANT.initials}
                photo={KAUFEN_CONSULTANT.photo}
              />
            </div>

            {/* Mobile Consultant - Inline at top */}
            <div className="mb-8 lg:hidden">
              <ConsultantAvatar
                name={KAUFEN_CONSULTANT.name}
                role={KAUFEN_CONSULTANT.role}
                initials={KAUFEN_CONSULTANT.initials}
                photo={KAUFEN_CONSULTANT.photo}
                size="sm"
              />
            </div>
          </>
        )}

        {/* Animated content area - with left margin for consultant on desktop */}
        <div className="z-10 relative min-h-[28rem] lg:min-h-[34rem]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={pageTransition}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-16 mt-16">
            <button
              type="button"
              onClick={handleBack}
              className="flex items-center gap-2 font-medium text-muted-foreground transition-colors hover:text-foreground px-4 sm:px-6 py-3 sm:py-4"
              disabled={isSubmitting}
            >
              <span>←</span>
              <span>Zurück</span>
            </button>
            {currentStep >= 8 && (
              <button
                type="button"
                onClick={currentStep === 9 ? handleSubmit : handleNext}
                disabled={nextDisabled || isSubmitting}
                className={cn(
                  'bg-primary px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg whitespace-nowrap',
                  'disabled:cursor-not-allowed disabled:opacity-50'
                )}
              >
                {isSubmitting ? 'Wird gesendet...' : currentStep === 9 ? 'Suchauftrag erstellen' : 'Weiter'}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
