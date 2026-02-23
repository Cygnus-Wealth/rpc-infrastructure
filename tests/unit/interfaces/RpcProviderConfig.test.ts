import { describe, it, expect } from 'vitest';
import { RpcProviderRole } from '../../../src/enums/RpcProviderRole.js';
import { RpcProviderType } from '../../../src/enums/RpcProviderType.js';
import type { RpcProviderConfig } from '../../../src/interfaces/RpcProviderConfig.js';

describe('RpcProviderConfig', () => {
  it('should accept a full multi-chain config without user overrides', () => {
    const config: RpcProviderConfig = {
      chains: {
        '1': {
          chainId: 1,
          chainName: 'Ethereum Mainnet',
          endpoints: [
            {
              url: 'https://pokt-eth.example.com',
              provider: 'POKT Network',
              role: RpcProviderRole.PRIMARY,
              type: RpcProviderType.DECENTRALIZED,
              rateLimitRps: 50,
              timeoutMs: 10000
            }
          ],
          totalOperationTimeoutMs: 30000,
          cacheStaleAcceptanceMs: 60000
        }
      },
      circuitBreaker: {
        failureThreshold: 5,
        openDurationMs: 30000,
        halfOpenMaxAttempts: 2,
        monitorWindowMs: 60000
      },
      retry: {
        maxAttempts: 3,
        baseDelayMs: 1000,
        maxDelayMs: 10000
      },
      healthCheck: {
        intervalMs: 30000,
        timeoutMs: 5000,
        method: 'eth_blockNumber'
      },
      privacy: {
        rotateWithinTier: true,
        privacyMode: false,
        queryJitterMs: 100
      }
    };

    expect(config.chains['1'].chainName).toBe('Ethereum Mainnet');
    expect(config.circuitBreaker.failureThreshold).toBe(5);
    expect(config.retry.maxAttempts).toBe(3);
    expect(config.healthCheck.method).toBe('eth_blockNumber');
    expect(config.privacy.rotateWithinTier).toBe(true);
    expect(config.userOverrides).toBeUndefined();
  });

  it('should accept config with user overrides', () => {
    const config: RpcProviderConfig = {
      chains: {
        '1': {
          chainId: 1,
          chainName: 'Ethereum Mainnet',
          endpoints: [],
          totalOperationTimeoutMs: 30000,
          cacheStaleAcceptanceMs: 60000
        }
      },
      circuitBreaker: {
        failureThreshold: 5,
        openDurationMs: 30000,
        halfOpenMaxAttempts: 2,
        monitorWindowMs: 60000
      },
      retry: {
        maxAttempts: 3,
        baseDelayMs: 1000,
        maxDelayMs: 10000
      },
      healthCheck: {
        intervalMs: 30000,
        timeoutMs: 5000,
        method: 'eth_blockNumber'
      },
      privacy: {
        rotateWithinTier: true,
        privacyMode: true,
        queryJitterMs: 150
      },
      userOverrides: {
        endpoints: [
          { chainId: '1', url: 'https://my-eth.example.com/rpc', label: 'My Node' }
        ],
        mode: 'prepend'
      }
    };

    expect(config.userOverrides).toBeDefined();
    expect(config.userOverrides!.mode).toBe('prepend');
    expect(config.userOverrides!.endpoints).toHaveLength(1);
  });
});
