import { useEffect, useState } from 'react';

/**
 * Persiste um estado no localStorage do navegador atual.
 * Os dados não são sincronizados entre dispositivos.
 */
export function usePersistentState(storageKey, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(storageKey);
      return storedValue ? { ...initialValue, ...JSON.parse(storedValue) } : initialValue;
    } catch {
      return initialValue;
    }
  });
  const [storageAvailable, setStorageAvailable] = useState(true);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(value));
      setStorageAvailable(true);
    } catch {
      setStorageAvailable(false);
    }
  }, [storageKey, value]);

  return { value, setValue, storageAvailable };
}
