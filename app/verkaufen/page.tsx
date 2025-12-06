'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FunnelLayout } from '@/components/funnel/funnel-layout';
import { ConsultantAvatar } from '@/components/funnel/consultant-avatar';
import { MultiTileSelect } from '@/components/funnel/multi-tile-select';
import { PostalCodeAutocomplete } from '@/components/postal-code-autocomplete';
import {
  type SellingFormData,
  type ValidationError,
  validateSellingStep,
} from '@/lib/form-validation';
import { submitSellingForm } from '@/lib/webhook';
import { VERKAUFEN_CONSULTANT } from '@/lib/consultant-data';
import {
  propertyTypeOptions,
  getSubtypeOptions,
  requiresSubtype,
  constructionYearOptions,
  roomsOptions,
  livingAreaOptionsVerkaufen,
  conditionOptions,
} from '@/lib/funnel-helpers';
import type { PostalCodeData } from '@/lib/postal-codes';
import { cn } from '@/lib/utils';

export default function VerkaufenPage() {
  const [currentStep, setCurrentStep] = useState(2); // Start at step 2 (property type)
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [formData, setFormData] = useState<Partial<SellingFormData>>({
    propertyType: '',
    propertySubtype: '',
    constructionYear: '',
    rooms: '',
    livingArea: '',
    condition: '',
    postalCode: '',
    city: '',
    district: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gdprConsent: false,
    newsletter: false,
  });

  // Compute nextDisabled for the navigation button
  let nextDisabled = false;
  switch (currentStep) {
    case 2:
      nextDisabled = !formData.propertyType;
      break;
    case 3:
      nextDisabled = !formData.propertySubtype;
      break;
    case 4:
      nextDisabled = !formData.constructionYear;
      break;
    case 5:
      nextDisabled = !formData.rooms;
      break;
    case 6:
      nextDisabled = !formData.livingArea;
      break;
    case 7:
      nextDisabled = !formData.condition;
      break;
    case 8:
      nextDisabled = !formData.postalCode;
      break;
    case 9:
      nextDisabled = !formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.gdprConsent;
      break;
    default:
      nextDisabled = false;
  }

  // Handle input change
  const handleInputChange = (field: keyof SellingFormData, value: string | boolean) => {
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
  };

  // Get error for specific field
  const getError = (field: string): string | undefined => {
    return errors.find((e) => e.field === field)?.message;
  };

  // Validate current step
  const validateCurrentStep = (): boolean => {
    const stepErrors = validateSellingStep(currentStep, formData);

    if (stepErrors.length > 0) {
      setErrors(stepErrors);
      return false;
    }

    return true;
  };

  // Handle next step with conditional logic
  const handleNext = () => {
    if (!validateCurrentStep()) return;

    setDirection(1);

    // Skip step 3 (subtype) if property type is Gewerbe or Grundstück
    if (currentStep === 2) {
      if (!requiresSubtype(formData.propertyType || '')) {
        setCurrentStep(4); // Jump to construction year
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
        setCurrentStep(2); // Jump back to property type
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

    try {
      await submitSellingForm(formData as SellingFormData);
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError(
        'Es gab einen Fehler beim Absenden des Formulars. Bitte versuchen Sie es erneut.'
      );
    } finally {
      setIsSubmitting(false);
    }
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

          <h1 className="mb-4 text-4xl font-bold text-foreground">Vielen Dank!</h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Ihre Immobilie wurde erfolgreich bei uns registriert. Wir werden Sie
            in Kürze kontaktieren.
          </p>

          {/* Consultant Info */}
          <div className="mb-8 border border-border bg-card p-8 text-center min-h-[320px] flex flex-col items-center justify-center z-50">
            <div className="mb-4 flex items-center justify-center rounded-full bg-primary w-16 h-16">
              <span className="font-bold text-primary-foreground text-xl">{VERKAUFEN_CONSULTANT.initials}</span>
            </div>
            <h3 className="text-lg font-bold text-foreground">{VERKAUFEN_CONSULTANT.name}</h3>
            <p className="text-sm text-muted-foreground">{VERKAUFEN_CONSULTANT.role}</p>
          </div>

          <Link
            href="/"
            className="inline-block bg-primary px-6 sm:px-8 py-3 sm:py-4 font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90"
          >
            Zur Startseite
          </Link>
        </motion.div>
      </div>
    );
  }

  // Render current step
  const renderStep = () => {
    switch (currentStep) {
      case 2:
        // Step 2: Property Type
        return (
          <FunnelLayout
            consultant={VERKAUFEN_CONSULTANT}
            showConsultant={false}
            question="Welche Immobilie möchten Sie kostenlos bewerten?"
            onNext={handleNext}
            showBack={false}
            nextDisabled={!formData.propertyType}
          >
            <MultiTileSelect
              options={propertyTypeOptions}
              value={formData.propertyType || ''}
              onChange={(value) => handleInputChange('propertyType', value as string)}
              columns={4}
            />
            {getError('propertyType') && (
              <p className="mt-4 text-sm text-destructive">{getError('propertyType')}</p>
            )}
          </FunnelLayout>
        );

      case 3:
        // Step 3: Property Subtype (conditional)
        const subtypeOptions = getSubtypeOptions(formData.propertyType || '');
        return (
          <FunnelLayout
            consultant={VERKAUFEN_CONSULTANT}
            showConsultant={false}
            question={`Bitte wählen Sie die Art ${
              formData.propertyType === 'wohnung' ? 'Ihrer Wohnung' : 'Ihres Hauses'
            }`}
            onBack={handleBack}
            onNext={handleNext}
            nextDisabled={!formData.propertySubtype}
          >
            <MultiTileSelect
              options={subtypeOptions}
              value={formData.propertySubtype || ''}
              onChange={(value) => handleInputChange('propertySubtype', value as string)}
              columns={4}
            />
            {getError('propertySubtype') && (
              <p className="mt-4 text-sm text-destructive">{getError('propertySubtype')}</p>
            )}
          </FunnelLayout>
        );

      case 4:
        // Step 4: Construction Year
        return (
          <FunnelLayout
            consultant={VERKAUFEN_CONSULTANT}
            showConsultant={false}
            question="Wann wurde die Immobilie erbaut?"
            onBack={handleBack}
            onNext={handleNext}
            nextDisabled={!formData.constructionYear}
          >
            <MultiTileSelect
              options={constructionYearOptions}
              value={formData.constructionYear || ''}
              onChange={(value) => handleInputChange('constructionYear', value as string)}
              columns={4}
            />
            {getError('constructionYear') && (
              <p className="mt-4 text-sm text-destructive">{getError('constructionYear')}</p>
            )}
          </FunnelLayout>
        );

      case 5:
        // Step 5: Rooms
        return (
          <FunnelLayout
            consultant={VERKAUFEN_CONSULTANT}
            showConsultant={false}
            question="Wie viele Zimmer hat die Immobilie?"
            subtitle="Ohne Küche und Badezimmer"
            onBack={handleBack}
            onNext={handleNext}
            nextDisabled={!formData.rooms}
          >
            <MultiTileSelect
              options={roomsOptions}
              value={formData.rooms || ''}
              onChange={(value) => handleInputChange('rooms', value as string)}
              columns={4}
            />
            {getError('rooms') && (
              <p className="mt-4 text-sm text-destructive">{getError('rooms')}</p>
            )}
          </FunnelLayout>
        );

      case 6:
        // Step 6: Living Area
        return (
          <FunnelLayout
            consultant={VERKAUFEN_CONSULTANT}
            showConsultant={false}
            question="Wie groß ist die Wohnfläche der Immobilie?"
            onBack={handleBack}
            onNext={handleNext}
            nextDisabled={!formData.livingArea}
          >
            <MultiTileSelect
              options={livingAreaOptionsVerkaufen}
              value={formData.livingArea || ''}
              onChange={(value) => handleInputChange('livingArea', value as string)}
              columns={4}
            />
            {getError('livingArea') && (
              <p className="mt-4 text-sm text-destructive">{getError('livingArea')}</p>
            )}
          </FunnelLayout>
        );

      case 7:
        // Step 7: Condition
        return (
          <FunnelLayout
            consultant={VERKAUFEN_CONSULTANT}
            showConsultant={false}
            question="In welchem Zustand befindet sich die Immobilie?"
            onBack={handleBack}
            onNext={handleNext}
            nextDisabled={!formData.condition}
          >
            <MultiTileSelect
              options={conditionOptions}
              value={formData.condition || ''}
              onChange={(value) => handleInputChange('condition', value as string)}
              columns={4}
            />
            {getError('condition') && (
              <p className="mt-4 text-sm text-destructive">{getError('condition')}</p>
            )}
          </FunnelLayout>
        );

      case 8:
        // Step 8: Location
        return (
          <FunnelLayout
            consultant={VERKAUFEN_CONSULTANT}
            showConsultant={false}
            question="In welcher Region befindet sich die Immobilie?"
            subtitle="Wir benötigen Ihre Postleitzahl, um den Wert besser einschätzen zu können"
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
            </div>
          </FunnelLayout>
        );

      case 9:
        // Step 9: Contact Information
        return (
          <FunnelLayout
            consultant={VERKAUFEN_CONSULTANT}
            showConsultant={false}
            question="Wie können wir Sie erreichen?"
            subtitle="Ihre Daten werden vertraulich behandelt"
            onBack={handleBack}
            onNext={handleSubmit}
            nextLabel="Kostenlose Bewertung erhalten"
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
        <section className="bg-primary/5 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Kostenlose Immobilienbewertung
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Erfahren Sie in wenigen Minuten, was Ihre Immobilie wert ist
              </p>
            </div>
          </div>
        </section>
      )}

      <div className="container mx-auto px-4 py-8 relative">
        {/* Desktop Consultant - Absolute positioning */}
        {!submitSuccess && (
          <div className="absolute left-4 top-8 w-64 z-40 hidden lg:block">
            <ConsultantAvatar
              name={VERKAUFEN_CONSULTANT.name}
              role={VERKAUFEN_CONSULTANT.role}
              initials={VERKAUFEN_CONSULTANT.initials}
              photo={VERKAUFEN_CONSULTANT.photo}
            />
          </div>
        )}

        {/* Mobile Consultant - Inline at top */}
        {!submitSuccess && (
          <div className="mb-8 lg:hidden">
            <ConsultantAvatar
              name={VERKAUFEN_CONSULTANT.name}
              role={VERKAUFEN_CONSULTANT.role}
              initials={VERKAUFEN_CONSULTANT.initials}
              photo={VERKAUFEN_CONSULTANT.photo}
              size="sm"
            />
          </div>
        )}

        {/* Animated content area */}
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
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 border-t border-border pt-16 mt-16">
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center gap-2 font-medium text-muted-foreground transition-colors hover:text-foreground px-4 sm:px-6 py-3 sm:py-4"
                disabled={isSubmitting}
              >
                <span>←</span>
                <span>Zurück</span>
              </button>
              <button
                type="button"
                onClick={currentStep === 9 ? handleSubmit : handleNext}
                disabled={nextDisabled || isSubmitting}
                className={cn(
                  'bg-primary px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg whitespace-nowrap',
                  'disabled:cursor-not-allowed disabled:opacity-50'
                )}
              >
                {isSubmitting ? 'Wird gesendet...' : currentStep === 9 ? 'Kostenlose Bewertung erhalten' : 'Weiter'}
              </button>
            </div>
          </div>
      </div>
    </>
  );
}
