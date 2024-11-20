import { useEffect, useState } from 'react';

declare global {
  interface Window {
    Telegram: {
      WebApp: any;
    };
  }
}

export const useTelegram = () => {
  const [webApp, setWebApp] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const WebApp = window.Telegram?.WebApp;
      if (WebApp) {
        setWebApp(WebApp);
        WebApp.ready();
      }
    }
  }, []);

  return webApp;
};
