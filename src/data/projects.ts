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
      { label: 'Design system', couleur: 'coral' },
      { label: 'Accessibilité', couleur: 'coral' },
      { label: 'Prototypage', couleur: 'coral' },
    ],
    fonction: 'Product Designer',
    contexte: [
      { type: 'paragraphe',
        texte:
          "Django propose une application mobile de crédits à la consommation et dispose d’un outil de back-office destiné aux conseillers.",
      },
      { type: 'paragraphe',
        texte:
          "L'objectif de la mission était de fluidifier le parcours client et de faciliter le suivi des dossiers par les conseillers, tout en accompagnant l'évolution des outils.",
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
          "J'ai revu le design system pour harmoniser les interfaces et faciliter les futures évolutions de l'application. La mise en place de design tokens, de composants cohérents et de documentation a permis de poser une base commune pour les prochains changements et ajouts de fonctionnalités, avec une attention particulière sur l'accessibilité.",
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
        items: ["Le projet a contribué à améliorer les parcours de souscription et la lisibilité du back-office pour les conseillers.",
                "L'optimisation du design system a permis d'harmoniser les interfaces, de mieux intégrer les règles d'accessibilité et de poser une base commune pour les futures évolutions du produit.",
                "100 % de satisfaction sur les retours recueillis lors des tests du nouveau design auprès des conseillers." ] },
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
      "Score d’accessibilité au départ : 0%. \n Alex a repris les fondamentaux et dépassé les 50%.",
      "Moi, j’avais proposé un bouton « Activer l’accessibilité ». Apparemment, ça ne fonctionne pas comme ça. Dommage, c’était plus rapide. 🤷‍♂️",
    ],
    nouveau: false,
  },
  {
    id: 'Recouvrement',
    titre: 'Repenser le traitement des dossiers de recouvrement',
    categorie: 'web',
    client: 'Orange',
    annee: 2023,
    competences: [
      { label: 'Agilité', couleur: 'coral' },
      { label: 'Tests utilisateurs', couleur: 'coral' },
      { label: 'Ateliers d\'idéation', couleur: 'coral' },
    ],
    fonction: 'Product Designer',
    contexte: [
      {
        type: 'paragraphe',
        texte:
          "Chez Orange, le recouvrement mobilise plusieurs équipes qui interviennent successivement sur un même dossier, chacune avec ses propres règles et processus de validation.",
      },
      {
        type: 'paragraphe',
        texte:
          "La refonte de l'outil devait faciliter le suivi des dossiers et la prise de décision des conseillers, tout en respectant les contraintes métier et techniques.",
      },
    ],
    monRole: [
      {
        type: 'paragraphe',
        texte:
          "J'ai piloté la conception UX du nouvel outil et coordonné le travail de plusieurs équipes design et développement.",
      },
      {
        type: 'paragraphe',
        texte:
          "Il s’agissait de garantir la cohérence des parcours et des maquettes, de faire converger les propositions et de maintenir une vision partagée du produit entre les métiers, le design et la technique.",
      },
    ],
    demarche: [
      { type: 'sous-titre', texte: "Donner aux conseillers une vision claire de chaque dossier" },
      {
        type: 'paragraphe',
        texte:
          "Lorsqu'un conseiller intervient sur un dossier de recouvrement, celui-ci est souvent déjà passé entre les mains de plusieurs équipes. J'ai repensé la présentation de l'historique pour aider le conseiller à comprendre rapidement les étapes du dossier et à prendre les bonnes décisions.",
      },
      { type: 'sous-titre', texte: "Adapter les actions aux différentes étapes du recouvrement" },
      {
        type: 'paragraphe',
        texte:
          "Chaque étape du dossier implique des règles métier et des processus de validation spécifiques. J'ai intégré ces règles dans les parcours pour adapter les actions disponibles selon l'état du dossier et de l'équipe concernée, afin de guider les conseillers et de limiter les erreurs.",
      },
      { type: 'sous-titre', texte: "Construire une expérience cohérente entre plusieurs équipes" },
      {
        type: 'paragraphe',
        texte:
          "La conception a été menée en co-construction avec les représentants métier pour comprendre leurs usages, leurs contraintes et les cas particuliers. J'ai également coordonné les équipes design et développement afin d'harmoniser les parcours et de garantir une expérience cohérente sur l'ensemble de l'outil, dans le respect des contraintes techniques.",
      },
    ],
    resultat: [
      {
        type: 'liste',
        items: [
          "La refonte a permis d'améliorer la lisibilité de l'outil et de faciliter sa prise en main par les équipes métier.",
          "Des gains en équivalents temps plein (ETP) ont été mesurés à la suite de la refonte.",
          "Le travail de co-construction a également permis d'identifier et de mieux formaliser plusieurs règles métier jusque-là implicites ou dispersée",
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
    dialogue: [ "L’interface de recouvrement avait un petit air des années 90. 🕺🕺 \n Alex l’a remise au goût du jour, sans perdre l’historique des dossiers.",
                "Une mise à jour qui n’efface pas le passé. \n Pratique, pour du recouvrement.",
    ],
  },
  {
    id: 'Maia',
    titre: 'Concevoir un assistant IA pour les conseillers',
    categorie: 'web',
    client: 'Orange',
    annee: 2022,
    competences: [
      { label: 'Itérations rapides', couleur: 'coral' },
      { label: 'IA conversationnelle', couleur: 'coral' },
      { label: 'Design System', couleur: 'coral' },
    ],
    fonction: 'Product Designer',
    contexte: [
      {
        type: 'paragraphe',
        texte:
          "Orange souhaitait expérimenter un assistant IA pour aider ses conseillers en centre d'appel à retrouver plus rapidement les informations nécessaires aux échanges clients. La documentation interne, volumineuse et parfois redondante ou obsolète, rendait les recherches longues et l'identification de la bonne information difficile.",
      },
      {
        type: 'paragraphe',
        texte:
          "Le but de la mission était de faciliter l'accès à une information pertinente et fiable pendant les appels, sans ajouter de complexité à des interfaces de travail déjà chargées.",
      },
    ],
    monRole: [
      {
        type: 'paragraphe',
        texte:
          "J'ai travaillé sur la conception UX de l'assistant IA, avec pour enjeu de l'intégrer aux outils existants sans perturber le travail des conseillers. J'ai également contribué à définir les premiers principes d'interaction avec l'IA : sa place dans l'interface, son comportement pendant un appel et les moments où il devait s'effacer pour ne pas gêner le travail du conseiller.",
      },
    ],
    demarche: [
      { type: 'sous-titre', texte: "Rendre l'information accessible au bon moment" },
      {
        type: 'paragraphe',
        texte:
          "J'ai travaillé sur la manière de faire apparaître les informations issues de la documentation interne au moment où le conseiller en a besoin. L'enjeu était de limiter les recherches et les interruptions pendant l'appel, tout en laissant au conseiller la liberté d'utiliser ou non l'assistant.",
      },
      { type: 'sous-titre', texte: "Intégrer une assistance visible sans être intrusive" },
      {
        type: 'paragraphe',
        texte:
          "Les conseillers utilisent déjà plusieurs fonctionnalités au sein d'une même interface. J'ai étudié comment rendre l'assistant facilement accessible, tout en lui permettant de s'effacer lorsqu'il n'est pas nécessaire. L'objectif était de préserver la lisibilité de l'écran et de laisser le conseiller libre de ses actions.",
      },
      { type: 'sous-titre', texte: "Adapter la conception aux possibilités de l'IA" },
      {
        type: 'paragraphe',
        texte:
          "Le projet s'est construit par itérations, à mesure que les équipes exploraient les possibilités et les limites de l'IA. J'ai fait évoluer les propositions d'interface en fonction des tests et des retours recueillis, afin de trouver un équilibre entre l'assistance proposée et le contrôle laissé à l'utilisateur.",
      },
    ],
    resultat: [
      {
        type: 'liste',
        items: [
          "Le design de l'assistant a été validé et le POC mis en test auprès des conseillers.",
          "Le taux de satisfaction des conseillers atteignait 100 % lorsque les réponses de l'IA étaient pertinentes. La qualité de ces réponses restait toutefois un axe d'amélioration pour la suite des tests.",
          "Le projet a permis de définir les premiers principes d'expérience utilisateur pour l'intégration d'assistants IA dans les outils conseillers d'Orange.",
        ],
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
    dialogue: [ "Premier protocole de test avec de l’IA pour Alex. 😱 Spoiler : côté méthode, rien ne change vraiment. Il faut toujours observer et écouter les utilisateurs.",
                "Décevant pour les robots, rassurant pour les humains, n'est-ce pas ? 😉 "],
  },
  {
    id: 'Suivi-Commande',
    titre: 'Réunir le suivi des commandes dans une seule interface',
    categorie: 'web',
    client: 'Orange',
    annee: 2021,
    competences: [
      { label: 'UX Research', couleur: 'coral' },
      { label: 'Parcours utilisateur', couleur: 'coral' },
      { label: 'Design d\'interface', couleur: 'coral' },
    ],
    fonction: 'Product Designer',
    contexte: [
      {
        type: 'paragraphe',
        texte:
          "Lorsqu'un client contactait Orange au sujet d'une commande combinant forfait mobile et offre internet, le conseiller devait naviguer entre deux outils pour retrouver les informations nécessaires. Cela pouvait aussi compliquer le travail des autres services, notamment lorsqu'il fallait comprendre un incident de livraison ou traiter une réclamation.",
      },
      {
        type: 'paragraphe',
        texte:
          "La mission visait à créer un outil unique offrant une vision globale et détaillée de chaque commande, de la souscription jusqu'à la livraison, pour faciliter les réponses aux clients et la coordination en interne.",
      },
    ],
    monRole: [
      {
        type: 'paragraphe',
        texte:
          "J'ai travaillé sur la conception UX du nouvel outil, de la structuration des parcours à la hiérarchisation des informations. En lien avec les équipes métier et de développement, j'ai proposé une organisation des interfaces répondant aux besoins des différents services, tout en tenant compte des contraintes techniques du projet.",
      },
    ],
    demarche: [
      { type: 'sous-titre', texte: "Organiser l'information pour une lecture globale et détaillée" },
      {
        type: 'paragraphe',
        texte:
          "J'ai travaillé sur la hiérarchisation des informations pour permettre aux utilisateurs de visualiser rapidement l'état d'une commande, tout en accédant aux détails des différentes étapes lorsque nécessaire.",
      },
      {
        type: 'paragraphe',
        texte:
          "Un exemple, l’intégration d’une carte géographique permet de localiser les livraisons et les interventions techniques, grâce à des informations actualisées à intervalles réguliers.",
      },
      { type: 'sous-titre', texte: "Faciliter le travail entre les services" },
      {
        type: 'paragraphe',
        texte:
          "Au-delà des conseillers, l'outil devait permettre aux différents services de comprendre la situation d'une commande pour mieux coordonner leurs interventions.",
      },
      {
        type: 'paragraphe',
        texte:
          "Par exemple, lors du traitement d'une réclamation, le service technique peut consulter les informations liées à la livraison, identifier un retard causé par un incident du transporteur et avertir le client.",
      },
      { type: 'sous-titre', texte: "Composer avec les contraintes techniques existantes" },
      {
        type: 'paragraphe',
        texte:
          "Les outils historiques devaient rester opérationnels jusqu'à ce que le nouvel outil soit suffisamment testé et stabilisé pour les remplacer. J'ai travaillé avec les équipes de développement en m'appuyant notamment sur des solutions déjà utilisées dans d'autres projets Orange, pour concevoir une interface cohérente tout en respectant les contraintes de cette transition.",
      },
    ],
    resultat: [
      {
        type: 'liste',
        items: [
          "Unification du suivi des commandes de forfaits mobiles et d'offres internet dans un outil unique.",
          "Une consultation globale et détaillée des commandes, facilitant l'accès aux informations et la coordination entre services.",
          "Réutilisation de solutions existantes, contribuant à harmoniser les interfaces des différents outils métier d'Orange.",
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
    dialogue: [ "Alex marmonne « Des boîtes dans des boîtes… » et sort une maquette quasi finie en plein atelier. ",
                "J’ai ouvert un ticket pour activité suspecte. \n Réponse : « C’est juste du design. » Je refuse de clôturer ce ticket."],
  },
  {
    id: 'Eligibilite',
    titre: "Fiabiliser l'éligibilité aux offres grâce à une localisation plus précise",
    categorie: 'web',
    client: 'Orange',
    annee: 2024,
    competences: [
      { label: 'UX Design', couleur: 'coral' },
      { label: 'Agilité', couleur: 'coral' },
      { label: 'Prototypage', couleur: 'coral' },
    ],
    fonction: 'Product Designer',
    contexte: [
      {
        type: 'paragraphe',
        texte:
          "Pour déterminer les offres disponibles à une adresse, les conseillers d'Orange utilisent un outil de test d'éligibilité. Dans certaines situations, l'adresse seule ne permettait pas une localisation suffisamment précise, pouvant entraîner des erreurs sur les offres proposées.",
      },
      {
        type: 'paragraphe',
        texte:
          "L'objectif de la mission était d'améliorer la précision des tests d'éligibilité sans complexifier le travail des conseillers ni demander de manipulations contraignantes aux clients.",
      },
    ],
    monRole: [
      {
        type: 'paragraphe',
        texte:
          "J'ai travaillé sur la recherche d'une solution et la conception UX d'un nouveau parcours permettant d'obtenir une localisation plus précise.",
      },
      {
        type: 'paragraphe',
        texte:
          "Mon rôle consistait à imaginer une interaction simple entre le conseiller et le client, puis à l'intégrer dans l'outil métier existant, sans interrompre le processus de vérification d'éligibilité.",
      },
    ],
    demarche: [
      { type: 'sous-titre', texte: "Exploiter le téléphone du client pour préciser sa localisation" },
      {
        type: 'paragraphe',
        texte:
          "La phase d'idéation a conduit à une solution : permettre au conseiller d'envoyer un SMS contenant un lien, grâce auquel le client peut transmettre sa position GPS directement depuis son téléphone. Cette approche permet d'obtenir une localisation plus précise sans multiplier les questions ou les échanges avec le conseiller.",
      },
      { type: 'sous-titre', texte: "Concevoir un parcours simple des deux côtés" },
      {
        type: 'paragraphe',
        texte:
          "J'ai travaillé sur la réduction des étapes nécessaires pour déclencher et effectuer la géolocalisation. Le conseiller devait pouvoir envoyer la demande en une ou deux étapes, tandis que le client devait comprendre immédiatement comment partager sa position, sans manipulation complexe.",
      },
      { type: 'sous-titre', texte: "Intégrer la géolocalisation au parcours existant" },
      {
        type: 'paragraphe',
        texte:
          "J'ai conçu le parcours pour que la position transmise par le client soit directement récupérée dans l'outil d'éligibilité. L'enjeu était de permettre au conseiller de poursuivre son travail sans changer d'interface ni engager de procédure supplémentaire.",
      },
    ],
    resultat: [
      {
        type: 'liste',
        items: [
          "Une demande de géolocalisation rapide à déclencher pour le conseiller, avec un partage de position en un clic côté client.",
          "Une localisation récupérée en quelques secondes et directement intégrée au test d'éligibilité.",
          "Une réduction des erreurs liées à l'imprécision des adresses, tout en conservant un parcours simple pour le conseiller et le client.",
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
    dialogue: ["Parfois, la solution est à portée de main... Littéralement.","Alex a conçu le parcours en deux semaines au lieu de deux mois. Speedy Gonz'Alex. ⚡⚡"],
  },
  {
    id: 'Design-system',
    titre: 'Faire évoluer le design system pour les outils métier',
    categorie: 'web',
    client: 'Orange',
    annee: 2021,
    competences: [
      { label: 'UI Design', couleur: 'coral' },
      { label: 'Documentation', couleur: 'coral' },
      { label: 'Gouvernance', couleur: 'coral' },
    ],
    fonction: 'Product Designer',
    contexte: [
      {
        type: 'paragraphe',
        texte:
          "Le design system d'Orange était principalement conçu pour les interfaces grand public. Les outils utilisés par les conseillers répondaient à d'autres contraintes : davantage d'informations à afficher, des écrans plus denses et des besoins spécifiques aux activités métier.",
      },
      {
        type: 'paragraphe',
        texte:
          "Le but de la mission était de créer un fork du design system existant et l'adapter aux outils métier tout en conservant une cohérence avec l'expérience Orange globale.",
      },
    ],
    monRole: [
      {
        type: 'paragraphe',
        texte:
          "J'ai posé les bases du design system métier en adaptant les composants fondamentaux, en créant leur documentation et en réalisant des tests de non-régression. J'ai ensuite contribué à son enrichissement, en échangeant avec les équipes projet et celle du design system grand public pour identifier les besoins et faire évoluer la bibliothèque de composants.",
      },
    ],
    demarche: [
      { type: 'sous-titre', texte: "Adapter les composants aux contraintes des outils métier" },
      {
        type: 'paragraphe',
        texte:
          "J'ai retravaillé les espacements, les tailles typographiques et certains comportements des composants pour répondre aux besoins d'interfaces plus denses, sans compromettre leur lisibilité. Chaque modification devait être pensée à l'échelle du système pour préserver la cohérence des composants et leur fonctionnement dans les différents outils.",
      },
      { type: 'sous-titre', texte: "Enrichir la bibliothèque à partir des usages réels" },
      {
        type: 'paragraphe',
        texte:
          "Les échanges avec les équipes projet ont permis d'identifier de nouveaux besoins et de concevoir des composants adaptés aux usages métier. Par exemple, l'ajout d'un sélecteur de dates (date picker) a permis de proposer une alternative aux champs de saisie classiques. D'autres composants, comme certains sliders, répondaient à des besoins plus spécifiques aux outils métier.",
      },
      { type: 'sous-titre', texte: "Faire évoluer les composants entre les deux design systems" },
      {
        type: 'paragraphe',
        texte:
          "J'ai travaillé avec l'équipe du design system grand public pour évaluer la pertinence des nouveaux composants au-delà des outils métier. Certains, comme le date picker, ont ainsi été intégrés au système grand public. Cette collaboration a contribué à faire évoluer les pratiques vers une conception des nouveaux composants prenant en compte dès le départ leurs déclinaisons grand public et métier.",
      },
    ],
    resultat: [
      {
        type: 'liste',
        items: [
          "Création d'un design system métier documenté, ensuite repris pour les outils métier d'Orange à l'international.",
          "Enrichissement des bibliothèques de composants métier et grand public, avec davantage de possibilités pour concevoir de futures interfaces.",
          "Évolution des pratiques de conception, avec des composants désormais pensés dans leurs déclinaisons grand public et métier dès leur création.",
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
    dialogue: [ "Avec ce projet, Alex a posé les bases du design system métier d’Orange. Quelques composants se sont ensuite invités côté grand public.", 
                "Et le système ? Carrément repris à l’international ! \n Ses pixels voyagent plus que lui. 😂😂 "],
  },
];
