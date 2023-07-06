import { useEffect } from 'react';

export const useKeyPress = (key: string, action: (e: KeyboardEvent) => void) => {
  useEffect(() => {
    const onKeyup = (e: KeyboardEvent) => {
      console.log('🚀 ~ file: useKeyPress.ts:7 ~ onKeyup ~ e.key:', e.key);
      if (e.key === key) action(e);
    };

    window.addEventListener('keyup', onKeyup);

    return () => window.removeEventListener('keyup', onKeyup);
  }, [key, action]);
};
