'use client';

import { mainnet, arbitrum } from 'wagmi/chains';

export const REOWN_CONFIG = {
  projectId: process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || '',
  networks: [mainnet, arbitrum],
  metadata: {
    name: 'MNT Buildathon Mini App',
    description: 'A Telegram Mini App for Web3 gaming',
    url: 'https://mnt-buildathon.app',
    icons: ['https://mnt-buildathon.app/icon.png']
  },
  features: {
    email: true,
    socials: ['google', 'x', 'github', 'discord', 'apple', 'facebook', 'farcaster'],
    emailShowWallets: true,
  },
  allWallets: 'SHOW' as const,
  theme: {
    '--rk-colors-bg-app': 'var(--tg-theme-bg-color)',
    '--rk-colors-bg-modal': 'var(--tg-theme-secondary-bg-color)',
    '--rk-colors-accent': 'var(--tg-theme-button-color)',
    '--rk-colors-accent-foreground': 'var(--tg-theme-button-text-color)',
    '--rk-colors-foreground': 'var(--tg-theme-text-color)',
    '--rk-colors-muted': 'var(--tg-theme-hint-color)',
    '--rk-radii-modal': '12px',
    '--rk-fonts-body': 'inherit'
  }
};
