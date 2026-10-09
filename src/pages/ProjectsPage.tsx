import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '../components/Header';
import { DialogueBox } from '../components/DialogueBox';
import { SidebarMenu, type SidebarCategory } from '../components/SidebarMenu';
import { ThreeZoneLayout } from '../components/ThreeZoneLayout';
import { PageBackdrop } from '../components/PageBackdrop';
import { PAGE_BACKGROUND_IMAGE } from '../config/background';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useDeviceProfile } from '../hooks/useDeviceProfile';
import { projects } from '../data/projects';
import { dialogues } from '../data/dialogues';

export function ProjectsPage() {
  const device = useDeviceProfile();
  const [selectedId, setSelectedId] = useState<string>(projects[0].id);
  const [consultes, setConsultes] = useLocalStorage<string[]>('agrandjean:projets-consultes', []);

  // Un seul bloc regroupant l'ensemble des projets (pas de sous-catégories Web/Application).
  const categories: SidebarCategory[] = useMemo(
    () => [
      {
        id: 'tous-les-projets',
        label: 'Tous les projets',
        items: projects.map((p) => ({ id: p.id, label: p.titre, nouveau: p.nouveau })),
      },
    ],
    [],
  );

  const projetSelectionne = projects.find((p) => p.id === selectedId) ?? projects[0];

  const selectionner = (id: string) => {
    setSelectedId(id);
    setConsultes((c) => (c.includes(id) ? c : [...c, id]));
  };

  return (
    <div className="min-h-screen">
      {!device.isLite && (
        <PageBackdrop
          fond={PAGE_BACKGROUND_IMAGE}
          premierPlan={projetSelectionne.premierPlan ?? []}
          premierPlanKey={projetSelectionne.id}
          titre={projetSelectionne.titre}
        />
      )}
      <Header />
      <ThreeZoneLayout
        gauche={
          <SidebarMenu
            ariaLabel="Liste des projets"
            categories={categories}
            selectedId={selectedId}
            onSelect={selectionner}
            isConsulted={(id) => consultes.includes(id)}
          />
        }
        centre={
          <div className="h-full rounded-20 bg-white shadow-soft">
            <AnimatePresence mode="wait">
              <motion.div
                key={projetSelectionne.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="flex h-full flex-col py-20 rounded-20"
              >
                <div className="flex row flex-nowrap gap-2 px-5 mb-4 text-ink-500 text-sm text-left font-body lg:px-10">
                  <div className="fonction">{projetSelectionne.fonction}</div> -
                  <div className="annee">{projetSelectionne.client}</div> - 
                  <div className="annee">{projetSelectionne.annee}</div>
                </div>
                <div className="flex">
                  <h2 className="text-left font-menu text-2xl text-ink-900 bg-dark badge-l">
                    {projetSelectionne.titre}
                  </h2>
                </div>
                
                <div className="scrollbar-fine flex-1 overflow-y-auto text-left">

                  <div className="px-5 lg:px-10">
                    <p className="mt-3 text-base leading-relaxed text-ink-700">
                      {projetSelectionne.description}
                    </p>
                    <hr className="my-4 border-grey" />

                    <SectionProjet titre="Contexte" texte={projetSelectionne.contexte} />
                    <hr className="my-4 border-grey" />
                    <SectionProjet titre="Mon rôle" texte={projetSelectionne.monRole} />
                    <hr className="my-4 border-grey" />
                    <SectionProjet titre="Démarche" texte={projetSelectionne.demarche} />
                    <hr className="my-4 border-grey" />
                    <SectionProjet titre="Résultat" texte={projetSelectionne.resultat} />
                    {projetSelectionne.liens && (
                      <ul className="mt-4 flex flex-col gap-1">
                        {projetSelectionne.liens.map((lien) => (
                          <li key={lien.url}>
                            <a
                              href={lien.url}
                              target="_blank"
                              rel="noreferrer"
                              className="font-menu text-base text-turquoise-600 underline hover:text-turquoise-500"
                            >
                              {lien.label} ↗
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        }
      />
      <DialogueBox
        flowId={`projet-${projetSelectionne.id}`}
        repliques={
          projetSelectionne.dialogue
            ? projetSelectionne.dialogue.map((texte) => ({ texte }))
            : dialogues.projets
        }
      />
    </div>
  );
}

/** Petite section titrée (Contexte, Mon rôle, Démarche, Résultat) dans le panneau central. */
function SectionProjet({ titre, texte }: { titre: string; texte: string }) {
  return (
    <div className="mt-4">
      <h3 className="font-menu text-xl text-ink-900">{titre}</h3>
      <p className="mt-1 text-base leading-relaxed text-ink-700">{texte}</p>
    </div>
  );
}
