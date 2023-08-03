import { useEffect } from 'react';

export const useKeyPress = (key: string, action: (e: KeyboardEvent) => void) => {
  useEffect(() => {
    const onKeyup = (e: KeyboardEvent) => {
      if (e.key === key) action(e);
    };

    window.addEventListener('keyup', onKeyup);

    return () => window.removeEventListener('keyup', onKeyup);
  }, [key, action]);
};
