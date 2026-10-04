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
    titre: 'Application mobile',
    categorie: 'application',
    client: 'Django',
    annee: 2026,
    description:
      "Refonte complète de l'expérience mobile Kaya : parcours d'onboarding simplifié, design system modulaire et prototypes testés auprès de 30 utilisateurs.",
    fonction: 'Product Designer',
    contexte:
      "Django propose une application mobile permettant la contractualisation de crédits à la consommation, ainsi qu’un outil back office utilisé par les conseillers. L’enjeu était d’améliorer l’expérience client pour favoriser la souscription, tout en rendant l’outil conseiller plus efficace au quotidien. Le back office devait aussi évoluer pour intégrer de nouvelles fonctionnalités et automatiser certaines tâches récurrentes, comme l’envoi d’emails. \n L’objectif était de réduire les manipulations inutiles et de mieux hierarchiser les informations affichées. Par exemple, afficher le temps restant avant l’expiration d’un contrat plutôt que seulement la date de souscription, afin d’aider le conseiller à prioriser ses actions et limiter les erreurs.",
    monRole:
      "J’ai travaillé sur la conception des parcours de l’application mobile et sur la refonte de l’outil back office, avec un enjeu important autour de l’accessibilité des interfaces.\n Mon rôle portait aussi sur la création d’un nouveau design system, accessible et structuré selon les bonnes pratiques : tokenisation, nommage des composants, cohérence des usages et documentation suffisante pour faciliter le déploiement.",
    demarche:
      "Un des principaux challenges venait de l’impossibilité de mener des tests utilisateurs classiques. Il fallait donc trouver d’autres moyens de sécuriser les choix de conception et de limiter les risques sur les parcours proposés. \n Le travail s’est appuyé sur les bonnes pratiques web, les principes d’accessibilité et les heuristiques d’interface : lisibilité, affordance, hiérarchie de l’information, réduction de la charge cognitive et clarté des actions. Des guerrilla tests ont pu être menés en interne à partir de prototypes, afin de confronter rapidement les parcours à des retours concrets avant déploiement.",
    resultat:
      "Le nouveau design a été testé auprès des conseillers, présents dans les mêmes bureaux, avec un taux de satisfaction de 100 % sur les retours recueillis. \n Le projet a contribué à améliorer les parcours de souscription, à rendre le back office plus lisible pour les conseillers et à poser une base de design system respectant mieux les règles d’accessibilité.",
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
    description:
      'Conception UX/UI d\'un site vitrine pour une start-up énergie verte : identité visuelle, wireframes, maquettes haute-fidélité et suivi du développement.',
    fonction: 'Product Designer',
    contexte:
      "Orange disposait d’un outil de recouvrement historique, Frégate, mais celui-ci ne répondait plus aux critères attendus en matière de sécurité des données, de maintenance et d’usage. L’outil s’appuyait sur un environnement technique ancien, notamment avec des briques Cobol, ce qui rendait la maintenance plus compliquée.\nL’interface avait vieilli. La navigation ne correspondait plus aux habitudes d’usage actuelles et rendait la prise en main difficile pour les équipes métier. Sur une activité déjà complexe comme le recouvrement (typologies clients multiples, règles spécifiques, contraintes légales et données sensibles) cela créait une perte d’efficience et augmentait le temps nécessaire pour traiter les dossiers.",
    monRole:
      "J’ai piloté la conception UX du nouvel outil, avec un double enjeu : proposer une interface plus claire pour les utilisateurs, tout en respectant les principes de connexion à l’architecture globale Orange.\nJ’ai pu superviser le travail de plusieurs équipes design et développement. Mon rôle était de garantir la cohérence des maquettes produites, d’éviter que chaque équipe avance dans sa propre logique et de maintenir une compréhension partagée de l’outil.",
    demarche:
      "Le travail a été mené en co-construction avec les représentants métier à chaque étape. L’objectif était de repartir des usages réels, de comprendre les contraintes opérationnelles, les cas limites et les règles qui structurent le recouvrement avant de figer les parcours.\n Le travail devait non seulement simplifier l’interface, mais aussi rendre l’outil plus facile à utiliser. Une partie importante ma mission consistait à aligner métiers, design et technique autour d’un même outil, malgré la complexité du périmètre et les contraintes du système existant.",
    resultat:
      "La refonte a permis de simplifier la navigation et d’améliorer la prise en main par les équipes métier. Les retours montrent que l’outil n’est plus un obstacle supplémentaire dans une fonction déjà complexe.\n Des gains d’ETP ont été mesurés. Le projet a aussi eu comme co-bénéfice de retrouver et de mieux formaliser plusieurs règles métier jusque-là implicites ou dispersées.",
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
    description:
      "Design d'un dashboard de données complexes rendu lisible grâce à une hiérarchie visuelle forte et des composants réutilisables documentés dans un design system.",
    fonction: 'Product Designer',
    contexte:
      "Orange souhaitait tester, avec le POC MAIA, un outil IA destiné aux conseillers en centre d’appel. L’objectif était de connecter l’assistant à BASIC, l’outil existant centralisant les procédures, les fiches produits et les marches à suivre que les conseillers doivent transmettre aux clients. \n La recherche dans BASIC était peu performante et prenait beaucoup de temps. L’outil contient un très grand nombre d’entrées, parfois mal indexées, avec des doublons et des contenus obsolètes qui continuent d’apparaître dans les recherches classiques. Pour un conseiller en appel, cela allonge le temps de réponse côté client et crée surtout le risque de s’appuyer sur une information incomplète ou incorrecte.",
    monRole:
      "J’ai travaillé sur la conception de l’expérience utilisateur du chatbot IA, avec comme enjeu principal de rendre l’assistant utile pendant l’appel, sans ajouter une couche de complexité à un écran de travail déjà très dense. \n Mon rôle consistait aussi à poser les premiers principes d’usage d’un chatbot IA pour les outils conseillers chez Orange. Il fallait définir où l’assistant devait apparaître, comment il devait se comporter pendant l’appel, à quels moments il devait se rétracter, et comment laisser la main au conseiller sans gêner son travail.",
    demarche:
      "Le projet s’est construit par itérations, dans un contexte où les équipes découvraient encore les possibilités et les limites de l’IA. Cela a demandé d’ajuster la conception au fur et à mesure des tests et des retours. \n Le travail de design devait répondre à plusieurs questions : comment faire remonter en temps réel les informations pertinentes issues de BASIC ? Comment éviter que le chatbot masque des informations importantes à l’écran ? Comment proposer une aide visible sans devenir intrusive ? Et comment favoriser l’adoption par des conseillers déjà habitués à leurs outils et à leurs propres méthodes de recherche ?",
    resultat:
      "Le chatbot a été mis en test. Le design a été validé, tandis que la pertinence des réponses proposées par l’IA devait encore être améliorée et évaluée dans les tests suivants. Les utilisateurs ont identifié un vrai intérêt au projet. Lorsque les réponses de l’IA étaient pertinentes, le taux de satisfaction des téléconseillers atteignait 100 %. Le projet a également permis de poser un premier standard d’expérience pour l’intégration d’un assistant IA dans les outils conseillers Orange.",
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
    description:
      "Application de carnet de voyage collaboratif : recherche utilisateur, architecture de l'information et animations d'interface pour renforcer l'engagement.",
    fonction: 'Product Designer',
    contexte:
      "Orange disposait de deux outils de suivi de commande : l’un pour les commandes mobile, l’autre pour les commandes internet. Cette séparation créait des situations peu efficaces pour les conseillers, notamment lorsqu’un client appelait pour une commande hybride, par exemple un pack internet + mobile. Dans ce type de cas, le conseiller devait passer d’un outil à l’autre pour retrouver les informations liées à la commande et répondre au client. \n L’objectif était donc de créer un outil unique permettant de suivre l’ensemble du processus, de la phase de commande jusqu’à la livraison.",
    monRole:
      "J’ai travaillé sur la conception UX du nouvel outil, avec comme enjeu principal de simplifier l’expérience des téléconseillers et de leur permettre d’accéder plus rapidement aux informations utiles pendant l’appel. \n Mon rôle a été de proposer une interface capable de répondre aux besoins de deux typologies de conseillers, déjà habitués à des outils, des logiques d’usage et des affichages différents. Il fallait trouver des écrans communs, sans privilégier uniquement les habitudes d’un groupe au détriment de l’autre.",
    demarche:
      "Le travail de design a porté sur la simplification des écrans et la hiérarchisation des informations. L’objectif était que le conseiller puisse identifier rapidement l’état d’une commande, son avancement et les informations prioritaires à communiquer au client. \n Un des enjeux importants concernait l’affichage des données. Les marges de manœuvre techniques étant limitées, il a fallu travailler étroitement avec les équipes de développement pour améliorer l’interface sans refonte technique. Nous nous sommes notamment appuyés sur des solutions déjà mises en place par d’autres équipes sur d’autres projets.",
    resultat:
      "Le nouvel outil a permis de réunir le suivi des commandes dans une seule interface, avec une lecture plus claire du parcours client. La refonte a apporté une vue plus moderne, notamment avec l’intégration d’une carte permettant de suivre l’état de la commande en quasi temps réel. Les écrans ont été simplifiés pour rendre les informations importantes plus accessibles aux conseillers, avec un effet sur la qualité de réponse et la satisfaction client. Le projet a aussi eu comme bénéfice indirect de renforcer l’harmonie entre différents outils métier Orange, en réutilisant des solutions déjà conçues ailleurs dans l’écosystème.",
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
    annee: 2021,
    description:
      "Application de carnet de voyage collaboratif : recherche utilisateur, architecture de l'information et animations d'interface pour renforcer l'engagement.",
    fonction: 'Product Designer',
    contexte:
      "Orange disposait d’un outil métier permettant aux conseillers de tester les offres disponibles en fonction de l’adresse du client. Dans certains cas, l’adresse ne suffisait pas à donner un résultat assez précis, ce qui pouvait générer des erreurs d’éligibilité ou des incertitudes sur les offres réellement disponibles. \n Le besoin était donc d’obtenir une localisation plus fine, sans alourdir le parcours du conseiller ni demander au client une manipulation complexe.",
    monRole:
      "J’ai travaillé sur la recherche de solution et la conception UX du nouveau parcours. L’enjeu était de trouver un moyen simple d’obtenir une géolocalisation plus précise, puis de l’intégrer dans l’outil métier déjà utilisé par les conseillers. \n Mon rôle portait donc sur la conception de l’interface et, en amont, sur la manière de résoudre le problème d’usage : comment obtenir la localisation, comment la faire valider par le client, et comment réintégrer le résultat dans le test d’éligibilité.",
    demarche:
      "La phase d’idéation a permis d’aboutir à une solution simple : utiliser le téléphone portable du client. Le conseiller pouvait envoyer un SMS contenant un lien, permettant au client de transmettre sa position GPS exacte à Orange. \n Le travail de design a ensuite permit d’intégrer cette solution dans le parcours existant. Il fallait que le conseiller puisse déclencher la demande en une ou deux étapes maximum, que le client comprenne immédiatement ce qu’il devait faire, et que le résultat de la géolocalisation revienne dans l’outil sans créer de procédure parallèle.",
    resultat:
      "Le parcours mis en place permet désormais au conseiller de déclencher la demande rapidement, et au client de transmettre sa position en un clic. \n En quelques secondes, la géolocalisation peut être récupérée et intégrée dans l’outil d’éligibilité. La solution a permis de réduire les erreurs liées à une localisation trop imprécise, tout en gardant un parcours simple pour le conseiller et pour le client.",
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
    description:
      "Application de carnet de voyage collaboratif : recherche utilisateur, architecture de l'information et animations d'interface pour renforcer l'engagement.",
    fonction: 'Product Designer',
    contexte:
      "Le design system d’Orange était principalement pensé pour des interfaces grand public. Les outils métier répondent, eux à d’autres contraintes : écrans souvent plus denses, informations plus nombreuses, espaces d’affichage réduits et besoins d’efficacité pour les conseillers. \n Il a donc été décidé de créer un fork du design system existant. Ce design system spécifique métier devait conserver une cohérence avec l’expérience Orange globale tout en répondant aux usages spécifiques des interfaces métier.",
    monRole:
      "J’ai travaillé sur l’adaptation du design system pour les outils conseiller, avec comme enjeu principal de rendre les composants utilisables dans des écrans plus fournis, sans perdre en lisibilité.  Mon rôle consistait à revoir plusieurs principes d’interface, notamment les espacements, les tailles typographiques et certains comportements de composants, afin de mieux les adapter aux contraintes des outils métier.",
    demarche:
      "Le travail a porté sur une librairie de composants importante, qu’il a fallu adapter sans créer de rupture avec le design system existant. Chaque ajustement devait être pensé à l’échelle du système : un changement de taille, d’espacement pouvait avoir un impact sur plusieurs écrans et plusieurs outils. Il fallait donc garantir la cohérence de l’ensemble, pas seulement corriger les composants au cas par cas.",
    resultat:
      "Le design system, initialement prévu pour les outils métier en France, a ensuite été repris pour les interfaces métier au niveau international.  Le projet a permis de créer une meilleure continuité entre l’expérience grand public Orange et les outils utilisés par les conseillers, tout en tenant compte des contraintes propres aux interfaces métier.",
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
