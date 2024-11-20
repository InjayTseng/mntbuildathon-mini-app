'use client';

import { Button } from './button';

export default function ConnectButton() {
  return (
    <div className="flex justify-center">
      <appkit-button>
        <Button
          variant="outline"
          className="bg-tg-button text-tg-button-text hover:bg-tg-button/90 flex items-center gap-2"
        >
          <span>Connect</span>
          <span className="text-sm">🔗</span>
        </Button>
      </appkit-button>
    </div>
  );
}
