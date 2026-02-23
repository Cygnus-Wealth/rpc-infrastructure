import { describe, it, expect } from 'vitest';
import { RpcProviderType } from '../../../src/enums/RpcProviderType.js';

describe('RpcProviderType', () => {
  it('should define MANAGED type', () => {
    expect(RpcProviderType.MANAGED).toBe('MANAGED');
  });

  it('should define PUBLIC type', () => {
    expect(RpcProviderType.PUBLIC).toBe('PUBLIC');
  });

  it('should define COMMUNITY type', () => {
    expect(RpcProviderType.COMMUNITY).toBe('COMMUNITY');
  });

  it('should define DECENTRALIZED type', () => {
    expect(RpcProviderType.DECENTRALIZED).toBe('DECENTRALIZED');
  });

  it('should define USER type', () => {
    expect(RpcProviderType.USER).toBe('USER');
  });

  it('should have exactly 5 types', () => {
    const values = Object.values(RpcProviderType);
    expect(values).toHaveLength(5);
  });

  it('should contain all expected values', () => {
    const values = Object.values(RpcProviderType);
    expect(values).toEqual(
      expect.arrayContaining(['MANAGED', 'PUBLIC', 'COMMUNITY', 'DECENTRALIZED', 'USER'])
    );
  });
});
