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
    // Only initialize if we're in Telegram
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
      {!isInTelegram && (
        <div className="fixed top-0 left-0 right-0 bg-yellow-500/90 text-black p-2 text-center text-sm">
          ⚠️ This app works best inside Telegram
        </div>
      )}
      <div className={`pb-20 ${!isInTelegram ? 'pt-10' : ''}`}>
        {renderContent()}
      </div>
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </main>
  );
}
