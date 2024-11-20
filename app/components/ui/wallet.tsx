import { Button } from "./button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { useAccount } from 'wagmi'
import { useTelegram } from "@/app/hooks/useTelegram"
import ConnectButton from './connect-button'

export function WalletCard() {
  const { isConnected, address } = useAccount();
  const { showAlert } = useTelegram();

  const handleDisconnect = async () => {
    try {
      // The disconnect functionality is handled by AppKit
      showAlert('Disconnected successfully');
    } catch (error) {
      showAlert('Failed to disconnect. Please try again.');
      console.error('Disconnect error:', error);
    }
  };

  return (
    <Card className="w-full bg-tg-secondary-bg">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Web3 Wallet</span>
          {isConnected ? (
            <Button 
              onClick={handleDisconnect}
              variant="outline" 
              className="bg-red-500/80 text-white hover:bg-red-500 flex items-center gap-2"
            >
              <span>Disconnect</span>
              <span className="text-sm">🔌</span>
            </Button>
          ) : (
            <ConnectButton />
          )}
        </CardTitle>
        <CardDescription>
          {isConnected 
            ? "Connected to your Web3 wallet"
            : "Connect with email, social, or Web3 wallet"
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg bg-tg-bg/50 border border-tg-hint/10">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-tg-button/20 flex items-center justify-center">
                {isConnected ? "👛" : "🌐"}
              </div>
              <div>
                <p className="font-medium">
                  {isConnected ? "Connected" : "Not Connected"}
                </p>
                <p className="text-sm text-tg-hint">
                  {isConnected 
                    ? `${address?.slice(0, 6)}...${address?.slice(-4)}`
                    : "Connect to view address"
                  }
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">-</p>
              <p className="text-sm text-tg-hint">ETH</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <Button 
              variant="outline" 
              className="w-full bg-tg-bg/50 hover:bg-tg-bg/70 flex items-center justify-center gap-2"
              disabled={!isConnected}
            >
              <span>Send</span>
              <span className="text-sm">📤</span>
            </Button>
            <Button 
              variant="outline" 
              className="w-full bg-tg-bg/50 hover:bg-tg-bg/70 flex items-center justify-center gap-2"
              disabled={!isConnected}
            >
              <span>Receive</span>
              <span className="text-sm">📥</span>
            </Button>
          </div>

          <div className="pt-4">
            <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
              <span>Recent Activity</span>
              <span className="text-xs text-tg-hint">📋</span>
            </h3>
            <div className="text-center py-6 text-tg-hint bg-tg-bg/30 rounded-lg border border-tg-hint/10">
              {isConnected ? "No recent activity" : "Connect wallet to view activity"}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
