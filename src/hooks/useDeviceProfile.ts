import { useEffect, useState } from 'react';

export interface DeviceProfile {
  /** Largeur d'écran actuelle */
  width: number;
  /** L'appareil supporte le tactile */
  isTouch: boolean;
  /** L'utilisateur a demandé à limiter les données (Save-Data / connexion lente) */
  prefersReducedData: boolean;
  /** WebGL est disponible sur cet appareil/navigateur */
  hasWebGL: boolean;
  /** true si on doit afficher la version "légère" (mobile/tablette ou contraintes) */
  isLite: boolean;
}

const MOBILE_BREAKPOINT = 768;

function detectWebGL(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

function detectReducedData(): boolean {
  if (typeof navigator === 'undefined') return false;
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } })
    .connection;
  if (connection?.saveData) return true;
  if (connection?.effectiveType && ['slow-2g', '2g', '3g'].includes(connection.effectiveType)) {
    return true;
  }
  return false;
}

function computeProfile(): DeviceProfile {
  const width = typeof window !== 'undefined' ? window.innerWidth : 1280;
  const isTouch =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  const prefersReducedData = detectReducedData();
  const hasWebGL = detectWebGL();
  const isLite = width < MOBILE_BREAKPOINT || prefersReducedData || !hasWebGL;

  return { width, isTouch, prefersReducedData, hasWebGL, isLite };
}

/**
 * Détecte le contexte de l'appareil pour décider si la scène 3D Spline doit
 * être chargée (desktop, WebGL dispo, pas de contrainte de données) ou si
 * l'on doit basculer sur la version allégée (mobile, tactile, Save-Data,
 * pas de WebGL).
 *
 * Le code Spline n'est jamais importé tant que `isLite` est true grâce à
 * l'import dynamique conditionnel dans les composants consommateurs.
 */
export function useDeviceProfile(): DeviceProfile {
  const [profile, setProfile] = useState<DeviceProfile>(() => computeProfile());

  useEffect(() => {
    const handleResize = () => setProfile(computeProfile());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return profile;
}
