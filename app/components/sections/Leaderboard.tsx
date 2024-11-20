import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"

export function Leaderboard() {
  const leaderboardData = [
    {
      id: 1,
      rank: 1,
      name: 'Alex Gaming',
      score: '125,430',
      avatar: '👑',
      change: '+2',
    },
    {
      id: 2,
      rank: 2,
      name: 'Pro Player',
      score: '98,750',
      avatar: '🥈',
      change: '-1',
    },
    {
      id: 3,
      rank: 3,
      name: 'Game Master',
      score: '87,200',
      avatar: '🥉',
      change: '+1',
    },
    {
      id: 4,
      rank: 4,
      name: 'Epic Gamer',
      score: '76,890',
      avatar: '🎮',
      change: '0',
    },
  ];

  const categories = ['Global', 'Friends', 'Weekly', 'Monthly'];

  return (
    <div className="container py-4 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Leaderboard</h2>
        <div className="flex gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === 'Global' ? 'telegram' : 'ghost'}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <Card className="bg-tg-secondary-bg border-none">
        <CardHeader className="p-4 pb-2">
          <CardTitle className="text-base">Top Players</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-2 space-y-3">
          {leaderboardData.map((player) => (
            <div
              key={player.id}
              className="flex items-center justify-between bg-tg-bg rounded-xl p-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-tg-secondary-bg rounded-full flex items-center justify-center text-xl">
                  {player.avatar}
                </div>
                <div>
                  <h3 className="font-medium">{player.name}</h3>
                  <p className="text-xs text-tg-hint">{player.score} points</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">#{player.rank}</span>
                <span className={`text-xs ${
                  player.change.startsWith('+') 
                    ? 'text-green-500' 
                    : player.change.startsWith('-') 
                      ? 'text-red-500' 
                      : 'text-tg-hint'
                }`}>
                  {player.change}
                </span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="bg-tg-secondary-bg rounded-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold">Your Rank</h3>
            <p className="text-sm text-tg-hint">Top 15%</p>
          </div>
          <div className="text-right">
            <p className="font-bold">#42</p>
            <p className="text-xs text-green-500">+5 this week</p>
          </div>
        </div>
        <Button className="w-full" variant="telegram">
          View Full Rankings
        </Button>
      </div>
    </div>
  );
}
