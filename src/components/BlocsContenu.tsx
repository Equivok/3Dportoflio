import type { BlocContenu } from '../types';

/**
 * Rendu partagé d'un tableau de blocs de contenu (paragraphes, sous-titres,
 * listes à puces), utilisé par la page Projets (Contexte, Mon rôle…) et la
 * page CV (résumé de chaque expérience). Le formatage se choisit donc de la
 * même façon partout, directement dans les données (voir `BlocContenu`
 * dans src/types).
 */
export function BlocsContenu({ blocs, className = '' }: { blocs: BlocContenu[]; className?: string }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {blocs.map((bloc, i) => (
        <BlocRendu key={i} bloc={bloc} />
      ))}
    </div>
  );
}

/** Rendu d'un bloc de contenu unique, selon son type (voir `BlocContenu`). */
function BlocRendu({ bloc }: { bloc: BlocContenu }) {
  switch (bloc.type) {
    case 'sous-titre':
      return <h4 className="mt-2 text-base font-bold">{bloc.texte}</h4>;
    case 'liste':
      return (
        <ul className="flex flex-col gap-2">
          {bloc.items.map((item, i) => (
            <li key={i} className="flex gap-2 text-base leading-relaxed text-ink-700">
              <span aria-hidden="true" className="text-coral-500">
                ●
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'paragraphe':
    default:
      return <p className="text-base leading-relaxed text-ink-700">{bloc.texte}</p>;
  }
}
