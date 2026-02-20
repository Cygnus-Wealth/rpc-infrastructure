import { describe, it, expect } from 'vitest';
import {
  RpcProviderRole,
  RpcProviderType
} from '../../src/index';

import type {
  RpcEndpointConfig,
  ChainRpcConfig,
  RpcProviderConfig,
  CircuitBreakerConfig,
  RetryConfig,
  HealthCheckConfig,
  UserRpcEndpoint,
  UserRpcConfig,
  PrivacyConfig
} from '../../src/index';

describe('index barrel exports', () => {
  it('should export RpcProviderRole enum', () => {
    expect(RpcProviderRole).toBeDefined();
    expect(RpcProviderRole.PRIMARY).toBe('PRIMARY');
  });

  it('should export RpcProviderType enum', () => {
    expect(RpcProviderType).toBeDefined();
    expect(RpcProviderType.DECENTRALIZED).toBe('DECENTRALIZED');
  });

  it('should export all interface types (compile-time check)', () => {
    const endpoint: RpcEndpointConfig = {
      url: 'https://example.com',
      provider: 'Test',
      role: RpcProviderRole.PRIMARY,
      type: RpcProviderType.DECENTRALIZED,
      rateLimitRps: 10,
      timeoutMs: 5000
    };

    const chainConfig: ChainRpcConfig = {
      chainId: 1,
      chainName: 'Test Chain',
      endpoints: [endpoint],
      totalOperationTimeoutMs: 30000,
      cacheStaleAcceptanceMs: 60000
    };

    const circuitBreaker: CircuitBreakerConfig = {
      failureThreshold: 5,
      openDurationMs: 30000,
      halfOpenMaxAttempts: 2,
      monitorWindowMs: 60000
    };

    const retry: RetryConfig = {
      maxAttempts: 3,
      baseDelayMs: 1000,
      maxDelayMs: 10000
    };

    const healthCheck: HealthCheckConfig = {
      intervalMs: 30000,
      timeoutMs: 5000,
      method: 'eth_blockNumber'
    };

    const privacy: PrivacyConfig = {
      rotateWithinTier: true,
      privacyMode: false,
      queryJitterMs: 100
    };

    const userEndpoint: UserRpcEndpoint = {
      chainId: '1',
      url: 'https://my-node.example.com'
    };

    const userConfig: UserRpcConfig = {
      endpoints: [userEndpoint],
      mode: 'prepend'
    };

    const fullConfig: RpcProviderConfig = {
      chains: { '1': chainConfig },
      circuitBreaker,
      retry,
      healthCheck,
      privacy,
      userOverrides: userConfig
    };

    expect(fullConfig.chains['1'].endpoints).toHaveLength(1);
    expect(fullConfig.userOverrides?.mode).toBe('prepend');
  });
});
