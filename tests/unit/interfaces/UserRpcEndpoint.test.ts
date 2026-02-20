import { describe, it, expect } from 'vitest';
import type { UserRpcEndpoint } from '../../../src/interfaces/UserRpcEndpoint';

describe('UserRpcEndpoint', () => {
  it('should accept a minimal user endpoint', () => {
    const endpoint: UserRpcEndpoint = {
      chainId: '1',
      url: 'https://my-node.example.com/rpc'
    };

    expect(endpoint.chainId).toBe('1');
    expect(endpoint.url).toBe('https://my-node.example.com/rpc');
  });

  it('should accept optional wsUrl and label', () => {
    const endpoint: UserRpcEndpoint = {
      chainId: '137',
      url: 'https://my-polygon-node.example.com/rpc',
      wsUrl: 'wss://my-polygon-node.example.com/ws',
      label: 'My Polygon Node'
    };

    expect(endpoint.wsUrl).toBe('wss://my-polygon-node.example.com/ws');
    expect(endpoint.label).toBe('My Polygon Node');
  });
});
