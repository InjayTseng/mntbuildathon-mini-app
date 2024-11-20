import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"

export function Play() {
  const games = [
    { 
      id: 1, 
      name: 'Adventure Quest', 
      icon: '🗺️',
      description: 'Embark on an epic journey',
      players: '2.5K playing'
    },
    { 
      id: 2, 
      name: 'Space Battle', 
      icon: '🚀',
      description: 'Conquer the galaxy',
      players: '1.8K playing'
    },
    { 
      id: 3, 
      name: 'Puzzle Master', 
      icon: '🧩',
      description: 'Train your brain',
      players: '3.2K playing'
    },
    { 
      id: 4, 
      name: 'Racing Stars', 
      icon: '🏎️',
      description: 'Race to victory',
      players: '1.2K playing'
    },
  ];

  return (
    <div className="container py-4 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Play Games</h2>
        <Button variant="ghost" size="sm">
          See All
        </Button>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {games.map((game) => (
          <Card key={game.id} className="bg-tg-secondary-bg border-none">
            <CardHeader className="p-4">
              <div className="w-12 h-12 bg-tg-bg rounded-2xl mb-3 flex items-center justify-center text-2xl shadow-sm">
                {game.icon}
              </div>
              <CardTitle className="text-base">{game.name}</CardTitle>
              <CardDescription className="text-xs text-tg-hint">
                {game.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="flex justify-between items-center">
                <span className="text-xs text-tg-hint">{game.players}</span>
                <Button variant="telegram" size="sm">
                  Play
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
