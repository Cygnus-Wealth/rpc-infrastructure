import { describe, it, expect } from 'vitest';
import { RpcProviderRole } from '../../../src/enums/RpcProviderRole';
import { RpcProviderType } from '../../../src/enums/RpcProviderType';
import type { RpcEndpointConfig } from '../../../src/interfaces/RpcEndpointConfig';

describe('RpcEndpointConfig', () => {
  it('should accept a valid endpoint config with all required fields', () => {
    const config: RpcEndpointConfig = {
      url: 'https://eth-mainnet.g.alchemy.com/v2/key',
      provider: 'Alchemy',
      role: RpcProviderRole.PRIMARY,
      type: RpcProviderType.MANAGED,
      rateLimitRps: 100,
      timeoutMs: 5000
    };

    expect(config.url).toBe('https://eth-mainnet.g.alchemy.com/v2/key');
    expect(config.provider).toBe('Alchemy');
    expect(config.role).toBe(RpcProviderRole.PRIMARY);
    expect(config.type).toBe(RpcProviderType.MANAGED);
    expect(config.rateLimitRps).toBe(100);
    expect(config.timeoutMs).toBe(5000);
  });

  it('should accept optional wsUrl', () => {
    const config: RpcEndpointConfig = {
      url: 'https://eth-mainnet.g.alchemy.com/v2/key',
      wsUrl: 'wss://eth-mainnet.g.alchemy.com/v2/key',
      provider: 'Alchemy',
      role: RpcProviderRole.PRIMARY,
      type: RpcProviderType.MANAGED,
      rateLimitRps: 100,
      timeoutMs: 5000
    };

    expect(config.wsUrl).toBe('wss://eth-mainnet.g.alchemy.com/v2/key');
  });

  it('should accept optional weight', () => {
    const config: RpcEndpointConfig = {
      url: 'https://eth.pokt.network/v1/lb/key',
      provider: 'POKT Network',
      role: RpcProviderRole.PRIMARY,
      type: RpcProviderType.DECENTRALIZED,
      rateLimitRps: 50,
      timeoutMs: 10000,
      weight: 80
    };

    expect(config.weight).toBe(80);
  });

  it('should work with decentralized provider types', () => {
    const config: RpcEndpointConfig = {
      url: 'https://pokt-gateway.example.com',
      provider: 'POKT Gateway',
      role: RpcProviderRole.PRIMARY,
      type: RpcProviderType.DECENTRALIZED,
      rateLimitRps: 25,
      timeoutMs: 15000
    };

    expect(config.type).toBe(RpcProviderType.DECENTRALIZED);
  });

  it('should work with user provider type', () => {
    const config: RpcEndpointConfig = {
      url: 'https://my-node.example.com/rpc',
      provider: 'User Node',
      role: RpcProviderRole.PRIMARY,
      type: RpcProviderType.USER,
      rateLimitRps: 0,
      timeoutMs: 5000
    };

    expect(config.type).toBe(RpcProviderType.USER);
  });
});
