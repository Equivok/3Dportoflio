export type Categorie = 'web' | 'application';

/**
 * Couleurs disponibles pour les tags de compétences sur la page Projets.
 * Choisies pour rester complémentaires à la palette existante (corail,
 * turquoise) tout en ajoutant un peu de variété (jaune "sun" et encre
 * neutre, jusque-là inutilisés dans l'UI).
 */
export type TagCouleur = 'coral' | 'turquoise' | 'sun' | 'ink';

/** Un tag de compétence/outil affiché sur la page Projets (ex. "Figma", "UX Research"). */
export interface Competence {
  label: string;
  couleur: TagCouleur;
}

/**
 * Bloc de contenu formaté pour les sections de texte des projets (Contexte,
 * Mon rôle, Démarche, Résultat). Chaque section est un tableau de blocs,
 * mélangeables librement dans n'importe quel ordre :
 * - `paragraphe` : texte simple
 * - `sous-titre` : titre intermédiaire à l'intérieur d'une section
 * - `liste` : liste à puces (un élément par entrée du tableau `items`)
 */
export type BlocContenu =
  | { type: 'paragraphe'; texte: string }
  | { type: 'sous-titre'; texte: string }
  | { type: 'liste'; items: string[] };

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
  /** Tags colorés représentant les compétences/outils utilisés sur ce projet */
  competences: Competence[];
  /** Fonction exercée sur ce projet (ex. "Product Designer") */
  fonction: string;
  /** Contexte du projet : origine, enjeux, contraintes */
  contexte?: BlocContenu[];
  /** Détail du rôle et des responsabilités sur ce projet précis */
  monRole: BlocContenu[];
  /** Démarche/méthodologie suivie (recherche, ateliers, itérations…) */
  demarche: BlocContenu[];
  /** Résultat obtenu (chiffres, impact, retours…) */
  resultat: BlocContenu[];
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
  /** Résumé formaté librement avec les mêmes blocs que la page Projets (paragraphe, sous-titre, liste) */
  resume: BlocContenu[];
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
