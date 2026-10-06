import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { DialogueBox } from '../components/DialogueBox';
import { Scene3D } from '../components/Scene3D';
import { TitlePage } from './TitlePage';
import { useDeviceProfile } from '../hooks/useDeviceProfile';
import { dialogues } from '../data/dialogues';

interface HomePageProps {
  /** true quand la route active est "/", pour afficher ou masquer ce composant sans le démonter */
  visible: boolean;
}

/**
 * Page d'accueil. Toujours montée (voir App.tsx) : elle n'est ni recréée ni
 * réinitialisée quand on navigue vers une autre page puis qu'on revient sur
 * l'accueil — seule sa visibilité CSS change.
 *
 * Desktop : scène 3D plein écran (bureau flottant), avec la page tampon
 * affichée devant tant que l'utilisateur n'a pas cliqué sur un des 4
 * boutons. Mobile/contraintes : page d'accueil classique, sans jamais
 * télécharger le code Spline.
 */
const DUREE_PROGRESSION_MS = 3000;

export function HomePage({ visible }: HomePageProps) {
  const navigate = useNavigate();
  const device = useDeviceProfile();
  const [sceneReady, setSceneReady] = useState(false);
  const [titreFerme, setTitreFerme] = useState(false);
  const [progressionSimulee, setProgressionSimulee] = useState(0);
  const etaitVisible = useRef(visible);

  // Ferme définitivement la page tampon dès que l'utilisateur quitte
  // l'accueil (visible passe à true -> false), donc sans aucun impact
  // visuel : le conteneur entier est déjà masqué (classe "hidden") au
  // moment où titreFerme change. Elle ne réapparaîtra plus jamais ensuite,
  // même en revenant sur "/" via le header.
  useEffect(() => {
    if (etaitVisible.current && !visible) {
      setTitreFerme(true);
    }
    etaitVisible.current = visible;
  }, [visible]);

  useEffect(() => {
    if (device.isLite) return;

    // Si la scène finit de charger avant la fin des 3 secondes simulées,
    // on complète immédiatement la barre plutôt que de la laisser en retard.
    if (sceneReady) {
      setProgressionSimulee(100);
      return;
    }

    const debut = performance.now();
    let frameId: number;

    const tick = () => {
      const ecoule = performance.now() - debut;
      const pourcentage = Math.min(100, (ecoule / DUREE_PROGRESSION_MS) * 100);
      setProgressionSimulee(pourcentage);
      if (pourcentage < 100) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [device.isLite, sceneReady]);

  if (device.isLite) {
    return (
      <div className={visible ? undefined : 'hidden'}>
        <MobileHomePage />
      </div>
    );
  }

  return (
    // Toujours en position "fixed" (jamais display:none) : le canvas Spline
    // WebGPU garde ainsi une taille réelle (celle du viewport) même quand la
    // page n'est pas affichée. Passer par display:none ferait tomber ses
    // dimensions mesurées à 0×0, ce qui casse le renderer WebGPU (erreurs
    // GPUValidationError en boucle à la reprise du rendu).
    <div
      className={[
        'fixed inset-0 h-screen w-screen overflow-hidden bg-cream-100 transition-opacity duration-200',
        visible ? 'z-0 opacity-100' : '-z-10 pointer-events-none opacity-0',
      ].join(' ')}
      aria-hidden={!visible}
      inert={!visible || undefined}
    >
      {!titreFerme && (
        <div className="absolute inset-0 z-40">
          <TitlePage
            progress={progressionSimulee}
            pret={sceneReady}
            onEnterScene={() => setTitreFerme(true)}
            onNavigate={(route) => {
              // La fermeture définitive de la page tampon est gérée par
              // l'effet ci-dessus (dès que "visible" passe à false), donc
              // sans jamais exposer la scène 3D même une fraction de seconde.
              navigate(route);
            }}
          />
        </div>
      )}

      {titreFerme && <Header />}
      <div className="h-full w-full">
        <Scene3D onReady={() => setSceneReady(true)} />
      </div>

      {titreFerme && <DialogueBox flowId="accueil" repliques={dialogues.accueil} />}
    </div>
  );
}

/** Version mobile : pas de scène 3D, mise en avant des projets phares et des accès rapides. */
function MobileHomePage() {
  return (
    <div className="min-h-screen bg-cream-100">
      <Header />
      <main className="flex flex-col items-center gap-8 px-6 pb-16 pt-28 text-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-4xl text-coral-500">
            A<span className="text-ink-900">GRANDJEAN</span>
          </h1>
          <p className="mt-2 font-menu text-sm text-ink-700">Product Designer web & application</p>
        </motion.div>

        <p className="max-w-md text-sm text-ink-700">
          Bienvenue ! Cette version mobile met de côté la scène 3D pour rester rapide et légère.
          Explore mes projets, mon CV, ou dis-moi bonjour.
        </p>

        <div className="flex w-full max-w-xs flex-col gap-3">
          <Link to="/projets" className="rounded-pill bg-coral-500 px-5 py-3 font-menu text-sm text-white shadow-pop">
            Voir les projets
          </Link>
          <Link to="/cv" className="rounded-pill bg-cream-50 px-5 py-3 font-menu text-sm text-ink-700 shadow-soft">
            Voir le CV
          </Link>
          <Link to="/contact" className="rounded-pill bg-cream-50 px-5 py-3 font-menu text-sm text-ink-700 shadow-soft">
            Me contacter
          </Link>
        </div>
      </main>
    </div>
  );
}
