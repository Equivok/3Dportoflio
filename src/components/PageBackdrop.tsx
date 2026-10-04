import { useRef } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { CoucheDecor } from '../types';

interface PageBackdropProps {
  /** Image de fond plein écran, commune à toutes les pages (voir src/config/background.ts) */
  fond: string;
  /** Éléments décoratifs en premier plan avec parallaxe (optionnel, utilisé par la page Projets) */
  premierPlan?: CoucheDecor[];
  /** Clé qui déclenche le changement des éléments de premier plan */
  premierPlanKey?: string;
  titre?: string;
}

/**
 * Fond plein écran réutilisable (pages Projets et CV), avec en option des
 * éléments décoratifs en premier plan qui réagissent légèrement au
 * mouvement de la souris (parallaxe) pour donner une impression de
 * profondeur.
 *
 * Pour changer le fond, modifie uniquement `src/config/background.ts`.
 */
export function PageBackdrop({ fond, premierPlan = [], premierPlanKey, titre }: PageBackdropProps) {
  const conteneurRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const gererMouvement = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = conteneurRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reinitialiser = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={conteneurRef}
      onMouseMove={gererMouvement}
      onMouseLeave={reinitialiser}
      className="fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <img
        src={fond}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />

      <div className="absolute inset-0 bg-cream-100/55" />

      {premierPlan.length > 0 && (
        <AnimatePresence mode="wait">
          <motion.div
            key={premierPlanKey}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            {premierPlan.map((couche, index) => (
              <CoucheParallaxe
                key={`${premierPlanKey}-${index}`}
                couche={couche}
                mouseX={mouseX}
                mouseY={mouseY}
                titre={titre}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

interface CoucheParallaxeProps {
  couche: CoucheDecor;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  titre?: string;
}

function CoucheParallaxe({ couche, mouseX, mouseY, titre }: CoucheParallaxeProps) {
  const profondeur = couche.profondeur ?? 20;
  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [profondeur, -profondeur]), {
    stiffness: 60,
    damping: 18,
  });
  const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [profondeur, -profondeur]), {
    stiffness: 60,
    damping: 18,
  });

  return (
    <motion.img
      src={couche.image}
      alt={couche.alt || (titre ? `Visuel de ${titre}` : '')}
      style={{ x, y }}
      className={`pointer-events-none absolute drop-shadow-2xl ${couche.className}`}
      loading="lazy"
    />
  );
}
