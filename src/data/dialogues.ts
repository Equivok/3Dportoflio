import type { DialoguePage, Replique } from '../types';

/**
 * Répliques de l'avatar, par page. Les répliques spécifiques à un projet
 * ou une expérience sont définies directement dans `projects.ts` / `cv.ts`
 * (champ `dialogue`) pour rester proches de leurs données.
 */
export const dialogues: Record<DialoguePage, Replique[]> = {
  accueil: [
    {
      texte: "Oh non! Un visiteur ! \n Normalement, je suis censé empêcher ce genre de choses quand Alex n’est pas là !",
      expression: 'surprise',
    },
    {
      texte: "Bon.. Hum.. Bienvenue.. \n Moi c'est l'agent 404, maintenance web. \n D’habitude, je m’occupe de liens cassés et de pages perdues. De toute évidence, je vais aussi devoir vous servir de guide.",
      expression: 'costume',
    },
    {
      texte: "Vous êtes sur le bureau d'Alex, L’ordinateur contient son CV. L’écran vous donnera accès à ses projets. Et si vous voulez directement lui parler, il y a le téléphone.",
      expression: 'montrer',
    },
  ],
  projets: [
    {
      texte: "Voici les projets d'Alexandre, classés par catégorie. Choisis-en un pour en savoir plus !",
      expression: 'costume',
    },
  ],
  cv: [
    {
      texte: "Ici, tout le parcours professionnel. Sélectionne une expérience pour voir le détail.",
      expression: 'montrer',
    },
  ],
  contact: [
    {
      texte: "Une idée de projet, une question ? C'est le bon endroit pour dire bonjour !",
      expression: 'costume',
    },
  ],
};

export const DEFAULT_TYPEWRITER_SPEED_MS = 30;
