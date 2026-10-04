import { useEffect, useMemo, useRef, useState } from 'react';

export interface UseTypewriterOptions {
  /** Vitesse par défaut en ms par caractère */
  vitesse?: number;
  /** Pause additionnelle (ms) sur une ponctuation courte : , */
  pauseCourte?: number;
  /** Pause additionnelle (ms) sur une ponctuation longue : . ! ? … */
  pauseLongue?: number;
  /** Désactive l'effet machine à écrire (texte affiché instantanément) */
  reduitMouvement?: boolean;
}

export interface UseTypewriterResult {
  /** Texte visible caractère par caractère jusqu'à présent */
  texteAffiche: string;
  /** true tant que l'écriture est en cours */
  enCours: boolean;
  /** true quand la réplique est entièrement affichée */
  termine: boolean;
  /** Affiche immédiatement la réplique entière */
  sauterAnimation: () => void;
}

const PONCTUATION_LONGUE = new Set(['.', '!', '?', '…']);
const PONCTUATION_COURTE = new Set([',']);

function segmenterGraphèmes(texte: string): string[] {
  const SegmenterCtor = (Intl as typeof Intl & {
    Segmenter?: new (
      locale?: string,
      options?: { granularity: 'grapheme' | 'word' | 'sentence' },
    ) => { segment: (input: string) => Iterable<{ segment: string }> };
  }).Segmenter;

  if (SegmenterCtor) {
    const segmenter = new SegmenterCtor('fr', { granularity: 'grapheme' });
    return Array.from(segmenter.segment(texte), (s) => s.segment);
  }
  return Array.from(texte);
}

/**
 * Effet machine à écrire réutilisable.
 *
 * - Découpe par graphèmes (Intl.Segmenter si disponible, fallback Array.from)
 *   pour ne jamais casser un accent ou un émoji composé.
 * - Pause automatique plus longue sur `. ! ? …`, plus courte sur `,`.
 * - `sauterAnimation()` affiche tout le texte immédiatement (à appeler sur
 *   clic / tap / Espace / Entrée pendant l'écriture).
 * - Respecte `prefers-reduced-motion` : le texte s'affiche instantanément.
 * - Nettoie ses timers au démontage et à chaque changement de texte, sans
 *   double démarrage en StrictMode (grâce à l'identifiant de run interne).
 */
export function useTypewriter(
  texte: string,
  options: UseTypewriterOptions = {},
): UseTypewriterResult {
  const { vitesse = 30, pauseCourte = 120, pauseLongue = 380 } = options;

  const [systemReducedMotion, setSystemReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setSystemReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setSystemReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const reduitMouvement = options.reduitMouvement ?? systemReducedMotion;

  const graphèmes = useMemo(() => segmenterGraphèmes(texte), [texte]);

  const [longueurAffichee, setLongueurAffichee] = useState(reduitMouvement ? graphèmes.length : 0);
  const [enCours, setEnCours] = useState(!reduitMouvement);

  const runIdRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    runIdRef.current += 1;
    const currentRunId = runIdRef.current;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (reduitMouvement) {
      setLongueurAffichee(graphèmes.length);
      setEnCours(false);
      return;
    }

    setLongueurAffichee(0);
    setEnCours(graphèmes.length > 0);

    let index = 0;

    const step = () => {
      if (runIdRef.current !== currentRunId) return;

      index += 1;
      setLongueurAffichee(index);

      if (index >= graphèmes.length) {
        setEnCours(false);
        return;
      }

      const caractere = graphèmes[index - 1];
      let delai = vitesse;
      if (PONCTUATION_LONGUE.has(caractere)) delai += pauseLongue;
      else if (PONCTUATION_COURTE.has(caractere)) delai += pauseCourte;

      timeoutRef.current = setTimeout(step, delai);
    };

    if (graphèmes.length > 0) {
      timeoutRef.current = setTimeout(step, vitesse);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [texte, reduitMouvement]);

  const sauterAnimation = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setLongueurAffichee(graphèmes.length);
    setEnCours(false);
  };

  const texteAffiche = graphèmes.slice(0, longueurAffichee).join('');
  const termine = !enCours && longueurAffichee >= graphèmes.length;

  return { texteAffiche, enCours, termine, sauterAnimation };
}
