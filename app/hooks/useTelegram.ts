'use client';

interface TelegramWebApp {
  backgroundColor: string;
  textColor: string;
  hint_color?: string;
  link_color?: string;
  button_color?: string;
  button_text_color?: string;
  secondary_bg_color?: string;
  initDataUnsafe?: {
    user?: any;
    query_id?: string;
  };
  showAlert: (message: string) => void;
  ready: () => void;
  expand: () => void;
}

declare global {
  interface Window {
    Telegram?: {
      WebApp?: TelegramWebApp;
    };
  }
}

export function useTelegram() {
  if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
    const webApp = window.Telegram.WebApp;

    // Set CSS variables for Telegram theme colors
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.style.setProperty('--tg-theme-bg-color', webApp.backgroundColor);
      root.style.setProperty('--tg-theme-text-color', webApp.textColor);
      root.style.setProperty('--tg-theme-hint-color', webApp.hint_color || '#999999');
      root.style.setProperty('--tg-theme-link-color', webApp.link_color || '#2481cc');
      root.style.setProperty('--tg-theme-button-color', webApp.button_color || '#2481cc');
      root.style.setProperty('--tg-theme-button-text-color', webApp.button_text_color || '#ffffff');
      root.style.setProperty(
        '--tg-theme-secondary-bg-color',
        webApp.secondary_bg_color || '#f4f4f5'
      );
    }

    return {
      webApp,
      user: webApp.initDataUnsafe?.user,
      queryId: webApp.initDataUnsafe?.query_id,
      isInTelegram: true,
      showAlert: (message: string) => webApp.showAlert(message),
    };
  }

  return {
    webApp: null,
    user: null,
    queryId: null,
    isInTelegram: false,
    showAlert: (message: string) => alert(message),
  };
}
