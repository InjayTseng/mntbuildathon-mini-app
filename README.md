# MNT Buildathon Telegram Mini App

A modern, responsive Telegram Mini App built for the MNT Buildathon. This app features a game-centered interface with seamless Telegram integration, built using Next.js 14 and TypeScript.

![Telegram Mini App](https://telegram.org/img/t_logo.png)

## 🌟 Features

- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Telegram Integration**: Seamless WebApp SDK integration
- **Modern UI Components**: Built with Shadcn UI and Tailwind CSS
- **Theme Support**: Dynamic Telegram theme color adaptation
- **Interactive Sections**:
  - 🏪 Store: Browse and purchase items
  - 🏆 Leaderboard: Track player rankings
  - 🎮 Play: Discover and play games
  - ⚔️ Quest: Complete challenges and missions
  - 👤 Profile: View stats and achievements

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: 
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Shadcn UI](https://ui.shadcn.com/)
- **Integration**: [Telegram Mini App SDK](https://core.telegram.org/bots/webapps)
- **Deployment**: [Vercel](https://vercel.com)

## 📦 Installation

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
   NEXT_PUBLIC_BOT_USERNAME=your_bot_username
   NEXT_PUBLIC_BASE_URL=your_base_url
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
mntbuildathon-mini-app/
├── app/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Store.tsx
│   │   │   ├── Leaderboard.tsx
│   │   │   ├── Play.tsx
│   │   │   ├── Quest.tsx
│   │   │   └── Profile.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       └── card.tsx
│   ├── hooks/
│   │   └── useTelegram.ts
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   └── utils.ts
├── public/
├── styles/
└── types/
```

## 🎨 Features & Components

### Telegram Integration
- Automatic theme color adaptation
- Native alert dialogs
- WebApp expansion support
- User data access

### UI Components
- Custom Button component with Telegram styling
- Responsive Card layouts
- Interactive Navigation bar
- Loading states and animations

### Sections
1. **Store**
   - Item browsing
   - Purchase functionality
   - Price display

2. **Leaderboard**
   - Player rankings
   - Score tracking
   - Achievement display

3. **Play**
   - Game discovery
   - Quick start options
   - Game stats

4. **Quest**
   - Challenge tracking
   - Progress indicators
   - Reward system

5. **Profile**
   - User statistics
   - Achievement badges
   - Game history

## 🔧 Development

### Commands

- `npm run dev`: Start development server
- `npm run build`: Build production version
- `npm start`: Start production server
- `npm run lint`: Run ESLint

### Environment Variables

Required environment variables:

```env
NEXT_PUBLIC_BOT_USERNAME=
NEXT_PUBLIC_BASE_URL=
```

## 📱 Deployment

The app is deployed on Vercel and can be accessed at:
[https://mntbuildathon-mini-app.vercel.app](https://mntbuildathon-mini-app.vercel.app)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- [Telegram Mini Apps Documentation](https://core.telegram.org/bots/webapps)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn UI](https://ui.shadcn.com/docs)

## 📞 Contact

David Tseng - [@InjayTseng](https://github.com/InjayTseng)

Project Link: [https://github.com/InjayTseng/mntbuildathon-mini-app](https://github.com/InjayTseng/mntbuildathon-mini-app)
