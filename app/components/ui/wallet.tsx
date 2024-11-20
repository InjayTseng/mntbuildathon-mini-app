import { Button } from "./button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"

export function WalletCard() {
  return (
    <Card className="w-full bg-tg-secondary-bg">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Wallet</span>
          <Button 
            variant="outline" 
            className="bg-tg-button text-tg-button-text hover:bg-tg-button/90"
          >
            Connect Wallet
          </Button>
        </CardTitle>
        <CardDescription>Connect your Web3 wallet to access additional features</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-tg-bg/50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-tg-button/20 flex items-center justify-center">
                🌐
              </div>
              <div>
                <p className="font-medium">Not Connected</p>
                <p className="text-sm text-tg-hint">Connect to view balance</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">0.00</p>
              <p className="text-sm text-tg-hint">ETH</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <Button 
              variant="outline" 
              className="w-full bg-tg-bg/50 hover:bg-tg-bg/70"
              disabled
            >
              Send
            </Button>
            <Button 
              variant="outline" 
              className="w-full bg-tg-bg/50 hover:bg-tg-bg/70"
              disabled
            >
              Receive
            </Button>
          </div>

          <div className="pt-4">
            <h3 className="text-sm font-medium mb-2">Recent Transactions</h3>
            <div className="text-center py-6 text-tg-hint">
              No transactions yet
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
