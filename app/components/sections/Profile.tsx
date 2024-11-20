import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"

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
    <div className="container py-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-tg-secondary-bg rounded-full flex items-center justify-center text-3xl">
            🎮
          </div>
          <div>
            <h2 className="text-xl font-semibold">Player One</h2>
            <p className="text-sm text-tg-hint">Level 42 • Premium Member</p>
          </div>
        </div>
        <Button variant="ghost" size="sm">
          Edit
        </Button>
      </div>

      <Card className="bg-tg-secondary-bg border-none">
        <CardContent className="p-4 grid grid-cols-2 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-tg-bg rounded-xl p-3 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-tg-secondary-bg rounded-lg flex items-center justify-center text-xl">
                {stat.icon}
              </div>
              <div>
                <p className="text-sm text-tg-hint">{stat.label}</p>
                <p className="font-semibold">{stat.value}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-tg-secondary-bg border-none">
        <CardHeader className="p-4 pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-base">Recent Achievements</CardTitle>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-2 space-y-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="flex items-center justify-between bg-tg-bg rounded-xl p-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-tg-secondary-bg rounded-lg flex items-center justify-center text-xl">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="font-medium">{achievement.name}</h3>
                  <p className="text-xs text-tg-hint">{achievement.description}</p>
                </div>
              </div>
              <span className="text-xs text-tg-hint">
                {new Date(achievement.date).toLocaleDateString()}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="space-y-2">
        <Button
          className="w-full justify-start"
          variant="ghost"
          size="lg"
        >
          <span className="mr-3">⚙️</span>
          Settings
        </Button>
        <Button
          className="w-full justify-start"
          variant="ghost"
          size="lg"
        >
          <span className="mr-3">❓</span>
          Help & Support
        </Button>
        <Button
          className="w-full justify-start text-red-500"
          variant="ghost"
          size="lg"
        >
          <span className="mr-3">🚪</span>
          Sign Out
        </Button>
      </div>
    </div>
  );
}
