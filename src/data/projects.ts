import type { Projet } from '../types';

/**
 * Ajouter un projet = ajouter un objet ici, rien d'autre à toucher.
 * - `image` : visuel de secours utilisé en version mobile/allégée (WebP/AVIF).
 * - Le fond plein écran est commun à toutes les pages (Projets, CV) et se
 *   règle dans `src/config/background.ts` (PAGE_BACKGROUND_IMAGE).
 * - `premierPlan` : éléments décoratifs (capture du projet, objets…)
 *   affichés par-dessus le fond, avec un léger effet de profondeur
 *   (parallaxe au mouvement de la souris). Chaque couche se positionne via
 *   `className` (classes Tailwind libres, ex. "bottom-10 right-16 w-80") et
 *   `profondeur` (intensité de la parallaxe, 0 = fixe).
 * - `dialogue` : répliques affichées par l'avatar quand ce projet est sélectionné.
 */
export const projects: Projet[] = [
  {
    id: 'Django-app',
    titre: 'Simplifier la souscription et la gestion des crédits',
    categorie: 'application',
    client: 'Django',
    annee: 2026,
    competences: [
      { label: 'Design system', couleur: 'turquoise' },
      { label: 'Accessibilité', couleur: 'coral' },
      { label: 'Prototypage', couleur: 'sun' },
    ],
    fonction: 'Product Designer',
    contexte: [
      { type: 'paragraphe',
        texte:
          'Django propose une application mobile de souscription de crédits à la consommation associée d’un back-office destiné aux conseillers.',
      },
      { type: 'paragraphe',
        texte:
          "La mission devait fluidifier le parcours client et faciliter le suivi des dossiers par les conseillers, tout en accompagnant l'évolution des outils.",
      },
    ],
    monRole: [
      { type: 'paragraphe',
        texte:
          "Seul designer sur le projet, j'ai repris en charge la conception UX/UI des parcours et des interfaces, ainsi que la refonte du design system.",
      },
      { type: 'paragraphe',
        texte:
          "J'ai travaillé en lien direct avec le CMO de la startup pour lui proposer des recommandations de conception, ensuite mises en œuvre par l'équipe de développement",
      },
    ],
    demarche: [
      { type: 'sous-titre', texte: 'Aider les conseillers à identifier les priorités' },
      { type: 'paragraphe',
        texte:
          "J'ai repensé la hiérarchie des informations et les interactions du back-office pour faciliter le suivi des dossiers, limiter les manipulations inutiles et réduire les risques d'erreur.",
      },
      { type: 'paragraphe',
        texte:
          "Un exemple : remplacer l'affichage de la date de souscription par le temps restant avant l'expiration d'un contrat, pour rendre les dossiers prioritaires plus facilement identifiables.",
      },
      { type: 'sous-titre', texte: "Accompagner l'évolution du produit par la consolidation du design system" },
      { type: 'paragraphe',
        texte:
          "J'ai revu le design system pour harmoniser les interfaces et faciliter les futures évolutions de l'application. La mise en place de design tokens, de composants cohérents et de règles de documentation a permis de poser une base commune pour les prochains changements et ajouts de fonctionnalités, avec une attention particulière à l'accessibilité.",
      },
      { type: 'sous-titre', texte: 'Valider les choix de conception sans tests utilisateurs classiques' },
      { type: 'paragraphe',
        texte: "L'accès limité aux utilisateurs ne permettait pas d'organiser des tests traditionnels. Je me suis donc appuyé sur les heuristiques UX et les principes d'accessibilité : lisibilité, clarté des actions, hiérarchie visuelle et réduction de la charge cognitive.",
      },
      { type: 'paragraphe',
        texte: "Des tests rapides sur prototypes, réalisés en interne, ont permis de recueillir des retours concrets et d'ajuster les propositions avant leur déploiement.",
      },
    ],
    resultat: [
      { type: 'liste',
        items: ["Le projet a contribué à améliorer les parcours de souscription et la lisibilité du back-office pour les conseillers.","La création du design system a permis d'harmoniser les interfaces, de mieux intégrer les règles d'accessibilité et de poser une base commune pour les futures évolutions du produit.","100 % de satisfaction sur les retours recueillis lors des tests du nouveau design auprès des conseillers." ] },
    ],
    image: '/images/projects/mac1.png',
    premierPlan: [
      {
        image: '/images/projects/plante.png',
        alt: "Capture de l'application Kaya",
        className: 'bottom-0 right-2 w-[80%] max-w-xl floating',
        profondeur: 24,
      },
      {
        image: '/images/projects/mac1.png',
        alt: "Capture de l'application Kaya",
        className: 'top-70 left-9 w-[80%] max-w-xl floating',
        profondeur: 24,
      },
    ],
    liens: [{ label: 'Voir le prototype', url: 'https://example.com/kaya' }],
    dialogue: [
      "Kaya, c'est mon projet préféré : on est passés de 40% à 68% de complétion sur l'onboarding !",
      "Le plus dur ? Convaincre l'équipe de supprimer 3 écrans entiers. Spoiler : ça a marché.",
    ],
    nouveau: true,
  },
  {
    id: 'Recouvrement',
    titre: 'Outil de recouvrement',
    categorie: 'web',
    client: 'Orange',
    annee: 2023,
    competences: [
      { label: 'Agilité', couleur: 'coral' },
      { label: 'Tests utilisateurs', couleur: 'turquoise' },
      { label: 'Ateliers d\'idéation', couleur: 'sun' },
    ],
    fonction: 'Product Designer',
    contexte: [
      {
        type: 'paragraphe',
        texte:
          'Orange disposait d’un outil de recouvrement historique, Frégate, mais celui-ci ne répondait plus aux critères attendus en matière de sécurité des données, de maintenance et d’usage. L’outil s’appuyait sur un environnement technique ancien, notamment avec des briques Cobol, ce qui rendait la maintenance plus compliquée.',
      },
      {
        type: 'paragraphe',
        texte:
          'L’interface avait vieilli. La navigation ne correspondait plus aux habitudes d’usage actuelles et rendait la prise en main difficile pour les équipes métier. Sur une activité déjà complexe comme le recouvrement (typologies clients multiples, règles spécifiques, contraintes légales et données sensibles) cela créait une perte d’efficience et augmentait le temps nécessaire pour traiter les dossiers.',
      },
    ],
    monRole: [
      {
        type: 'paragraphe',
        texte:
          'J’ai piloté la conception UX du nouvel outil, avec un double enjeu : proposer une interface plus claire pour les utilisateurs, tout en respectant les principes de connexion à l’architecture globale Orange.',
      },
      {
        type: 'paragraphe',
        texte:
          'J’ai pu superviser le travail de plusieurs équipes design et développement. Mon rôle était de garantir la cohérence des maquettes produites, d’éviter que chaque équipe avance dans sa propre logique et de maintenir une compréhension partagée de l’outil.',
      },
    ],
    demarche: [
      {
        type: 'paragraphe',
        texte:
          'Le travail a été mené en co-construction avec les représentants métier à chaque étape. L’objectif était de repartir des usages réels, de comprendre les contraintes opérationnelles, les cas limites et les règles qui structurent le recouvrement avant de figer les parcours.',
      },
      {
        type: 'paragraphe',
        texte:
          'Le travail devait non seulement simplifier l’interface, mais aussi rendre l’outil plus facile à utiliser. Une partie importante ma mission consistait à aligner métiers, design et technique autour d’un même outil, malgré la complexité du périmètre et les contraintes du système existant.',
      },
    ],
    resultat: [
      {
        type: 'paragraphe',
        texte:
          'La refonte a permis de simplifier la navigation et d’améliorer la prise en main par les équipes métier. Les retours montrent que l’outil n’est plus un obstacle supplémentaire dans une fonction déjà complexe.',
      },
      {
        type: 'liste',
        items: [
          'Des gains d’ETP ont été mesurés.',
          'Le projet a aussi eu comme co-bénéfice de retrouver et de mieux formaliser plusieurs règles métier jusque-là implicites ou dispersées.',
        ],
      },
    ],
    image: '/images/projects/lumen-site.webp',
    premierPlan: [
      {
        image: '/images/projects/manette.png',
        alt: 'Capture du site Lumen',
        className: 'bottom-0 right-10 w-[38%] max-w-md floating',
        profondeur: 24,
      },
      {
        image: '/images/projects/plante.png',
        alt: 'Capture du site Lumen',
        className: 'bottom-60 left-20 w-[20%] max-w-ml floating',
        profondeur: 24,
      },
    ],
    liens: [{ label: 'Voir le site', url: 'https://example.com/lumen' }],
    dialogue: [
      'Pour Lumen, on voulait un site qui respire — beaucoup de blanc, des formes organiques.',
    ],
  },
  {
    id: 'Maia',
    titre: 'Assistant virtuel basé sur l’intelligence artificielle',
    categorie: 'web',
    client: 'Orange',
    annee: 2022,
    competences: [
      { label: 'Itérations rapides', couleur: 'sun' },
      { label: 'IA conversationnelle', couleur: 'turquoise' },
      { label: 'Design System', couleur: 'coral' },
    ],
    fonction: 'Product Designer',
    contexte: [
      {
        type: 'paragraphe',
        texte:
          'Orange souhaitait tester, avec le POC MAIA, un outil IA destiné aux conseillers en centre d’appel. L’objectif était de connecter l’assistant à BASIC, l’outil existant centralisant les procédures, les fiches produits et les marches à suivre que les conseillers doivent transmettre aux clients.',
      },
      {
        type: 'paragraphe',
        texte:
          'La recherche dans BASIC était peu performante et prenait beaucoup de temps. L’outil contient un très grand nombre d’entrées, parfois mal indexées, avec des doublons et des contenus obsolètes qui continuent d’apparaître dans les recherches classiques. Pour un conseiller en appel, cela allonge le temps de réponse côté client et crée surtout le risque de s’appuyer sur une information incomplète ou incorrecte.',
      },
    ],
    monRole: [
      {
        type: 'paragraphe',
        texte:
          'J’ai travaillé sur la conception de l’expérience utilisateur du chatbot IA, avec comme enjeu principal de rendre l’assistant utile pendant l’appel, sans ajouter une couche de complexité à un écran de travail déjà très dense.',
      },
      {
        type: 'paragraphe',
        texte:
          'Mon rôle consistait aussi à poser les premiers principes d’usage d’un chatbot IA pour les outils conseillers chez Orange. Il fallait définir où l’assistant devait apparaître, comment il devait se comporter pendant l’appel, à quels moments il devait se rétracter, et comment laisser la main au conseiller sans gêner son travail.',
      },
    ],
    demarche: [
      {
        type: 'paragraphe',
        texte:
          'Le projet s’est construit par itérations, dans un contexte où les équipes découvraient encore les possibilités et les limites de l’IA. Cela a demandé d’ajuster la conception au fur et à mesure des tests et des retours.',
      },
      {
        type: 'liste',
        items: [
          'Comment faire remonter en temps réel les informations pertinentes issues de BASIC ?',
          'Comment éviter que le chatbot masque des informations importantes à l’écran ?',
          'Comment proposer une aide visible sans devenir intrusive ?',
          'Comment favoriser l’adoption par des conseillers déjà habitués à leurs outils et à leurs propres méthodes de recherche ?',
        ],
      },
    ],
    resultat: [
      {
        type: 'paragraphe',
        texte:
          'Le chatbot a été mis en test. Le design a été validé, tandis que la pertinence des réponses proposées par l’IA devait encore être améliorée et évaluée dans les tests suivants.',
      },
      {
        type: 'paragraphe',
        texte:
          'Les utilisateurs ont identifié un vrai intérêt au projet. Lorsque les réponses de l’IA étaient pertinentes, le taux de satisfaction des téléconseillers atteignait 100 %. Le projet a également permis de poser un premier standard d’expérience pour l’intégration d’un assistant IA dans les outils conseillers Orange.',
      },
    ],
    image: '/images/projects/flow-dashboard.webp',
    premierPlan: [
      {
        image: '/images/projects/souris.png',
        alt: 'Capture du site Lumen',
        className: 'top-10 right-10 w-[12%] max-w-md floating',
        profondeur: 24,
      },
      {
        image: '/images/projects/casque.png',
        alt: 'Capture du site Lumen',
        className: 'bottom-20 left-20 w-[30%] max-w-ml floating',
        profondeur: 24,
      },
    ],
    dialogue: ['Des graphiques, encore des graphiques… et pourtant, zéro utilisateur perdu !'],
  },
  {
    id: 'Suivi-Commande',
    titre: 'Outil de suivi de commande',
    categorie: 'web',
    client: 'Orange',
    annee: 2021,
    competences: [
      { label: 'UX Research', couleur: 'coral' },
      { label: 'Parcours utilisateur', couleur: 'turquoise' },
      { label: 'Design d\'interface', couleur: 'sun' },
    ],
    fonction: 'Product Designer',
    contexte: [
      {
        type: 'paragraphe',
        texte:
          'Orange disposait de deux outils de suivi de commande : l’un pour les commandes mobile, l’autre pour les commandes internet. Cette séparation créait des situations peu efficaces pour les conseillers, notamment lorsqu’un client appelait pour une commande hybride, par exemple un pack internet + mobile. Dans ce type de cas, le conseiller devait passer d’un outil à l’autre pour retrouver les informations liées à la commande et répondre au client.',
      },
      {
        type: 'paragraphe',
        texte:
          'L’objectif était donc de créer un outil unique permettant de suivre l’ensemble du processus, de la phase de commande jusqu’à la livraison.',
      },
    ],
    monRole: [
      {
        type: 'paragraphe',
        texte:
          'J’ai travaillé sur la conception UX du nouvel outil, avec comme enjeu principal de simplifier l’expérience des téléconseillers et de leur permettre d’accéder plus rapidement aux informations utiles pendant l’appel.',
      },
      {
        type: 'paragraphe',
        texte:
          'Mon rôle a été de proposer une interface capable de répondre aux besoins de deux typologies de conseillers, déjà habitués à des outils, des logiques d’usage et des affichages différents. Il fallait trouver des écrans communs, sans privilégier uniquement les habitudes d’un groupe au détriment de l’autre.',
      },
    ],
    demarche: [
      {
        type: 'paragraphe',
        texte:
          'Le travail de design a porté sur la simplification des écrans et la hiérarchisation des informations. L’objectif était que le conseiller puisse identifier rapidement l’état d’une commande, son avancement et les informations prioritaires à communiquer au client.',
      },
      {
        type: 'paragraphe',
        texte:
          'Un des enjeux importants concernait l’affichage des données. Les marges de manœuvre techniques étant limitées, il a fallu travailler étroitement avec les équipes de développement pour améliorer l’interface sans refonte technique. Nous nous sommes notamment appuyés sur des solutions déjà mises en place par d’autres équipes sur d’autres projets.',
      },
    ],
    resultat: [
      {
        type: 'liste',
        items: [
          'Réunion du suivi des commandes dans une seule interface, avec une lecture plus claire du parcours client.',
          'Vue plus moderne, notamment avec l’intégration d’une carte permettant de suivre l’état de la commande en quasi temps réel.',
          'Écrans simplifiés pour rendre les informations importantes plus accessibles aux conseillers, avec un effet sur la qualité de réponse et la satisfaction client.',
          'Bénéfice indirect : renforcement de l’harmonie entre différents outils métier Orange, en réutilisant des solutions déjà conçues ailleurs dans l’écosystème.',
        ],
      },
    ],
    image: '/images/projects/nomad-app.webp',
    premierPlan: [
      {
        image: '/images/projects/mac1.png',
        alt: "Capture de l'application Nomad",
        className: 'bottom-8 right-10 w-[38%] max-w-md',
        profondeur: 24,
      },
    ],
    dialogue: ["Nomad m'a appris à designer pour le offline-first. Un vrai casse-tête sympa."],
  },
{
    id: 'Eligibilite',
    titre: 'Outil d’éligibilité',
    categorie: 'web',
    client: 'Orange',
    annee: 2024,
    competences: [
      { label: 'UX Design', couleur: 'turquoise' },
      { label: 'Agilité', couleur: 'coral' },
      { label: 'Prototypage', couleur: 'sun' },
    ],
    fonction: 'Product Designer',
    contexte: [
      {
        type: 'paragraphe',
        texte:
          'Orange disposait d’un outil métier permettant aux conseillers de tester les offres disponibles en fonction de l’adresse du client. Dans certains cas, l’adresse ne suffisait pas à donner un résultat assez précis, ce qui pouvait générer des erreurs d’éligibilité ou des incertitudes sur les offres réellement disponibles.',
      },
      {
        type: 'paragraphe',
        texte:
          'Le besoin était donc d’obtenir une localisation plus fine, sans alourdir le parcours du conseiller ni demander au client une manipulation complexe.',
      },
    ],
    monRole: [
      {
        type: 'paragraphe',
        texte:
          'J’ai travaillé sur la recherche de solution et la conception UX du nouveau parcours. L’enjeu était de trouver un moyen simple d’obtenir une géolocalisation plus précise, puis de l’intégrer dans l’outil métier déjà utilisé par les conseillers.',
      },
      {
        type: 'paragraphe',
        texte:
          'Mon rôle portait donc sur la conception de l’interface et, en amont, sur la manière de résoudre le problème d’usage : comment obtenir la localisation, comment la faire valider par le client, et comment réintégrer le résultat dans le test d’éligibilité.',
      },
    ],
    demarche: [
      {
        type: 'paragraphe',
        texte:
          'La phase d’idéation a permis d’aboutir à une solution simple : utiliser le téléphone portable du client. Le conseiller pouvait envoyer un SMS contenant un lien, permettant au client de transmettre sa position GPS exacte à Orange.',
      },
      {
        type: 'paragraphe',
        texte:
          'Le travail de design a ensuite permis d’intégrer cette solution dans le parcours existant. Il fallait que le conseiller puisse déclencher la demande en une ou deux étapes maximum, que le client comprenne immédiatement ce qu’il devait faire, et que le résultat de la géolocalisation revienne dans l’outil sans créer de procédure parallèle.',
      },
    ],
    resultat: [
      {
        type: 'liste',
        items: [
          'Le conseiller peut désormais déclencher la demande rapidement, et le client transmettre sa position en un clic.',
          'En quelques secondes, la géolocalisation peut être récupérée et intégrée dans l’outil d’éligibilité.',
          'Réduction des erreurs liées à une localisation trop imprécise, tout en gardant un parcours simple pour le conseiller et pour le client.',
        ],
      },
    ],
    image: '/images/projects/nomad-app.webp',
    premierPlan: [
      {
        image: '/images/projects/mac1.png',
        alt: "Capture de l'application Nomad",
        className: 'bottom-8 right-10 w-[38%] max-w-md',
        profondeur: 24,
      },
    ],
    dialogue: ["Nomad m'a appris à designer pour le offline-first. Un vrai casse-tête sympa."],
  },
{
    id: 'Design-system',
    titre: 'Design system outils métiers',
    categorie: 'web',
    client: 'Orange',
    annee: 2021,
    competences: [
      { label: 'UI Design', couleur: 'coral' },
      { label: 'Documentation', couleur: 'turquoise' },
      { label: 'Gouvernance', couleur: 'sun' },
    ],
    fonction: 'Product Designer',
    contexte: [
      {
        type: 'paragraphe',
        texte:
          'Le design system d’Orange était principalement pensé pour des interfaces grand public. Les outils métier répondent, eux à d’autres contraintes : écrans souvent plus denses, informations plus nombreuses, espaces d’affichage réduits et besoins d’efficacité pour les conseillers.',
      },
      {
        type: 'paragraphe',
        texte:
          'Il a donc été décidé de créer un fork du design system existant. Ce design system spécifique métier devait conserver une cohérence avec l’expérience Orange globale tout en répondant aux usages spécifiques des interfaces métier.',
      },
    ],
    monRole: [
      {
        type: 'paragraphe',
        texte:
          'J’ai travaillé sur l’adaptation du design system pour les outils conseiller, avec comme enjeu principal de rendre les composants utilisables dans des écrans plus fournis, sans perdre en lisibilité.',
      },
      {
        type: 'paragraphe',
        texte:
          'Mon rôle consistait à revoir plusieurs principes d’interface, notamment les espacements, les tailles typographiques et certains comportements de composants, afin de mieux les adapter aux contraintes des outils métier.',
      },
    ],
    demarche: [
      {
        type: 'paragraphe',
        texte:
          'Le travail a porté sur une librairie de composants importante, qu’il a fallu adapter sans créer de rupture avec le design system existant. Chaque ajustement devait être pensé à l’échelle du système : un changement de taille, d’espacement pouvait avoir un impact sur plusieurs écrans et plusieurs outils. Il fallait donc garantir la cohérence de l’ensemble, pas seulement corriger les composants au cas par cas.',
      },
    ],
    resultat: [
      {
        type: 'paragraphe',
        texte:
          'Le design system, initialement prévu pour les outils métier en France, a ensuite été repris pour les interfaces métier au niveau international.',
      },
      {
        type: 'paragraphe',
        texte:
          'Le projet a permis de créer une meilleure continuité entre l’expérience grand public Orange et les outils utilisés par les conseillers, tout en tenant compte des contraintes propres aux interfaces métier.',
      },
    ],
    image: '/images/projects/nomad-app.webp',
    premierPlan: [
      {
        image: '/images/projects/mac1.png',
        alt: "Capture de l'application Nomad",
        className: 'bottom-8 right-10 w-[38%] max-w-md',
        profondeur: 24,
      },
    ],
    dialogue: ["Nomad m'a appris à designer pour le offline-first. Un vrai casse-tête sympa."],
  },
];
