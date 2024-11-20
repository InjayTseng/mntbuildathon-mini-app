import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"

export function Store() {
  const items = [
    {
      id: 1,
      name: 'Premium Starter Pack',
      icon: '🎁',
      description: 'Get started with exclusive items',
      price: '500 coins',
      discount: '20% OFF',
    },
    {
      id: 2,
      name: 'Power Boost Bundle',
      icon: '⚡',
      description: 'Boost your gaming experience',
      price: '800 coins',
      discount: 'HOT',
    },
    {
      id: 3,
      name: 'Rare Item Box',
      icon: '💎',
      description: 'Contains rare and unique items',
      price: '1000 coins',
      discount: 'NEW',
    },
    {
      id: 4,
      name: 'Season Pass',
      icon: '🏆',
      description: 'Access all premium content',
      price: '2000 coins',
      discount: 'BEST VALUE',
    },
  ];

  return (
    <div className="container py-4 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Store</h2>
        <Button variant="ghost" size="sm">
          My Inventory
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <Card key={item.id} className="bg-tg-secondary-bg border-none overflow-hidden">
            <CardHeader className="p-4 pb-2">
              <div className="relative">
                <div className="w-12 h-12 bg-tg-bg rounded-2xl mb-3 flex items-center justify-center text-2xl shadow-sm">
                  {item.icon}
                </div>
                {item.discount && (
                  <span className="absolute top-0 right-0 bg-tg-button text-tg-button-text text-[10px] px-2 py-0.5 rounded-full">
                    {item.discount}
                  </span>
                )}
              </div>
              <CardTitle className="text-base">{item.name}</CardTitle>
              <CardDescription className="text-xs text-tg-hint">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-tg-text">{item.price}</span>
                <Button variant="telegram" size="sm">
                  Buy
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-4 p-4 bg-tg-secondary-bg rounded-xl">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">Current Balance</h3>
          <span className="text-tg-button font-bold">5,000 coins</span>
        </div>
        <Button className="w-full" variant="telegram">
          Get More Coins
        </Button>
      </div>
    </div>
  );
}
