import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface TitlePageProps {
  /** Appelé quand l'utilisateur clique sur "Expérience totale" : révèle la scène 3D sans changer de route */
  onEnterScene: () => void;
  /** Appelé quand l'utilisateur clique sur un bouton de navigation directe (Projets/CV/Contact) */
  onNavigate: (route: string) => void;
  /** Progression de chargement simulée (0-100), pilotée par le parent si la scène charge en tâche de fond */
  progress?: number;
  /**
   * true une fois que la scène 3D est réellement chargée dans le
   * navigateur (callback onLoad de Spline), indépendamment de la
   * progression simulée affichée par la barre. Change le libellé en
   * "Bureau chargé !" dès que c'est le cas.
   */
  pret?: boolean;
}

const RACCOURCIS = [
  { label: 'Afficher les projets', route: '/projets' },
  { label: 'Accéder au CV', route: '/cv' },
  { label: 'Prendre contact', route: '/contact' },
];

/**
 * Petit indicateur animé façon curseur de menu jeu vidéo (chevron qui
 * "respire" horizontalement vers le bouton), affiché de part et d'autre du
 * bouton actif ou survolé.
 */
function IndicateurSelection({ sens }: { sens: 'gauche' | 'droite' }) {
  return (
    <motion.span
      aria-hidden="true"
      initial={{ opacity: 0, x: sens === 'gauche' ? 6 : -6 }}
      animate={{
        opacity: 1,
        x: [sens === 'gauche' ? 4 : -4, sens === 'gauche' ? -2 : 2, sens === 'gauche' ? 4 : -4],
      }}
      exit={{ opacity: 0, x: sens === 'gauche' ? 6 : -6 }}
      transition={{
        opacity: { duration: 0.15 },
        x: { repeat: Infinity, duration: 0.9, ease: 'easeInOut' },
      }}
      className="pointer-events-none absolute top-1/2 -translate-y-1/2 text-coral-500"
      style={sens === 'gauche' ? { right: '100%', marginRight: 10 } : { left: '100%', marginLeft: 10 }}
    >
      {sens === 'gauche' ? '▶' : '◀'}
    </motion.span>
  );
}

/**
 * Page tampon (écran titre). Reste affichée tant que l'utilisateur n'a pas
 * cliqué explicitement sur un des 4 boutons : "Expérience totale" (révèle la
 * scène 3D du bureau) ou l'un des 3 raccourcis de navigation directe.
 */
interface BoutonMenu {
  id: string;
  label: string;
  onClick: () => void;
}

export function TitlePage({ onEnterScene, onNavigate, progress = 0, pret = false }: TitlePageProps) {
  const [progressionAffichee, setProgressionAffichee] = useState(0);
  const [survole, setSurvole] = useState<string | null>(null);

  useEffect(() => {
    setProgressionAffichee(progress);
  }, [progress]);

  const boutons: BoutonMenu[] = [
    { id: 'experience', label: "Découvrir l'expérience 3D", onClick: onEnterScene },
    ...RACCOURCIS.map((r) => ({ id: r.route, label: r.label, onClick: () => onNavigate(r.route) })),
  ];

  // Aucun bouton n'est sélectionné par défaut : l'indicateur n'apparaît
  // qu'au survol ou au focus clavier d'un bouton précis.
  const idActif = survole;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-cream-100 via-cream-100 to-coral-100">
      <div className='flex flex-col items-center justify-center text-center gap-10 floating '>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=''
        >
          <h1 className="font-display text-9xl leading-none text-coral-500 drop-shadow-sm sm:text-9xl">
            A<span className="text-ink-900">GRANDJEAN</span>
          </h1>
          <p className="mt-3 font-menu text-3xl text-coral-500 uppercase ">
            <span className="text-ink-900">Product Designer</span> PORTFOLIO</p>
        </motion.div>

        <div className="w-full max-w-sm">
          <div className="h-4 w-full overflow-hidden rounded-pill bg-cream-300 shadow-soft">
            <motion.div
              className="h-full rounded-pill bg-coral-500"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progressionAffichee, 100)}%` }}
              transition={{ ease: 'easeOut', duration: 0.3 }}
            />
          </div>
          <p className="mt-2 font-menu text-base text-ink-500">
            {pret ? 'Bureau chargé !' : `Chargement du bureau… ${Math.round(progressionAffichee)}%`}
          </p>
        </div>

        <nav aria-label="Accès rapide" className="flex flex-col items-center gap-3">
          {boutons.map((bouton) => {
            const estActif = bouton.id === idActif;
            return (
              <div key={bouton.id} className="relative">
                <AnimatePresence>
                  {estActif && <IndicateurSelection key="gauche" sens="gauche" />}
                </AnimatePresence>
                <button
                  type="button"
                  onClick={bouton.onClick}
                  onMouseEnter={() => setSurvole(bouton.id)}
                  onMouseLeave={() => setSurvole(null)}
                  onFocus={() => setSurvole(bouton.id)}
                  onBlur={() => setSurvole(null)}
                  className={[
                    'w-60 rounded-pill px-5 py-2.5 font-menu text-lg shadow-soft transition-colors',
                    estActif
                      ? 'bg-coral-500 text-white shadow-pop'
                      : 'bg-cream-50 text-ink-700 hover:text-coral-600',
                  ].join(' ')}
                >
                  {bouton.label}
                </button>
                <AnimatePresence>
                  {estActif && <IndicateurSelection key="droite" sens="droite" />}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
