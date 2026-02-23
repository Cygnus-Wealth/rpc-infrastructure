import { describe, it, expect } from 'vitest';
import type { UserRpcConfig } from '../../../src/interfaces/UserRpcConfig.js';

describe('UserRpcConfig', () => {
  it('should accept override mode', () => {
    const config: UserRpcConfig = {
      endpoints: [
        { chainId: '1', url: 'https://my-eth.example.com/rpc' }
      ],
      mode: 'override'
    };

    expect(config.mode).toBe('override');
    expect(config.endpoints).toHaveLength(1);
  });

  it('should accept prepend mode', () => {
    const config: UserRpcConfig = {
      endpoints: [
        { chainId: '1', url: 'https://my-eth.example.com/rpc', label: 'My ETH' },
        { chainId: '137', url: 'https://my-poly.example.com/rpc' }
      ],
      mode: 'prepend'
    };

    expect(config.mode).toBe('prepend');
    expect(config.endpoints).toHaveLength(2);
  });
});
