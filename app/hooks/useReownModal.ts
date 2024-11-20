'use client';

import { useState, useEffect } from 'react';
import { createAppKit } from '@reown/appkit';
import { wagmiAdapter } from '@reown/wagmi-adapter';
import { REOWN_CONFIG } from '../config/reown';

export function useReownModal() {
  const [modal, setModal] = useState<any>(null);

  useEffect(() => {
    const initializeReown = async () => {
      try {
        const appKitModal = createAppKit({
          adapters: [wagmiAdapter],
          ...REOWN_CONFIG,
        });

        setModal(appKitModal);
      } catch (error) {
        console.error('Error initializing Reown AppKit:', error);
      }
    };

    initializeReown();
  }, []);

  const openModal = async () => {
    try {
      if (!modal) {
        console.warn('Reown AppKit not initialized');
        return;
      }

      await modal.open();
    } catch (error) {
      console.error('Error opening Reown modal:', error);
    }
  };

  const closeModal = async () => {
    try {
      if (!modal) {
        return;
      }

      await modal.close();
    } catch (error) {
      console.error('Error closing Reown modal:', error);
    }
  };

  return {
    modal,
    openModal,
    closeModal,
  };
}
