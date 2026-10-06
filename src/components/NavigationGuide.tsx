import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/** Délai entre deux panneaux lors du défilement automatique du carrousel. */
const DUREE_AUTO_DEFILEMENT_MS = 6000;

interface PanneauControle {
  id: string;
  titre: string;
  description: string;
  /** Icône de souris (SVG) illustrant le clic/la molette concernée */
  icone: string;
  /** Visuel 3D (cube + flèches) illustrant le mouvement dans la scène */
  image: string;
}

// NOTE : seul le visuel "Tourner_scene.png" a été fourni pour le moment.
// Les panneaux "Se déplacer" et "Zoomer" le réutilisent temporairement,
// en attendant les visuels 3D dédiés (à remplacer dès qu'ils seront fournis).
const PANNEAUX: PanneauControle[] = [
  {
    id: 'tourner',
    titre: 'Tourner',
    description:
      'Faites glisser avec le bouton gauche de la souris pour faire tourner la scène autour du bureau',
    icone: '/images/controle_3D_left.svg',
    image: '/images/Tourner_scene.png',
  },
  {
    id: 'deplacer',
    titre: 'Se déplacer',
    description:
      'Faites glisser avec le bouton droit de la souris pour vous déplacer dans la scène',
    icone: '/images/controle_3D_right.svg',
    image: '/images/Deplacer_scene.png',
  },
  {
    id: 'zoomer',
    titre: 'Zoomer',
    description: 'Utilisez la molette de la souris pour zoomer ou dézoomer dans la scène',
    icone: '/images/controle_3D_center.svg',
    image: '/images/Zoomer_scene.png',
  },
];

interface NavigationGuideProps {
  onClose: () => void;
}

/**
 * Panneau "Navigation & contrôle" flottant par-dessus la scène 3D, collé au
 * bord droit de l'écran (pas de fond assombri : la scène reste entièrement
 * visible et cliquable autour). Explique les 3 façons de naviguer (tourner,
 * se déplacer, zoomer) via un carrousel de 3 panneaux, fermable via la croix.
 */
export function NavigationGuide({ onClose }: NavigationGuideProps) {
  const [index, setIndex] = useState(0);
  const panneau = PANNEAUX[index];

  const allerA = (i: number) => setIndex((i + PANNEAUX.length) % PANNEAUX.length);

  // Défilement automatique toutes les 4 secondes, réinitialisé à chaque
  // changement de panneau (manuel ou automatique) pour garder un rythme
  // régulier entre deux transitions.
  useEffect(() => {
    const id = setTimeout(() => allerA(index + 1), DUREE_AUTO_DEFILEMENT_MS);
    return () => clearTimeout(id);
  }, [index]);

  return (
    <motion.div
      role="dialog"
      aria-modal="false"
      aria-label="Navigation et contrôle de la scène 3D"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 24 }}
      transition={{ duration: 0.25 }}
      className="fixed right-0 bottom-8 z-50 w-full max-w-sm px-4 sm:right-6 sm:px-0"
    >
      <div className="relative rounded-20 bg-cream-50 p-4 shadow-soft">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer la fenêtre d'aide à la navigation"
          className="absolute top-1 right-1 flex h-10 w-10 items-center justify-center hover:text-coral-600"
        >
          ✕
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={panneau.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25 }}
          >
            <h3 className="font-menu text-lg text-ink-900">{panneau.titre}</h3>

            <p className="text-sm leading-relaxed text-ink-700">{panneau.description}</p>
            <div className="my-2 flex items-center justify-center gap-6">
              <img src={panneau.icone} alt="" aria-hidden="true" className="h-14 w-14" />
              <img
                src={panneau.image}
                alt=""
                aria-hidden="true"
                className="h-20 w-20 object-contain"
              />
            </div>

            
          </motion.div>
        </AnimatePresence>

        {/* Points de navigation du carrousel */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {PANNEAUX.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => allerA(i)}
              aria-label={`Afficher le panneau ${p.titre}`}
              aria-current={i === index ? 'true' : undefined}
              className={[
                'h-2.5 w-2.5 rounded-full transition-colors',
                i === index ? 'bg-coral-500' : 'bg-coral-100',
              ].join(' ')}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
