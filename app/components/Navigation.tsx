'use client';

import { useState } from 'react';
import { Store, Trophy, GamepadIcon, Target, User } from 'lucide-react';

type Tab = 'store' | 'leaderboard' | 'play' | 'quest' | 'profile';

interface NavigationProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const tabs = [
    { id: 'store', icon: Store, label: 'Store' },
    { id: 'leaderboard', icon: Trophy, label: 'Leaderboard' },
    { id: 'play', icon: GamepadIcon, label: 'Play' },
    { id: 'quest', icon: Target, label: 'Quest' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-tg-secondary-bg border-t border-tg-hint/10">
      <div className="flex justify-around items-center h-16">
        {tabs.map(({ id, icon: Icon, label }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => onTabChange(id as Tab)}
              className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
                isActive ? 'text-tg-button' : 'text-tg-hint'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs mt-1">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
