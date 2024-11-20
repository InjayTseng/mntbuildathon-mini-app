'use client';

import { ReactNode } from 'react';
import { WagmiConfig, createConfig } from 'wagmi';
import { mainnet, arbitrum } from 'wagmi/chains';
import { createPublicClient, http } from 'viem';

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http()
  }),
  chains: [mainnet, arbitrum]
});

interface ReownProviderProps {
  children: ReactNode;
}

export function ReownProvider({ children }: ReownProviderProps) {
  return (
    <WagmiConfig config={config}>
      {children}
    </WagmiConfig>
  );
}
