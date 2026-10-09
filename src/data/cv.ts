import type { EntreeCV } from '../types';

/**
 * Ajouter une expérience = ajouter un objet ici.
 * - `numero` : position sur la frise chronologique (1 = la plus récente,
 *   affichée le plus à droite).
 * - `periode` : texte libre affiché à la place d'une simple année (ex.
 *   "2023 - 2024"). Valeur initiale reprise automatiquement de l'ancienne
 *   année de fin ; à ajuster manuellement si besoin.
 * - `radarImage` : visuel 3D pré-rendu du radar pour CETTE entrée précise
 *   (WebP/PNG fourni, transparent de préférence), affiché sur le plateau
 *   dans la page CV. Place le fichier dans /public/images/cv/radars/.
 */
export const experiences: EntreeCV[] = [
  {
    id: 'exp-django',
    type: 'experience',
    title: 'Application mobile',
    fonction: 'Product Designer',
    numero: 1,
    periode: '2026',
    duree: '7 mois',
    client: 'Django - La banque postale',
    lieu: 'île de france',
    resume: [
      "Conception de produits digitaux de bout en bout, de la recherche à l'UI finale",
      'Mise en place de design systems réutilisables',
      'Collaboration étroite avec les équipes de développement',
    ],
    radarImage: '/images/Avatar/expert/Django.png',
  },
  {
    id: 'exp-Reco',
    type: 'experience',
    title: 'Outil de recouvrement',
    fonction: 'Product Designer',
    numero: 2,
    periode: '2026',
    duree: '1 an',
    client: 'Orange',
    lieu: 'île de france',
    resume: [
      "Conception et direction du design d’un outil de recouvrement.",
      "Supervision de trois équipes (design et développement) afin de maintenir une vision produit unifiée et d’accélérer la livraison.",
      "Réalisation de tests utilisateurs tout au long du projet, permettant d’identifier les frictions, d’ajuster les interfaces et d’obtenir un outil final plus efficace et mieux adopté."
    ],
    radarImage: '/images/Avatar/expert/Reco.png',
  },
  {
    id: 'exp-Maia',
    type: 'experience',
    title: 'Assistant virtuel basé sur l’intelligence artificielle',
    fonction: 'Product Designer',
    numero: 3,
    periode: '2025',
    duree: '3 mois',
    client: 'Orange',
    lieu: 'île de france',
    resume: [
      'Définition et intégration d’un agent IA dans l’outil utilisé par les conseillers en centre d’appels.',
      'Analyse des contraintes de l’interface actuelle pour y inclure une zone de discussion avec l’IA sans perturber les interactions existantes.',
      'Développement de nouveaux composants du design system pour répondre aux besoins émergents et assurer une expérience unifiée.'
    ],
    radarImage: '/images/Avatar/expert/Maia.png',
  },
  {
    id: 'exp-Commande',
    type: 'experience',
    title: 'Outil de suivi de commande',
    fonction: 'Product Designer',
    numero: 4,
    periode: '2024',
    duree: '7 mois',
    client: 'Orange',
    lieu: 'île de france',
    resume: [
      'Refonte complète d’un outil de suivi de commande.',
      'Analyse des écrans existants, restructuration du parcours utilisateur et réalisation de tests afin de valider la cohérence et la fiabilité de l’expérience.',
      'Compréhension détaillée des flux produit, création de maquettes et prototypes, puis accompagnement des équipes de développement jusqu’à la mise en production.'
    ],
    radarImage: '/images/Avatar/expert/Commande.png',
  },
  {
    id: 'exp-eligibilite',
    type: 'experience',
    title: 'Outil d’éligibilité',
    fonction: 'Product Designer',
    numero: 5,
    periode: '2024',
    duree: '1 mois',
    client: 'Orange',
    lieu: 'île de france',
    resume: [
      'Conception d’un outil permettant de déterminer l’éligibilité d’un client via l’envoi d’un SMS, basé sur la géolocalisation.',
      'Élaboration de la recherche utilisateur, de l’analyse des besoins et des parcours, afin de définir clairement les usages avant de concevoir les maquettes finales.'
    ],
    radarImage: '/images/Avatar/expert/Eligibilite.png',
  },
  {
    id: 'exp-DS-metier',
    type: 'experience',
    title: 'Design system',
    fonction: 'Product Designer',
    numero: 6,
    periode: '2023',
    duree: '1 an et 8 mois',
    client: 'Orange',
    lieu: 'île de france',
    resume: [
      'Conception d’un design system destiné aux conseillers internes, répondant à leurs besoins spécifiques en matière de typographie, couleurs, espacements et composants adaptés à leur environnement métier.',
      'Création d’une grille cohérente et de composants modulaires, gestion des variantes, tests d’usage, et mise en place d’un processus de mise à jour pour garantir la qualité, la cohérence et la pérennité des écrans.'
    ],

    radarImage: '/images/Avatar/expert/DS_orange.png',
  },
  {
    id: 'exp-New-RDV',
    type: 'experience',
    title: 'Outil de gestion de rendez-vous',
    fonction: 'Product Designer',
    numero: 7,
    periode: '2023',
    duree: '3 mois',
    client: 'Orange',
    lieu: 'île de france',
    resume: [
      'Conception d’un outil destiné aux conseillers en boutique pour gérer l’ensemble des rendez-vous, physiques ou virtuels.',
      'Réalisation d’interviews utilisateurs et d’observations terrain afin de comprendre les contraintes et besoins réels.',
      'Animation d’ateliers d’idéation pour co-construire les solutions, puis création de maquettes et prototypes alignés avec les usages et les attentes des conseillers.'
    ],
    radarImage: '/images/Avatar/expert/New-rdv.png',
  },
  {
    id: 'exp-Assist',
    type: 'experience',
    title: 'Outil de gestion',
    fonction: 'Product Designer',
    numero: 8,
    periode: '2023',
    duree: '3 mois',
    client: 'Orange',
    lieu: 'île de france',
    resume: [
      'Conception d’un nouvel outil de gestion des demandes d’assistance mobile et internet.',
      'Création d’un tableau de bord permettant de visualiser et traiter efficacement l’ensemble des demandes client.',
      'Réalisation d’ateliers d’idéation, sondages et questionnaires pour cerner les besoins.',
      'Conception de maquettes et prototypes, suivie de tests utilisateurs et d’une phase de recette pour garantir la qualité de l’outil.'
    ],

    radarImage: '/images/Avatar/expert/Gestion.png',
  },
  {
    id: 'exp-Deviseur',
    type: 'experience',
    title: 'Deviseur',
    fonction: 'UX / UI Designer',
    numero: 9,
    periode: '2021',
    duree: '1 an et 6 mois',
    client: 'Crédit agricole',
    lieu: 'île de france',
    resume: [
      'Conception et réalisation de nouveaux parcours utilisateurs pour les produits santé, habitation et automobile.',
      'Réalisation d’interviews utilisateurs pour comprendre les besoins et attentes, création de maquettes adaptées à tous les devices, élaboration de prototypes interactifs, et conduite de tests utilisateurs pour valider et optimiser les parcours avant déploiement.'
    ],
    radarImage: '/images/Avatar/confirme/Deviseur.png',
  },
  {
    id: 'exp-DS-CA',
    type: 'experience',
    title: 'Design system',
    fonction: 'UX / UI Designer',
    numero: 10,
    periode: '2021',
    duree: '1 an et 6 mois',
    client: 'Crédit agricole',
    lieu: 'île de france',
    resume: [
      'Définition des principes de design (cohérence, accessibilité, modularité), création d’une bibliothèque de composants réutilisables et responsives, normalisation du langage visuel (tokens, styles, grilles) et rédaction d’une documentation claire à destination des équipes produit, design et tech.',
      'Mise en place d’un processus de gouvernance (contribution, revue, versioning) pour assurer la qualité, l’évolutivité et l’adoption du design system à l’échelle de l’organisation.'
    ],
    radarImage: '/images/Avatar/confirme/DS-ca.png',
  },
  {
    id: 'exp-MNT',
    type: 'experience',
    title: 'Design system',
    fonction: 'UX / UI Designer',
    numero: 11,
    periode: '2020',
    duree: '11 mois',
    client: 'MNT',
    lieu: 'île de france',
    resume: [
      'Création de nouveaux parcours sur l’ensemble des produits.',
      'Conception et réalisation de formulaires.',
      'Refonte de plusieurs applications ( UX, UI et intégration ).',
      'Création de pages HTML.',
      'Élaboration d’un story book avec les différents composants.'
    ],
    radarImage: '/images/Avatar/confirme/MNT.png',
  },
  {
    id: 'exp-Nomade',
    type: 'experience',
    title: 'Nomade',
    fonction: 'UX / UI Designer',
    numero: 12,
    periode: '2020',
    duree: '3 mois',
    client: 'La poste',
    lieu: 'île de france',
    resume: [
      'Création d’un site internet sous Wordpress.',
      'Création de l’arborescence, du parcours utilisateur, des wireframes, des maquettes et du prototype.',
      'Création du thème en CSS et édition des éléments en HTML'
    ],
    radarImage: '/images/Avatar/confirme/Nomade.png',
  },
  {
    id: 'exp-Ametix',
    type: 'experience',
    title: 'MEILLEUR DEV DE FRANCE',
    fonction: 'UX / UI Designer',
    numero: 13,
    periode: '2019',
    duree: '4 mois',
    client: 'Ametix',
    lieu: 'île de france',
    resume: [
      'Création du site « meilleur dev de france » sur WordPress.',
      'Création de maquettes et intégration des différents contenus.',
      'Refonte en CSS du thème pour adaptation des besoins.'
    ],
    radarImage: '/images/Avatar/confirme/Ametix.png',
  },
  {
    id: 'exp-METLIFE',
    type: 'experience',
    title: 'Deviseur',
    fonction: 'UX / UI Designer',
    numero: 14,
    periode: '2018',
    duree: '3 mois',
    client: 'Metlife',
    lieu: 'île de france',
    resume: [
      'Conception et création d’un formulaire.',
      'Création des différentes étapes à travers des wireframes puis maquettage & prototypage.',
      'Création du formulaire en HTML & CSS + JS'
    ],
    radarImage: '/images/Avatar/confirme/Metlife.png',
  },
  {
    id: 'exp-SUADEO',
    type: 'experience',
    title: 'Branding',
    fonction: 'UX / UI Designer',
    numero: 15,
    periode: '2018',
    duree: '5 mois',
    client: 'Suadeo',
    lieu: 'île de france',
    resume: [
      'Refonte graphique des systèmes applicatifs.',
      'Mise en place de templates pour le site interne.',
      'Création de supports de communication.'
    ],
    radarImage: '/images/Avatar/junior/Suadeo.png',
  },
  {
    id: 'exp-CA-Vitrine',
    type: 'experience',
    title: 'Refonte graphique',
    fonction: 'UX / UI Designer',
    numero: 16,
    periode: '2017',
    duree: '5 mois',
    client: 'Crédit agricole',
    lieu: 'île de france',
    resume: [
      'Refonte graphique de l’ensemble des sites vitrines.',
      'Créations de wireframes RWD et application de la charte graphique du Crédit Agricole.',
      'Réalisation et intégration de contenu HTML & CSS.'
    ],
    radarImage: '/images/Avatar/junior/CA-vitrine.png',
  },
  {
    id: 'exp-BNP-app',
    type: 'experience',
    title: 'Application trading',
    fonction: 'UX / UI Designer',
    numero: 17,
    periode: '2017',
    duree: '2 mois',
    client: 'BNP PARIBAS',
    lieu: 'île de france',
    resume: [
      'Création d’un application sur Ipad à destination des traders internes à la BNP Paribas.',
      'Réception des wireframes pour application de la charte graphique et mise en conformité pour intégration.',
      'Intégration des contenus HTML et création du design en CSS.'
    ],
    radarImage: '/images/Avatar/junior/BNP-app.png',
  },
  {
    id: 'exp-AUBAY',
    type: 'experience',
    title: "Création d'un site internet",
    fonction: 'UX / UI Designer',
    numero: 18,
    periode: '2017',
    duree: '1 mois',
    client: 'Aubay',
    lieu: 'île de france',
    resume: [
      'Création d’un site interne à l’entreprise avec le CMS WordPress afin de dématérialiser le « Welcome Pack ».',
      'Réalisation de charte graphique, maquettes et prototypage.',
      'Intégration des contenus dans WordPress.',
      'Respect et application des normes d’accessibilités W3C.'
    ],
    radarImage: '/images/Avatar/junior/Aubay.png',
  },
  {
    id: 'exp-AUBAY-Blog',
    type: 'experience',
    title: 'Blog interne',
    fonction: 'UX / UI Designer',
    numero: 19,
    periode: '2017',
    duree: '1 mois',
    client: 'Aubay',
    lieu: 'île de france',
    resume: [
      'Création d’un blog pour le site interne de l’entreprise.',
      'Réalisation de wireframes, maquettes et prototypage',
      'Création et intégration d’un sous-site avec le CMS WordPress.',
      'Mise en place du design en CSS'
    ],
    radarImage: '/images/Avatar/junior/Aubay-blog.png',
  },
];

