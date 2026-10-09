import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '../components/Header';
import { DialogueBox } from '../components/DialogueBox';
import { CvTimeline } from '../components/CvTimeline';
import { SidebarMenu, type SidebarCategory } from '../components/SidebarMenu';
import { PageBackdrop } from '../components/PageBackdrop';
import { PAGE_BACKGROUND_IMAGE } from '../config/background';
import { experiences } from '../data/cv';
import { dialogues } from '../data/dialogues';
import type { EntreeCV } from '../types';

// Tri décroissant : le plus ancien en premier (index 0, à gauche sur la
// frise), le plus récent en dernier (à droite), pour rester cohérent avec
// l'ordre visuel de CvTimeline et le sens des flèches précédent/suivant.
const TOUTES_ENTREES: EntreeCV[] = [...experiences].sort((a, b) => b.numero - a.numero);

/**
 * Page CV : navigation via la frise chronologique horizontale en bas de
 * page (passé → présent) et via des flèches précédent/suivant positionnées
 * au centre de l'écran, de part et d'autre des deux blocs de contenu. Le
 * contenu est centré en pleine largeur, divisé en 2 : panneau d'informations
 * à gauche, visuel 3D pré-rendu du radar propre à l'entrée sélectionnée
 * (fourni par Alexandre) à droite, animé en flottement.
 */
export function CvPage() {
  const [selectedId, setSelectedId] = useState<string>(experiences[0].id);

  const entree = TOUTES_ENTREES.find((e) => e.id === selectedId) ?? experiences[0];
  const indexActuel = TOUTES_ENTREES.findIndex((e) => e.id === selectedId);

  // Menu déroulant mobile (remplace la frise, cible tactile trop petite) :
  // mêmes catégories repliables que SidebarMenu sur la page Projets.
  const categories: SidebarCategory[] = useMemo(
    () => [
      {
        id: 'experiences',
        label: 'Expériences',
        items: experiences.map((e) => ({ id: e.id, label: e.title })),
      },
    ],
    [],
  );

  const allerAu = (index: number) => {
    const clamped = (index + TOUTES_ENTREES.length) % TOUTES_ENTREES.length;
    setSelectedId(TOUTES_ENTREES[clamped].id);
  };

  return (
    <div className="min-h-screen">
      <PageBackdrop fond={PAGE_BACKGROUND_IMAGE} />
      <Header />

      {/* Flèches de navigation, centrées verticalement, de part et d'autre des
          deux blocs de contenu. Masquées jusqu'à 1024px (lg) : l'aspect et le
          positionnement "mobile" (menu déroulant, avatar intégré à la carte)
          sont conservés sur toute cette plage, pas seulement en dessous de
          768px. */}
      <button
        type="button"
        aria-label="Expérience précédente"
        onClick={() => allerAu(indexActuel - 1)}
        className="fixed left-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50 text-coral-600 shadow-soft hover:bg-cream-200 lg:flex sm:left-8"
      >
        ◀
      </button>
      <button
        type="button"
        aria-label="Expérience suivante"
        onClick={() => allerAu(indexActuel + 1)}
        className="fixed right-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50 text-coral-600 shadow-soft hover:bg-cream-200 lg:flex sm:right-8"
      >
        ▶
      </button>

      {/* En dessous de 1024px (lg) : menu déroulant pour choisir l'expérience
          à afficher (remplace la frise, dont les points sont une cible
          tactile trop petite en dessous de ce seuil). */}
      <div className="mx-auto w-full px-4 pt-24 lg:hidden sm:px-6">
        <SidebarMenu
          ariaLabel="Expériences"
          categories={categories}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      </div>

      <div className="mx-auto h-screen flex flex-col w-full flex-1 items-center px-4 pb-48 pt-6 sm:px-6 lg:pt-20">
        <div className="flex items-center h-full max-w-7xl w-full rounded-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={entree.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center w-full h-full"
            >
              {/* Gauche : informations de l'expérience sélectionnée. Sur
                  mobile (1 colonne), le visuel radar est intégré directement
                  à l'intérieur de ce bloc (voir plus bas), décalé en haut à
                  droite pour déborder légèrement au-dessus. Dès lg, ce bloc
                  reprend sa place à gauche, le visuel radar étant alors
                  affiché séparément à droite (voir bloc suivant). */}
              <div className="relative order-1 rounded-20 bg-white p-6 shadow-soft sm:p-10 lg:order-1">
                {/* Avatar/radar mobile uniquement : positionné en haut à
                    droite du bloc, légèrement décalé vers le haut pour
                    ressortir au-dessus de la carte. Masqué dès lg, où le
                    visuel radar est affiché en grand dans son propre bloc. */}


                <h2 className="text-left font-menu text-2xl text-ink-900 pr-20 sm:pr-24 lg:pr-0">{entree.title}</h2>
                <hr className="my-4 border-grey"></hr>
                <p className="mt-2 font-menu text-xl text-coral-600">{entree.fonction}</p>
                <p className="mt-1 text-base text-ink-700">{entree.client}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-ink-500">{entree.lieu} - {entree.periode} · {entree.duree}</p>
                <hr className="my-4 border-grey"></hr>
                <ul className="mt-4 flex flex-col gap-2 text-left text-base text-ink-700">
                  {entree.resume.map((ligne, i) => (
                    <li key={i} className="flex gap-2">
                      <span aria-hidden="true" className="text-coral-500">
                        ●
                      </span>
                      <span>{ligne}</span>
                    </li>
                  ))}
                </ul>

                <div className="z-10 w-full flex justify-center lg:hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={`mobile-${entree.radarImage}`}
                      src={entree.radarImage}
                      alt={`Graphique radar des compétences pour ${entree.title}`}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.92 }}
                      transition={{ duration: 0.35 }}
                      className="w-full object-contain drop-shadow-xl max-w-md floating "
                      loading="lazy"
                    />
                  </AnimatePresence>
                </div>
              </div>

              {/* Droite : visuel 3D pré-rendu du radar propre à cette
                  entrée, animé en flottement. Réservé au desktop (≥ lg) :
                  sur mobile, le même visuel est déjà intégré dans le bloc
                  d'informations ci-dessus (coin haut-droit). */}
              <div className="relative hidden lg:order-2 lg:flex lg:h-full lg:max-w-none lg:items-center lg:justify-center lg:p-10">
                <div className="relative flex w-full items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={entree.radarImage}
                      src={entree.radarImage}
                      alt={`Graphique radar des compétences pour ${entree.title}`}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.92 }}
                      transition={{ duration: 0.35 }}
                      className="w-full object-contain drop-shadow-xl floating"
                      loading="lazy"
                    />
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <CvTimeline entrees={TOUTES_ENTREES} selectedId={selectedId} onSelect={setSelectedId} />
      </div>


      <DialogueBox flowId="cv" repliques={dialogues.cv} />
    </div>
  );
}
