# AGRANDJEAN — Portfolio

Portfolio interactif d'Alexandre Grandjean, product designer web & application.
Scène 3D interactive (Spline), boîte de dialogue façon visual novel, pages
Projets / CV / Contact en mise en page "codex" à trois zones.

## Stack

- React + Vite + TypeScript
- React Router
- `@splinetool/react-spline` + `@splinetool/runtime` (scène 3D, lazy-loadée)
- Framer Motion (animations d'interface)
- Tailwind CSS v4 (design tokens dans `src/index.css` via `@theme`)
- Recharts (graphique radar de compétences)
- Polices auto-hébergées via `@fontsource` (Modak, Concert One, Plus Jakarta Sans)

## Démarrer

```bash
npm install
npm run dev       # serveur de dev
npm run build     # build de production (dist/)
npm run preview   # prévisualiser le build
```

## Brancher la scène Spline

1. Dans l'éditeur Spline, renomme les objets cliquables : `Mac`, `Ecran`,
   `Telephone` (voir `src/config/spline.ts` — `SPLINE_OBJECTS`).
2. Pour un appareil composé de plusieurs meshes, ajoute l'événement
   **Mouse Down** directement sur l'objet **groupe** dans Spline (pas sur
   chaque mesh enfant) : l'événement remonte alors avec le nom du groupe.
3. Exporte en "Code → React", récupère le fichier `.splinecode`.
4. Auto-hébergement recommandé : place le fichier dans
   `public/spline/scene.splinecode`, puis dans `src/config/spline.ts` :
   ```ts
   export const SPLINE_SCENE_URL = '/spline/scene.splinecode';
   ```
   (évite les soucis de CORS et permet de contrôler le cache HTTP).

## Ajouter un projet

Éditer `src/data/projects.ts` et ajouter un objet au tableau `projects` :

```ts
{
  id: 'mon-projet',
  titre: 'Mon Projet',
  categorie: 'web', // ou 'application'
  client: 'Client X',
  annee: 2025,
  description: '...',
  fonction: 'Product Designer',
  contexte: 'Origine du projet, enjeux, contraintes…',
  monRole: 'Détail de ton rôle et de tes responsabilités sur ce projet…',
  demarche: 'Méthodologie suivie : recherche, ateliers, itérations…',
  resultat: 'Résultat obtenu : chiffres, impact, retours…',
  image: '/images/projects/mon-projet.webp',
  fond: '/images/projects/mon-projet-fond.webp', // fond plein écran de la page Projets
  premierPlan: [
    {
      image: '/images/projects/mon-projet-ecran.webp',
      alt: 'Capture du projet',
      className: 'bottom-8 right-10 w-[38%] max-w-md', // positionnement libre en classes Tailwind
      profondeur: 24, // intensité de la parallaxe au mouvement de la souris (0 = fixe)
    },
  ],
  dialogue: ['Réplique de l’avatar sur ce projet'],
  nouveau: true, // affiche le losange "nouveau" dans le menu
}
```

Aucun composant à modifier : le menu latéral et le panneau se génèrent
automatiquement à partir de ce fichier.

## Ajouter une expérience ou une formation

Éditer `src/data/cv.ts` (tableaux `experiences` ou `formations`) :

```ts
{
  id: 'mon-experience',
  type: 'experience', // ou 'formation'
  fonction: 'Product Designer',
  annee: 2025,
  duree: '6 mois',
  client: 'Client X',
  lieu: 'Paris, France',
  resume: ['Bullet point 1', 'Bullet point 2'],
  competences: { 'UX Research': 70, 'UI Design': 85 }, // alimente le radar
}
```

## Fond et profondeur (page Projets)

La page Projets affiche un fond plein écran (`fond`) qui change en fondu
selon le projet sélectionné, avec des éléments en premier plan
(`premierPlan`) qui réagissent légèrement au mouvement de la souris
(parallaxe) pour donner une impression de profondeur. Tout se configure
directement dans `src/data/projects.ts` (voir `ProjectBackdrop.tsx` pour le
composant qui gère le fondu et la parallaxe).

## Conseils d'optimisation Spline (avant export)

- **Polygones** : simplifie les meshes décoratifs (plante, casque, manette,
  tasse) — ils n'ont pas besoin de détail élevé, ils sont vus de loin.
- **Textures** : compresse en WebP/Basis, limite la résolution à 1–2K max, et
  réutilise les mêmes textures/matériaux entre objets similaires.
- **Lumières** : privilégie 2-3 lumières maximum (une directionnelle + une ou
  deux d'appoint) plutôt que de multiplier les points lumineux.
- **Ombres** : limite les ombres portées aux objets réellement visibles
  (le bureau, les objets cliquables) et désactive-les sur les petits objets
  décoratifs en arrière-plan.
- Active la compression Draco/mesh si proposée à l'export, et vérifie le
  poids final du `.splinecode` (viser < 5-8 Mo pour un chargement fluide).

## Structure du projet

```
src/
  components/    Composants réutilisables (Header, SidebarMenu, DialogueBox…)
  config/        Configuration Spline, incrustation d'écran
  data/          Contenu éditable (projects.ts, cv.ts, dialogues.ts, contactLinks.ts)
  hooks/         useTypewriter, useDeviceProfile, useSplineInteractions…
  pages/         Une page par route, lazy-loadées via React Router
  types/         Types TypeScript partagés
public/
  spline/        Fichier .splinecode auto-hébergé (à ajouter)
  images/        Visuels des projets et de la scène (WebP/AVIF)
```
