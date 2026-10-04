import { lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorBoundary } from './ErrorBoundary';
import { useSplineInteractions } from '../hooks/useSplineInteractions';
import { SPLINE_SCENE_URL } from '../config/spline';

// Lazy loading : le bundle 3D (@splinetool/react-spline + runtime) n'est
// jamais téléchargé tant que ce composant n'est pas monté (jamais sur mobile,
// voir HomePage qui conditionne son rendu via useDeviceProfile).
const Spline = lazy(() => import('@splinetool/react-spline'));

interface Scene3DProps {
  onReady?: () => void;
}

/** Petite jauge ludique affichée pendant le chargement de la scène 3D. */
function ChargementScene() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-cream-100">
      <div className="h-3 w-48 overflow-hidden rounded-pill bg-cream-300">
        <div className="h-full w-1/2 animate-pulse rounded-pill bg-coral-500" />
      </div>
      <p className="font-menu text-sm text-ink-500">Chargement du bureau…</p>
    </div>
  );
}

export function Scene3D({ onReady }: Scene3DProps) {
  const navigate = useNavigate();
  const { onLoad, onSplineMouseDown } = useSplineInteractions(navigate);

  return (
    <ErrorBoundary>
      <div className="relative h-full w-full">
        <Suspense fallback={<ChargementScene />}>
          <Spline
            scene={SPLINE_SCENE_URL}
            onLoad={(app) => {
              onReady?.();
              onLoad(app);
            }}
            onSplineMouseDown={onSplineMouseDown}
            // Le survol Spline (Mouse Hover) ne se déclenche pas de façon
            // fiable sur les objets cliquables (limitation connue du
            // runtime Spline/react-spline). Le curseur pointer est donc
            // appliqué en permanence sur toute la scène, pour suggérer
            // qu'elle est interactive sans dépendre du hover.
            className="cursor-pointer"
          />
        </Suspense>

        {/* Alternative textuelle pour les éléments 3D cliquables (accessibilité) */}
        <div className="sr-only">
          <p>Éléments interactifs de la scène 3D :</p>
          <ul>
            <li>
              <a href="/cv">Ouvrir le CV</a>
            </li>
            <li>
              <a href="/projets">Ouvrir les projets</a>
            </li>
            <li>
              <a href="/contact">Ouvrir le contact</a>
            </li>
          </ul>
        </div>
      </div>
    </ErrorBoundary>
  );
}
