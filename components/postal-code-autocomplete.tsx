'use client';

import { useState, useEffect, useRef } from 'react';
import { POSTAL_CODE_MIN_QUERY_LENGTH, searchPostalCodes, type PostalCodeData } from '@/lib/postal-codes';

interface PostalCodeAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  onSelect: (data: PostalCodeData) => void;
  error?: string;
  placeholder?: string;
  label?: string;
}

export function PostalCodeAutocomplete({
  value,
  onChange,
  onSelect,
  error,
  placeholder = 'PLZ oder Stadt eingeben',
  label = 'Postleitzahl',
}: PostalCodeAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<PostalCodeData[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const listboxId = 'postal-code-suggestions';
  const activeDescendantId =
    selectedIndex >= 0 && selectedIndex < suggestions.length
      ? `postal-code-suggestion-${selectedIndex}`
      : undefined;

  useEffect(() => {
    const trimmed = value.trim();
    if (!trimmed || trimmed.length < POSTAL_CODE_MIN_QUERY_LENGTH) {
      setSuggestions([]);
      setShowSuggestions(false);
      setSelectedIndex(-1);
      setFetchError(null);
      return;
    }

    const debounceId = window.setTimeout(async () => {
      setIsLoading(true);
      setFetchError(null);

      try {
        const results = searchPostalCodes(trimmed, 10);
        setSuggestions(results);
        setShowSuggestions(true);
      } catch {
        setFetchError('Postleitzahlen konnten nicht geladen werden. Bitte versuchen Sie es erneut.');
      } finally {
        setIsLoading(false);
        setSelectedIndex(-1);
      }
    }, 250);

    return () => {
      window.clearTimeout(debounceId);
    };
  }, [value]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleSelectSuggestion = (data: PostalCodeData) => {
    onChange(data.postalCode);
    onSelect(data);
    setShowSuggestions(false);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          handleSelectSuggestion(suggestions[selectedIndex]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  return (
    <div className="relative">
      {label && <label className="block text-sm font-medium mb-2">{label}</label>}
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => {
          if (suggestions.length > 0) {
            setShowSuggestions(true);
          }
        }}
        className={`w-full px-4 py-2 border ${error ? 'border-destructive' : 'border-input'}`}
        placeholder={placeholder}
        autoComplete="off"
        role="combobox"
        aria-autocomplete="list"
        aria-controls={listboxId}
        aria-expanded={showSuggestions}
        aria-haspopup="listbox"
        aria-activedescendant={activeDescendantId}
      />

      {/* Suggestions Dropdown */}
      {showSuggestions && (
        <div
          ref={dropdownRef}
          id={listboxId}
          className="absolute z-50 w-full mt-1 bg-white border border-border shadow-lg max-h-60 overflow-auto"
          role="listbox"
        >
          {isLoading && (
            <div className="px-4 py-3 text-sm text-muted-foreground">Lade Vorschläge…</div>
          )}
          {!isLoading && suggestions.length === 0 && (
            <div className="px-4 py-3 text-sm text-muted-foreground">
              Keine passenden Postleitzahlen gefunden.
            </div>
          )}
          {suggestions.map((suggestion, index) => (
            <button
              key={`${suggestion.postalCode}-${suggestion.city}-${suggestion.district}`}
              id={`postal-code-suggestion-${index}`}
              type="button"
              onClick={() => handleSelectSuggestion(suggestion)}
              onMouseEnter={() => setSelectedIndex(index)}
              className={`w-full text-left px-4 py-3 hover:bg-primary/5 transition-colors border-b border-border last:border-b-0 ${
                index === selectedIndex ? 'bg-primary/5' : ''
              }`}
              role="option"
              aria-selected={index === selectedIndex}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-primary">{suggestion.postalCode}</span>
                  <span className="text-muted-foreground mx-2">•</span>
                  <span className="text-foreground">{suggestion.city}</span>
                  {suggestion.district && (
                    <span className="text-muted-foreground ml-2">{suggestion.district}</span>
                  )}
                </div>
                <svg
                  className="w-4 h-4 text-muted-foreground flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      )}

      {error && <p className="text-destructive text-sm mt-1">{error}</p>}
      {!error && fetchError && <p className="text-destructive text-sm mt-1">{fetchError}</p>}

      {/* Helper text */}
      {!error &&
        !showSuggestions &&
        value.length > 0 &&
        value.trim().length < POSTAL_CODE_MIN_QUERY_LENGTH && (
          <p className="text-muted-foreground text-xs mt-1">
            Mindestens {POSTAL_CODE_MIN_QUERY_LENGTH} Zeichen eingeben
          </p>
      )}
    </div>
  );
}
