import type { DialoguePage, Replique } from '../types';

/**
 * Répliques de l'avatar, par page. Les répliques spécifiques à un projet
 * ou une expérience sont définies directement dans `projects.ts` / `cv.ts`
 * (champ `dialogue`) pour rester proches de leurs données.
 */
export const dialogues: Record<DialoguePage, Replique[]> = {
  accueil: [
    {
      texte: "Oh ! Un visiteur ! Vous êtes sur le bureau d’Alex. Normalement, je suis censé empêcher ce genre de choses quand il n’est pas là.",
      expression: 'surprise',
    },
    {
      texte: "Agent 404, maintenance web. D’habitude, je m’occupe de liens cassés et de pages perdues. De toute évidence, je vais aussi devoir vous servir de guide.",
      expression: 'costume',
    },
    {
      texte: 'Bon. Je ne sais quand Alex revient. Il a laissé quelques trucs accessibles, alors autant en profiter.',
      expression: 'tantpis',
    },
    {
      texte:'L’ordinateur contient son CV.L’écran vous donnera accès à ses projets.Et si vous voulez directement lui parler, il y a le téléphone.',
      expression: 'montrer',
    },
    {
      texte:'Pour le reste… Vous pouvez explorer. Je resterai dans le coin. Au cas où…',
      expression: 'montrer',
    },
  ],
  projets: [
    {
      texte: "Voici les projets d'Alexandre, classés par catégorie. Choisis-en un pour en savoir plus !",
      expression: 'content',
    },
  ],
  cv: [
    {
      texte: "Ici, tout le parcours : expériences et formations. Sélectionne une entrée pour voir le détail et le radar de compétences.",
      expression: 'neutre',
    },
  ],
  contact: [
    {
      texte: "Une idée de projet, une question ? C'est le bon endroit pour dire bonjour !",
      expression: 'content',
    },
  ],
};

export const DEFAULT_TYPEWRITER_SPEED_MS = 30;
