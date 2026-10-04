import { useState } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import type { EntreeCV } from '../types';

interface CvTimelineProps {
  entrees: EntreeCV[];
  selectedId: string;
  onSelect: (id: string) => void;
}

/**
 * Frise chronologique horizontale (passé → présent, de gauche à droite)
 * des expériences et formations, sans fond ni ombre, en pleine largeur
 * disponible. Réservée au desktop (≥ md) : sur mobile, la navigation entre
 * entrées se fait via un menu déroulant (voir SidebarMenu dans CvPage), les
 * points de cette frise étant une cible tactile trop petite. L'ordre est
 * piloté par le champ `numero` de chaque entrée (1 = la plus récente,
 * affichée la plus à droite). Points ronds pour les expériences, losanges
 * pour les formations. L'année est affichée sous chaque point pour
 * faciliter la lecture. Tooltip au survol (client, année, fonction). Les
 * flèches de navigation précédent/suivant sont gérées séparément par la
 * page (voir CvPage).
 *
 * Positionnée dans le flux normal du document (pas de `fixed`/`absolute`),
 * juste en dessous des deux blocs de contenu : elle ne peut donc jamais les
 * chevaucher, quelle que soit la taille de la fenêtre.
 */
export function CvTimeline({ entrees, selectedId, onSelect }: CvTimelineProps) {
  const [surligne, setSurligne] = useState<string | null>(null);

  // Tri décroissant : numéro le plus grand (le plus ancien) en premier donc
  // à gauche, numéro 1 (le plus récent) en dernier donc à droite.
  const triees = [...entrees].sort((a, b) => b.numero - a.numero);

  return (
    <div
      role="group"
      aria-label="Frise chronologique des expériences et formations"
      className="hidden w-full px-6 py-6 md:block sm:px-10"
    >
      <div className="relative flex w-full items-center px-4">
        {/* Ligne de la frise, sombre pour un meilleur contraste */}
        <div aria-hidden="true" className="absolute inset-x-4 top-1/2  h-1 -translate-y-1/2 rounded-full bg-ink-900" />

        <div className="flex w-full items-center justify-between">
          {triees.map((entree) => {
            const selectionne = entree.id === selectedId;
            const estFormation = entree.type === 'formation';
            return (
              <div key={entree.id} className="relative z-10 flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => onSelect(entree.id)}
                  onMouseEnter={() => setSurligne(entree.id)}
                  onMouseLeave={() => setSurligne(null)}
                  onFocus={() => setSurligne(entree.id)}
                  onBlur={() => setSurligne(null)}
                  aria-current={selectionne ? 'true' : undefined}
                  aria-label={`${entree.title} — ${entree.client}, ${entree.annee}`}
                  className={clsx(
                    'flex items-center justify-center border-2 transition-transform hover:scale-110',
                    estFormation ? 'h-3.5 w-3.5 rotate-45' : 'h-3.5 w-3.5 rounded-full',
                    selectionne
                      ? 'scale-150 border-cream-50 bg-coral-500 shadow-pop ring-1 ring-ink-900'
                      : 'border-coral-500 bg-cream-50',
                  )}
                />

                {/* Année affichée en permanence sous le point. Positionnée en
                    absolu (hors flux) pour ne jamais décaler l'alignement
                    vertical du point sur la ligne de la frise. */}
                <span
                  aria-hidden="true"
                  className={clsx(
                    'absolute top-full mt-3 whitespace-nowrap font-menu text-xs transition-colors',
                    selectionne ? 'text-coral-600' : 'text-ink-700',
                  )}
                >
                  {entree.annee}
                </span>

                {surligne === entree.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-full mb-2 w-max max-w-[12rem] rounded-blob bg-ink-900 px-3 py-2 text-center text-xs text-cream-50 shadow-soft"
                  >
                    <p className="font-menu">{entree.client}</p>
                    <p className="text-cream-100/80">
                      {entree.fonction} · {entree.annee}
                    </p>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
