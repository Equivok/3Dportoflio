/**
 * Configuration centrale de la scène Spline.
 *
 * Auto-hébergement recommandé : place le fichier exporté (.splinecode) dans
 * `/public/spline/scene.splinecode` puis remplace SPLINE_SCENE_URL par
 * "/spline/scene.splinecode". Cela évite les soucis de CORS et permet de
 * contrôler le cache HTTP (voir vercel.json / netlify headers si besoin).
 *
 * En attendant l'auto-hébergement, on utilise l'URL fournie par l'export
 * Spline (prod.spline.design). À remplacer dès que le fichier est copié
 * dans /public.
 */
// Étape suivante : copier le fichier .splinecode exporté dans
// `/public/spline/scene.splinecode`, puis remplacer la ligne ci-dessous par :
//   export const SPLINE_SCENE_URL = '/spline/scene.splinecode';
export const SPLINE_SCENE_URL =
  'https://prod.spline.design/3nyVCTSnHG8Hr80N/scene.splinecode';

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
