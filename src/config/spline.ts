/**
 * Configuration centrale de la scène Spline.
 *
 * Auto-hébergée : le fichier exporté (.splinecode) est servi directement
 * depuis `/public/spline/scene.splinecode` (donc `dist/spline/scene.splinecode`
 * après build). Cela évite la latence réseau vers prod.spline.design
 * (résolution DNS/TLS cross-origin, plus pénalisante sur Firefox à cause de
 * son cloisonnement réseau plus strict) et permet de contrôler le cache HTTP
 * via vercel.json si besoin.
 */
export const SPLINE_SCENE_URL = '/spline/scene.splinecode';

/**
 * Noms des objets cliquables dans la scène Spline.
 * Ces noms doivent correspondre EXACTEMENT aux noms des objets (ou groupes)
 * renommés dans l'éditeur Spline.
 *
 * Pour un appareil composé de plusieurs meshes (ex. le Mac = écran + clavier
 * + base), regrouper les meshes dans un groupe/objet parent nommé ci-dessous :
 * un clic sur n'importe quel enfant remonte l'événement jusqu'au groupe via
 * `findParentObjectByName` (voir src/hooks/useSplineInteractions.ts).
 */
export const SPLINE_OBJECTS = {
  cv: 'Mac',
  projets: 'Projets',
  contact: 'Contact',
} as const;

export type SplineObjectKey = keyof typeof SPLINE_OBJECTS;
export type SplineObjectName = (typeof SPLINE_OBJECTS)[SplineObjectKey];

/** Associe chaque objet cliquable à sa route de destination. */
export const SPLINE_OBJECT_ROUTES: Record<SplineObjectName, string> = {
  [SPLINE_OBJECTS.cv]: '/cv',
  [SPLINE_OBJECTS.projets]: '/projets',
  [SPLINE_OBJECTS.contact]: '/contact',
};
