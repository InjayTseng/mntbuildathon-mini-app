import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"

export function Quest() {
  const quests = [
    {
      id: 1,
      name: 'Daily Login',
      description: 'Log in for 7 consecutive days',
      reward: '500 coins',
      progress: 5,
      total: 7,
      icon: '📅',
      type: 'daily',
    },
    {
      id: 2,
      name: 'Win Streak',
      description: 'Win 5 games in a row',
      reward: '1000 coins',
      progress: 3,
      total: 5,
      icon: '🏆',
      type: 'weekly',
    },
    {
      id: 3,
      name: 'Social Butterfly',
      description: 'Add 3 new friends',
      reward: '300 coins',
      progress: 1,
      total: 3,
      icon: '🦋',
      type: 'weekly',
    },
    {
      id: 4,
      name: 'High Score',
      description: 'Score over 10,000 points',
      reward: '2000 coins',
      progress: 8500,
      total: 10000,
      icon: '⭐',
      type: 'special',
    },
  ];

  return (
    <div className="container py-4 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Quests</h2>
        <Button variant="ghost" size="sm">
          History
        </Button>
      </div>

      <div className="space-y-3">
        {quests.map((quest) => (
          <Card key={quest.id} className="bg-tg-secondary-bg border-none">
            <CardHeader className="p-4 pb-2">
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-tg-bg rounded-xl flex items-center justify-center text-xl">
                    {quest.icon}
                  </div>
                  <div>
                    <CardTitle className="text-base flex items-center gap-2">
                      {quest.name}
                      <span className="text-xs px-2 py-0.5 bg-tg-bg rounded-full text-tg-hint">
                        {quest.type}
                      </span>
                    </CardTitle>
                    <CardDescription className="text-xs text-tg-hint">
                      {quest.description}
                    </CardDescription>
                  </div>
                </div>
                <span className="text-sm font-medium text-tg-button">
                  {quest.reward}
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-2">
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-tg-hint">
                  <span>Progress</span>
                  <span>{quest.progress}/{quest.total}</span>
                </div>
                <div className="h-2 bg-tg-bg rounded-full overflow-hidden">
                  <div
                    className="h-full bg-tg-button rounded-full transition-all"
                    style={{
                      width: `${(quest.progress / quest.total) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-tg-secondary-bg rounded-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold">Daily Progress</h3>
            <p className="text-sm text-tg-hint">2/3 quests completed</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-tg-button">+1500 coins</p>
            <p className="text-xs text-tg-hint">earned today</p>
          </div>
        </div>
        <div className="h-2 bg-tg-bg rounded-full overflow-hidden">
          <div
            className="h-full bg-tg-button rounded-full transition-all"
            style={{ width: '66%' }}
          />
        </div>
      </div>
    </div>
  );
}
