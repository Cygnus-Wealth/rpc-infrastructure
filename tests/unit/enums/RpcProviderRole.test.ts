import { describe, it, expect } from 'vitest';
import { RpcProviderRole } from '../../../src/enums/RpcProviderRole.js';

describe('RpcProviderRole', () => {
  it('should define PRIMARY role', () => {
    expect(RpcProviderRole.PRIMARY).toBe('PRIMARY');
  });

  it('should define SECONDARY role', () => {
    expect(RpcProviderRole.SECONDARY).toBe('SECONDARY');
  });

  it('should define TERTIARY role', () => {
    expect(RpcProviderRole.TERTIARY).toBe('TERTIARY');
  });

  it('should define EMERGENCY role', () => {
    expect(RpcProviderRole.EMERGENCY).toBe('EMERGENCY');
  });

  it('should have exactly 4 roles', () => {
    const values = Object.values(RpcProviderRole);
    expect(values).toHaveLength(4);
  });

  it('should contain all expected values', () => {
    const values = Object.values(RpcProviderRole);
    expect(values).toEqual(
      expect.arrayContaining(['PRIMARY', 'SECONDARY', 'TERTIARY', 'EMERGENCY'])
    );
  });
});
