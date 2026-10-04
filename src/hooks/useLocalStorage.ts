import { useEffect, useState } from 'react';

/** Petit hook de persistance localStorage, tolérant au SSR/absence d'API. */
export function useLocalStorage<T>(cle: string, valeurInitiale: T) {
  const [valeur, setValeur] = useState<T>(() => {
    if (typeof window === 'undefined') return valeurInitiale;
    try {
      const stocke = window.localStorage.getItem(cle);
      return stocke !== null ? (JSON.parse(stocke) as T) : valeurInitiale;
    } catch {
      return valeurInitiale;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(cle, JSON.stringify(valeur));
    } catch {
      // stockage indisponible (mode privé, quota…) : on ignore silencieusement
    }
  }, [cle, valeur]);

  return [valeur, setValeur] as const;
}
