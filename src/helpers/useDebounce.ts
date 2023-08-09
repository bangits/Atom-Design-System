import { useEffect, useRef, useState } from 'react';

export const useDebounce = <T>(value: T, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<T | string>('');
  const [isDebouncing, setIsDebouncing] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    setIsDebouncing(true);
    timerRef.current = setTimeout(() => {
      setIsDebouncing(false);
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [value, delay]);

  return [debouncedValue, isDebouncing];
};
