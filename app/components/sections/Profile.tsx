import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { WalletCard } from "../ui/wallet"

export function Profile() {
  const stats = [
    {
      label: 'Games Played',
      value: '342',
      icon: '🎮',
    },
    {
      label: 'Win Rate',
      value: '68%',
      icon: '📈',
    },
    {
      label: 'Total Score',
      value: '157K',
      icon: '⭐',
    },
    {
      label: 'Achievements',
      value: '24/50',
      icon: '🏆',
    },
  ];

  const achievements = [
    {
      id: 1,
      name: 'First Victory',
      description: 'Win your first game',
      icon: '🎯',
      date: '2024-01-15',
    },
    {
      id: 2,
      name: 'Social Star',
      description: 'Add 10 friends to your network',
      icon: '🌟',
      date: '2024-01-18',
    },
    {
      id: 3,
      name: 'High Roller',
      description: 'Earn 10,000 coins',
      icon: '💰',
      date: '2024-01-20',
    },
  ];

  return (
    <div className="space-y-4 p-4 pb-20">
      {/* Profile Header */}
      <Card className="bg-tg-secondary-bg">
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-tg-button/20 flex items-center justify-center text-2xl">
              👤
            </div>
            <div>
              <h2 className="text-xl font-bold">Player Name</h2>
              <p className="text-tg-hint">Level 42 • Member since Jan 2024</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Wallet Section */}
      <WalletCard />

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-tg-secondary-bg">
            <CardContent className="pt-6">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-tg-hint">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Achievements */}
      <Card className="bg-tg-secondary-bg">
        <CardHeader>
          <CardTitle>Recent Achievements</CardTitle>
          <CardDescription>Your latest gaming milestones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="flex items-center space-x-4 p-3 rounded-lg bg-tg-bg/50"
              >
                <div className="text-2xl">{achievement.icon}</div>
                <div className="flex-1">
                  <h3 className="font-medium">{achievement.name}</h3>
                  <p className="text-sm text-tg-hint">{achievement.description}</p>
                </div>
                <div className="text-sm text-tg-hint">{achievement.date}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
