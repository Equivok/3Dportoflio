import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Expression, Replique } from '../types';

interface DialogueBoxProps {
  /** Identifiant unique du "flux" de répliques (page ou projet) pour réinitialiser l'index au changement */
  flowId: string;
  repliques: Replique[];
  /**
   * Portrait de l'avatar affiché dans la boîte de dialogue. Si non fourni,
   * le portrait est déduit automatiquement de `replique.expression` via
   * AVATAR_PAR_EXPRESSION (une image par expression possible).
   */
  avatarSrc?: string;
}

const SON_MUTE_KEY = 'agrandjean:dialogue-muet';

/**
 * Un portrait par expression possible de l'avatar. Chaque fichier doit être
 * déposé dans `public/images/Avatar/` sous le nom de l'expression.
 * Tant qu'une image n'est pas encore fournie, elle se replie sur "neutre".
 */
const AVATAR_PAR_EXPRESSION: Record<Expression, string> = {
  neutre: '/images/Avatar/neutre.png',
  content: '/images/Avatar/content.png',
  mechant:'/images/Avatar/mechant.png',
  montrer: '/images/Avatar/montrer.png',
  surprise: '/images/Avatar/surprise.png',
  tantpis: '/images/Avatar/tantpis.png',
  costume:'/images/Avatar/costume.png',
};

/**
 * Boîte de dialogue façon visual novel / RPG. Desktop : centrée en bas,
 * portrait de l'avatar débordant en haut à gauche. Effet machine à écrire
 * géré par useTypewriter. Fermable, avec mémorisation du choix.
 *
 * Masquée en dessous du breakpoint `md` (mobile) : toute la logique
 * d'avatar/dialogue reste montée (état, typewriter…) mais n'est jamais
 * rendue visuellement sur mobile.
 */
export function DialogueBox({ flowId, repliques, avatarSrc }: DialogueBoxProps) {
  const [index, setIndex] = useState(0);
  // État de fermeture en mémoire (pas en localStorage) : la boîte doit
  // réapparaître à chaque nouvelle "entrée" dans un flux (ex. à chaque clic
  // sur "Expérience totale"), pas rester fermée pour toujours entre sessions.
  const [ferme, setFerme] = useState(false);
  const [muet, setMuet] = useLocalStorage<boolean>(SON_MUTE_KEY, true);

  useEffect(() => {
    setIndex(0);
    setFerme(false);
  }, [flowId]);

  const replique = repliques[index];
  const { texteAffiche, termine, sauterAnimation } = useTypewriter(replique?.texte ?? '', {
    vitesse: replique?.vitesse,
  });

  if (!replique || ferme) return null;

  // Portrait déduit de l'expression de la réplique courante, sauf si un
  // avatarSrc explicite a été fourni par l'appelant (prioritaire).
  const portraitSrc = avatarSrc ?? AVATAR_PAR_EXPRESSION[replique.expression ?? 'neutre'];

  const avancer = () => {
    if (!termine) {
      sauterAnimation();
      return;
    }
    if (index < repliques.length - 1) {
      setIndex((i) => i + 1);
    } else {
      setFerme(true);
    }
  };

  const gererClavier = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      avancer();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-label="Boîte de dialogue"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-x-0 bottom-4 z-40 hidden justify-center px-4 sm:bottom-8 md:flex"
      >
        <div className="relative w-full max-w-xl">
          {/* Portrait débordant en haut à gauche */}
          <div
            aria-hidden="true"
            className="absolute avatar">
            <AnimatePresence mode="wait">
              <motion.img
                key={portraitSrc}
                src={portraitSrc}
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                onError={(e) => {
                  // Tant que toutes les expressions ne sont pas fournies,
                  // on se replie silencieusement sur le portrait neutre.
                  const img = e.currentTarget;
                  if (img.src !== window.location.origin + AVATAR_PAR_EXPRESSION.neutre) {
                    img.src = AVATAR_PAR_EXPRESSION.neutre;
                  }
                }}
                className="h-full w-full object-cover object-top"
              />
            </AnimatePresence>
          </div>

          <div
            tabIndex={0}
            role="button"
            aria-describedby="dialogue-texte-visuel"
            onClick={avancer}
            onKeyDown={gererClavier}
            className="cursor-pointer rounded-blob bg-cream-50 py-5 pl-24 pr-14 shadow-soft ring-1 ring-ink-900/5 sm:pl-28"
          >
            {/* Texte complet, accessible aux lecteurs d'écran */}
            <p className="sr-only" aria-live="polite">
              {replique.texte}
            </p>

            {/* Rendu visuel : réserve toute la place pour éviter les sauts de mise en page */}
            <p
              id="dialogue-texte-visuel"
              aria-hidden="true"
              className="min-h-[3.5em] text-sm leading-relaxed text-ink-700 sm:text-base"
            >
              <span>{texteAffiche}</span>
              <span style={{ visibility: 'hidden' }}>
                {replique.texte.slice(texteAffiche.length)}
              </span>
            </p>

            {termine && (
              <motion.span
                aria-hidden="true"
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="absolute bottom-4 right-5 text-coral-500"
              >
                ▼
              </motion.span>
            )}
          </div>

          <button
            type="button"
            aria-label={muet ? 'Activer le son' : 'Couper le son'}
            onClick={(e) => {
              e.stopPropagation();
              setMuet((m) => !m);
            }}
            className="absolute -top-3 right-8 flex h-8 w-8 items-center justify-center rounded-full bg-cream-200 text-sm shadow-soft hover:bg-cream-300"
          >
            {muet ? '🔇' : '🔊'}
          </button>

          <button
            type="button"
            aria-label="Fermer la boîte de dialogue"
            onClick={(e) => {
              e.stopPropagation();
              setFerme(true);
            }}
            className="absolute -top-3 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-cream-200 text-sm shadow-soft hover:bg-cream-300"
          >
            ✕
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
