# MNT Buildathon Mini App

A Telegram Mini App for Web3 gaming, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎮 Game-centered interface
- 🔐 Web3 wallet integration with social login
- 🎨 Responsive design with Telegram theme support
- 🏪 NFT marketplace integration (Coming Soon)
- 📱 Mobile-first design

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Web3**: Reown AppKit, Wagmi, Viem
- **NFT Marketplace**: Lootex SDK (Coming Soon)

## Getting Started

### Prerequisites

- Node.js (v18.17.0 or higher)
- npm (v10.9.0 or higher)
- A Reown Cloud Project ID (get one at [cloud.reown.com](https://cloud.reown.com))

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/InjayTseng/mntbuildathon-mini-app.git
   cd mntbuildathon-mini-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_REOWN_PROJECT_ID=your_reown_project_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## SDK Integrations

### Reown AppKit Integration

The app uses Reown AppKit for Web3 authentication and wallet management. It provides:

- 🔑 Multi-method authentication:
  - Web3 wallets (MetaMask, WalletConnect, etc.)
  - Social logins (Google, X/Twitter, GitHub, Discord, Apple, Facebook, Farcaster)
  - Email login

#### Configuration

The Reown AppKit is configured in `app/providers/AppKitProvider.tsx`:

```typescript
createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, arbitrum],
  projectId: process.env.NEXT_PUBLIC_REOWN_PROJECT_ID,
  metadata: {
    name: 'MNT Buildathon Mini App',
    description: 'A Telegram Mini App for Web3 gaming',
    // ...
  },
  features: {
    analytics: true,
    email: true,
    socials: ['google', 'x', 'github', 'discord', 'apple', 'facebook', 'farcaster'],
    emailShowWallets: true,
  }
})
```

#### Usage

The app provides a custom connect button component that can be used anywhere:

```typescript
import ConnectButton from '@/components/ui/connect-button'

export function YourComponent() {
  return <ConnectButton />
}
```

### Lootex SDK Integration (Coming Soon)

The app will integrate with Lootex SDK for NFT marketplace functionality:

- 🖼️ NFT display and management
- 💰 NFT trading capabilities
- 🏷️ Price discovery and market data
- 📊 Trading history and analytics

#### Planned Features

- NFT Gallery
- Buy/Sell functionality
- Price tracking
- Transaction history
- Collection management

Stay tuned for updates on the Lootex SDK integration!

## Project Structure

```
mntbuildathon-mini-app/
├── app/
│   ├── components/
│   │   ├── sections/      # Page sections
│   │   └── ui/           # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── providers/        # Context providers
│   └── layout.tsx        # Root layout
├── public/              # Static assets
└── styles/             # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Telegram Mini Apps Documentation](https://core.telegram.org/bots/webapps)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn UI](https://ui.shadcn.com/docs)

## Contact

David Tseng - [@dtseng](https://t.me/dtseng)

Project Link: [https://github.com/InjayTseng/mntbuildathon-mini-app](https://github.com/InjayTseng/mntbuildathon-mini-app)
