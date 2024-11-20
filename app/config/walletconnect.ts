'use client';

import { ConfigCtrlState } from '@walletconnect/modal-core';

export const WALLET_CONNECT_CONFIG: ConfigCtrlState = {
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || '',
  chains: [1], // Ethereum mainnet by default
  mobileWallets: [
    {
      id: 'metamask',
      name: 'MetaMask',
      links: {
        native: 'metamask://',
        universal: 'https://metamask.app.link'
      }
    }
  ],
  desktopWallets: [
    {
      id: 'metamask',
      name: 'MetaMask',
      links: {
        native: 'metamask://',
        universal: 'https://metamask.io'
      }
    }
  ],
  walletImages: {
    metamask: '/images/metamask.svg'
  },
  enableAuthMode: true,
  enableExplorer: true,
  explorerRecommendedWalletIds: ['metamask'],
  explorerExcludedWalletIds: [],
  termsOfServiceUrl: '',
  privacyPolicyUrl: ''
};
