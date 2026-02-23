import { describe, it, expect } from 'vitest';
import type { PrivacyConfig } from '../../../src/interfaces/PrivacyConfig.js';

describe('PrivacyConfig', () => {
  it('should accept a privacy-enabled config', () => {
    const config: PrivacyConfig = {
      rotateWithinTier: true,
      privacyMode: true,
      queryJitterMs: 150
    };

    expect(config.rotateWithinTier).toBe(true);
    expect(config.privacyMode).toBe(true);
    expect(config.queryJitterMs).toBe(150);
  });

  it('should accept a privacy-disabled config', () => {
    const config: PrivacyConfig = {
      rotateWithinTier: false,
      privacyMode: false,
      queryJitterMs: 0
    };

    expect(config.rotateWithinTier).toBe(false);
    expect(config.privacyMode).toBe(false);
    expect(config.queryJitterMs).toBe(0);
  });
});
