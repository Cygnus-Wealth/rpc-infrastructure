import { describe, it, expect } from 'vitest';
import type { CircuitBreakerConfig } from '../../../src/interfaces/CircuitBreakerConfig.js';

describe('CircuitBreakerConfig', () => {
  it('should accept a valid circuit breaker config', () => {
    const config: CircuitBreakerConfig = {
      failureThreshold: 5,
      openDurationMs: 30000,
      halfOpenMaxAttempts: 2,
      monitorWindowMs: 60000
    };

    expect(config.failureThreshold).toBe(5);
    expect(config.openDurationMs).toBe(30000);
    expect(config.halfOpenMaxAttempts).toBe(2);
    expect(config.monitorWindowMs).toBe(60000);
  });

  it('should allow aggressive thresholds for sensitive configs', () => {
    const config: CircuitBreakerConfig = {
      failureThreshold: 2,
      openDurationMs: 60000,
      halfOpenMaxAttempts: 1,
      monitorWindowMs: 30000
    };

    expect(config.failureThreshold).toBe(2);
    expect(config.halfOpenMaxAttempts).toBe(1);
  });
});
