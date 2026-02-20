import { describe, it, expect } from 'vitest';
import type { RetryConfig } from '../../../src/interfaces/RetryConfig';

describe('RetryConfig', () => {
  it('should accept a valid retry config', () => {
    const config: RetryConfig = {
      maxAttempts: 3,
      baseDelayMs: 1000,
      maxDelayMs: 10000
    };

    expect(config.maxAttempts).toBe(3);
    expect(config.baseDelayMs).toBe(1000);
    expect(config.maxDelayMs).toBe(10000);
  });

  it('should allow single-attempt config (no retries)', () => {
    const config: RetryConfig = {
      maxAttempts: 1,
      baseDelayMs: 0,
      maxDelayMs: 0
    };

    expect(config.maxAttempts).toBe(1);
  });
});
