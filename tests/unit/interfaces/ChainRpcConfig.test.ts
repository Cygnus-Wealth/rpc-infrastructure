import { describe, it, expect } from 'vitest';
import { RpcProviderRole } from '../../../src/enums/RpcProviderRole';
import { RpcProviderType } from '../../../src/enums/RpcProviderType';
import type { ChainRpcConfig } from '../../../src/interfaces/ChainRpcConfig';

describe('ChainRpcConfig', () => {
  it('should accept a valid chain RPC config', () => {
    const config: ChainRpcConfig = {
      chainId: 1,
      chainName: 'Ethereum Mainnet',
      endpoints: [
        {
          url: 'https://pokt-gateway.example.com',
          provider: 'POKT Network',
          role: RpcProviderRole.PRIMARY,
          type: RpcProviderType.DECENTRALIZED,
          rateLimitRps: 50,
          timeoutMs: 10000
        }
      ],
      totalOperationTimeoutMs: 30000,
      cacheStaleAcceptanceMs: 60000
    };

    expect(config.chainId).toBe(1);
    expect(config.chainName).toBe('Ethereum Mainnet');
    expect(config.endpoints).toHaveLength(1);
    expect(config.totalOperationTimeoutMs).toBe(30000);
    expect(config.cacheStaleAcceptanceMs).toBe(60000);
  });

  it('should support multiple endpoints forming a fallback chain', () => {
    const config: ChainRpcConfig = {
      chainId: 137,
      chainName: 'Polygon',
      endpoints: [
        {
          url: 'https://pokt-polygon.example.com',
          provider: 'POKT Network',
          role: RpcProviderRole.PRIMARY,
          type: RpcProviderType.DECENTRALIZED,
          rateLimitRps: 50,
          timeoutMs: 10000
        },
        {
          url: 'https://drpc-polygon.example.com',
          provider: 'dRPC',
          role: RpcProviderRole.SECONDARY,
          type: RpcProviderType.DECENTRALIZED,
          rateLimitRps: 30,
          timeoutMs: 10000
        },
        {
          url: 'https://polygon-rpc.com',
          provider: 'Polygon Public',
          role: RpcProviderRole.EMERGENCY,
          type: RpcProviderType.PUBLIC,
          rateLimitRps: 10,
          timeoutMs: 15000
        }
      ],
      totalOperationTimeoutMs: 45000,
      cacheStaleAcceptanceMs: 120000
    };

    expect(config.endpoints).toHaveLength(3);
    expect(config.endpoints[0].role).toBe(RpcProviderRole.PRIMARY);
    expect(config.endpoints[1].role).toBe(RpcProviderRole.SECONDARY);
    expect(config.endpoints[2].role).toBe(RpcProviderRole.EMERGENCY);
  });
});
