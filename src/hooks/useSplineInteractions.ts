import { useCallback, useRef, useState } from 'react';
import type { Application, SplineEvent } from '@splinetool/runtime';
import { SPLINE_OBJECTS, SPLINE_OBJECT_ROUTES, type SplineObjectName } from '../config/spline';

/**
 * Gestion centralisée des interactions avec la scène Spline.
 *
 * IMPORTANT — objets groupés (un appareil = plusieurs meshes) :
 * `SplineEvent.target` ne renvoie que `{ name, id }` du mesh réellement
 * cliqué, pas de sa hiérarchie. La façon fiable de faire réagir tout un
 * appareil composé de plusieurs meshes est de gérer l'événement "Mouse Down"
 * directement sur l'OBJET GROUPE dans l'éditeur Spline (sélectionner le
 * groupe → onglet Events → Mouse Down). Spline route alors l'événement vers
 * ce groupe quel que soit le mesh enfant cliqué, et `e.target.name` vaut
 * directement le nom du groupe (ex. "Mac").
 *
 * En complément, ce hook ajoute une résilience best-effort : si le nom cliqué
 * ne correspond à aucune clé connue, on remonte la hiérarchie three.js
 * sous-jacente (propriété `.parent`, non typée par le runtime mais présente
 * à l'exécution) pour retrouver un ancêtre dont le nom correspond à un objet
 * cliquable connu.
 */

const KNOWN_NAMES = Object.values(SPLINE_OBJECTS) as SplineObjectName[];

function resolveKnownName(rawName: string, app: Application | null): SplineObjectName | null {
  if ((KNOWN_NAMES as string[]).includes(rawName)) {
    return rawName as SplineObjectName;
  }

  if (!app) return null;

  // Fallback best-effort : remonte la hiérarchie three.js sous-jacente.
  try {
    const target = app.findObjectByName(rawName) as unknown as { parent?: { name?: string } } | undefined;
    let current = target?.parent;
    let depth = 0;
    while (current && depth < 8) {
      if (current.name && (KNOWN_NAMES as string[]).includes(current.name)) {
        return current.name as SplineObjectName;
      }
      current = (current as { parent?: { name?: string } }).parent;
      depth += 1;
    }
  } catch {
    // Le runtime ne garantit pas cette structure : on ignore silencieusement.
  }

  return null;
}

export interface UseSplineInteractionsResult {
  onLoad: (app: Application) => void;
  onSplineMouseDown: (e: SplineEvent) => void;
  isSceneReady: boolean;
}

/**
 * @param onNavigate Fonction appelée avec la route à ouvrir (ex. navigate de react-router)
 */
export function useSplineInteractions(
  onNavigate: (route: string) => void,
): UseSplineInteractionsResult {
  const appRef = useRef<Application | null>(null);
  const [isSceneReady, setIsSceneReady] = useState(false);

  const onLoad = useCallback((app: Application) => {
    appRef.current = app;
    setIsSceneReady(true);
  }, []);

  const onSplineMouseDown = useCallback((e: SplineEvent) => {
    const name = resolveKnownName(e.target.name, appRef.current);
    if (!name) return;
    const route = SPLINE_OBJECT_ROUTES[name];
    if (route) onNavigate(route);
  }, [onNavigate]);

  return { onLoad, onSplineMouseDown, isSceneReady };
}
