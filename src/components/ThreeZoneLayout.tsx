import type { ReactNode } from 'react';

interface ThreeZoneLayoutProps {
  /** Zone gauche ~26% : menu latéral */
  gauche: ReactNode;
  /** Zone centre : panneau clair de contenu. S'élargit si "droite" est absente. */
  centre: ReactNode;
  /** Zone droite ~reste : visuel sans cadre, déborde librement. Optionnelle. */
  droite?: ReactNode;
}

/**
 * Layout à trois zones partagé par les pages Projets, CV et Contact,
 * inspiré de la disposition d'un menu "codex" (référence Projets.jpg) mais
 * avec l'esthétique arrondie et joyeuse du reste du site.
 *
 * Desktop : trois colonnes ~26% / 30% / reste, avec des espaces entre elles.
 * Si `droite` n'est pas fourni (ex. page Projets), la colonne centre occupe
 * tout l'espace restant à la place.
 * Mobile : colonne unique — menu (liste/puces), contenu, puis visuel réduit.
 */
export function ThreeZoneLayout({ gauche, centre, droite }: ThreeZoneLayoutProps) {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 pb-10 pt-24 sm:px-6 lg:flex-row lg:gap-8 lg:pt-32">
      <aside className="w-full lg:w-[30%]" style={{ minHeight: 0 }}>
        {gauche}
      </aside>
      <section
        className={`w-full ${droite ? 'lg:w-[30%]' : 'lg:flex-1'}`}
        aria-label="Contenu détaillé"
      >
        {centre}
      </section>
      {droite && (
        <div className="relative w-full flex-1 lg:w-auto" aria-hidden="false">
          {droite}
        </div>
      )}
    </div>
  );
}
