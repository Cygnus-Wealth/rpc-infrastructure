import { describe, it, expect } from 'vitest';
import type { HealthCheckConfig } from '../../../src/interfaces/HealthCheckConfig.js';

describe('HealthCheckConfig', () => {
  it('should accept a valid health check config', () => {
    const config: HealthCheckConfig = {
      intervalMs: 30000,
      timeoutMs: 5000,
      method: 'eth_blockNumber'
    };

    expect(config.intervalMs).toBe(30000);
    expect(config.timeoutMs).toBe(5000);
    expect(config.method).toBe('eth_blockNumber');
  });

  it('should accept different health check methods', () => {
    const config: HealthCheckConfig = {
      intervalMs: 60000,
      timeoutMs: 3000,
      method: 'eth_chainId'
    };

    expect(config.method).toBe('eth_chainId');
  });
});
