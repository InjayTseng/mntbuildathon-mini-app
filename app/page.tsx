'use client';

import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Store } from './components/sections/Store';
import { Leaderboard } from './components/sections/Leaderboard';
import { Play } from './components/sections/Play';
import { Quest } from './components/sections/Quest';
import { Profile } from './components/sections/Profile';
import { useTelegram } from './hooks/useTelegram';

type Tab = 'store' | 'leaderboard' | 'play' | 'quest' | 'profile';

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('play');
  const { webApp, isInTelegram } = useTelegram();

  useEffect(() => {
    // Initialize Telegram WebApp if available
    if (webApp && isInTelegram) {
      webApp.ready();
      webApp.expand();
    }
  }, [webApp, isInTelegram]);

  const renderContent = () => {
    switch (activeTab) {
      case 'store':
        return <Store />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'play':
        return <Play />;
      case 'quest':
        return <Quest />;
      case 'profile':
        return <Profile />;
      default:
        return <Play />;
    }
  };

  return (
    <main className="min-h-screen bg-tg-bg text-tg-text">
      <div className="pb-20">
        {renderContent()}
      </div>
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </main>
  );
}
