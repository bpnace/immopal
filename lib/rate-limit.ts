/**
 * Client-side rate limiting utility
 * Prevents form spam by enforcing cooldown periods between submissions
 */

const COOLDOWN_MS = 60000; // 1 minute cooldown
const submissions = new Map<string, number>();

/**
 * Check if a submission is allowed for the given identifier
 * @param identifier - Unique identifier (e.g., "email-phone" combination)
 * @returns true if submission is allowed, false if still in cooldown
 */
export function canSubmit(identifier: string): boolean {
  const lastSubmission = submissions.get(identifier);
  const now = Date.now();

  if (lastSubmission && now - lastSubmission < COOLDOWN_MS) {
    return false;
  }

  submissions.set(identifier, now);
  return true;
}

/**
 * Get remaining cooldown time in milliseconds
 * @param identifier - Unique identifier
 * @returns Remaining cooldown time in milliseconds, or 0 if no cooldown
 */
export function getRemainingCooldown(identifier: string): number {
  const lastSubmission = submissions.get(identifier);
  if (!lastSubmission) return 0;

  const elapsed = Date.now() - lastSubmission;
  return Math.max(0, COOLDOWN_MS - elapsed);
}

/**
 * Clear a submission record (useful for testing or manual override)
 * @param identifier - Unique identifier to clear
 */
export function clearSubmission(identifier: string): void {
  submissions.delete(identifier);
}
