export type Categorie = 'web' | 'application';

/**
 * Élément décoratif affiché en premier plan sur la page Projets, par-dessus
 * le fond du projet sélectionné. Le positionnement se fait via des classes
 * Tailwind (ex. "bottom-10 right-16 w-72") pour rester simple à ajuster.
 * `profondeur` contrôle l'intensité de la parallaxe au mouvement de la
 * souris (0 = ne bouge pas, valeurs usuelles 10 à 40).
 */
export interface CoucheDecor {
  image: string;
  alt: string;
  className: string;
  profondeur?: number;
}

export interface Projet {
  id: string;
  titre: string;
  categorie: Categorie;
  client: string;
  annee: number;
  description: string;
  /** Fonction exercée sur ce projet (ex. "Product Designer") */
  fonction: string;
  /** Contexte du projet : origine, enjeux, contraintes */
  contexte: string;
  /** Détail du rôle et des responsabilités sur ce projet précis */
  monRole: string;
  /** Démarche/méthodologie suivie (recherche, ateliers, itérations…) */
  demarche: string;
  /** Résultat obtenu (chiffres, impact, retours…) */
  resultat: string;
  /** Image du projet en grand format (utilisée en version mobile/allégée, WebP/AVIF conseillé) */
  image: string;
  /** Éléments décoratifs en premier plan (capture du projet, objets…), avec effet de profondeur */
  premierPlan?: CoucheDecor[];
  liens?: { label: string; url: string }[];
  /** Répliques de l'avatar spécifiques à ce projet */
  dialogue?: string[];
  /** Marque le projet comme "nouveau" (petit losange dans le menu) */
  nouveau?: boolean;
}

export interface CompetencesRadar {
  [competence: string]: number;
}

export interface ExperienceCV {
  id: string;
  type: 'experience';
  title: string;
  fonction: string;
  /**
   * Position sur la frise chronologique de la page CV : 1 = l'entrée la
   * plus récente (affichée le plus à droite de la frise), puis par ordre
   * croissant vers le passé (vers la gauche). Contrôle entièrement l'ordre
   * d'affichage, indépendamment de `periode`.
   */
  numero: number;
  /** Période de l'expérience en texte libre (ex. "2023 - 2024") */
  periode: string;
  duree: string;
  client: string;
  lieu: string;
  resume: string[];
  radarImage: string;
}

export type EntreeCV = ExperienceCV;

export type Expression = 'neutre' | 'content' |'mechant' | 'costume' | 'montrer' | 'surprise' | 'tantpis';

export interface Replique {
  texte: string;
  expression?: Expression;
  vitesse?: number;
}

export type DialoguePage = 'accueil' | 'projets' | 'cv' | 'contact';
