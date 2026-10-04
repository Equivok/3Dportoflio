import { lazy } from 'react';

/**
 * Point unique de définition des imports dynamiques des pages secondaires.
 * Les fonctions `preload*` déclenchent le même import() que celui utilisé
 * par `lazy()` : une fois appelées, le module est mis en cache par le
 * navigateur, donc l'import ultérieur déclenché par React Router lors de la
 * navigation se résout quasi instantanément (Suspense ne montre alors plus
 * son fallback, car la promesse est déjà résolue au moment du rendu).
 */
const importProjects = () => import('../pages/ProjectsPage');
const importCv = () => import('../pages/CvPage');
const importContact = () => import('../pages/ContactPage');

export const ProjectsPage = lazy(() =>
  importProjects().then((m) => ({ default: m.ProjectsPage })),
);
export const CvPage = lazy(() => importCv().then((m) => ({ default: m.CvPage })));
export const ContactPage = lazy(() =>
  importContact().then((m) => ({ default: m.ContactPage })),
);

/** À appeler tôt (ex. pendant la page tampon) pour préchauffer les 3 pages. */
export function preloadPagesSecondaires() {
  importProjects();
  importCv();
  importContact();
}
