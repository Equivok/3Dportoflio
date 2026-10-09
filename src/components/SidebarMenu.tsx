import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

// Même seuil que le breakpoint Tailwind "lg" utilisé ailleurs dans l'app
// (ex. CvTimeline/SidebarMenu "mobile" sur la page CV, affiché jusqu'à
// 1024px) pour rester cohérent.
const MOBILE_BREAKPOINT_QUERY = '(max-width: 1023px)';

/** true en dessous du breakpoint "lg" (mobile/tablette), recalculé au redimensionnement. */
function useEstMobile(): boolean {
  const [estMobile, setEstMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(MOBILE_BREAKPOINT_QUERY).matches,
  );

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_BREAKPOINT_QUERY);
    const handler = (e: MediaQueryListEvent) => setEstMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return estMobile;
}

export interface SidebarItem {
  id: string;
  label: string;
  nouveau?: boolean;
}

export interface SidebarCategory {
  id: string;
  label: string;
  items: SidebarItem[];
  banniere?: string;
}

interface SidebarMenuProps {
  categories: SidebarCategory[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  isConsulted?: (id: string) => boolean;
  ariaLabel: string;
}

/**
 * Menu latéral générique : catégories repliables (chevron + compteur) et
 * lignes d'items. Navigation clavier ↑/↓ + Entrée, ligne sélectionnée
 * remplie de la couleur d'accent, ligne survolée avec contour d'accent.
 * Réutilisé par les pages Projets, CV et Contact.
 */
export function SidebarMenu({
  categories,
  selectedId,
  onSelect,
  isConsulted,
  ariaLabel,
}: SidebarMenuProps) {
  const [ouvertes, setOuvertes] = useState<Set<string>>(
    () => new Set(categories.map((c) => c.id)),
  );
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});
  const estMobile = useEstMobile();

  const idsVisibles = useMemo(
    () => categories.filter((c) => ouvertes.has(c.id)).flatMap((c) => c.items.map((i) => i.id)),
    [categories, ouvertes],
  );

  const toggleCategorie = (id: string) => {
    setOuvertes((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Sur mobile uniquement : sélectionner un item referme sa catégorie, pour
  // libérer de la place une fois le choix fait. Comportement inchangé sur
  // desktop (les catégories restent ouvertes après sélection).
  const selectionner = (id: string) => {
    onSelect(id);
    if (!estMobile) return;
    const categorie = categories.find((c) => c.items.some((i) => i.id === id));
    if (!categorie) return;
    setOuvertes((prev) => {
      const next = new Set(prev);
      next.delete(categorie.id);
      return next;
    });
  };

  const gererClavier = (e: React.KeyboardEvent, id: string) => {
    const idx = idsVisibles.indexOf(id);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const suivant = idsVisibles[(idx + 1) % idsVisibles.length];
      refs.current[suivant]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const precedent = idsVisibles[(idx - 1 + idsVisibles.length) % idsVisibles.length];
      refs.current[precedent]?.focus();
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      selectionner(id);
    }
  };

  return (
    <nav aria-label={ariaLabel} className="flex shadow-soft flex-col gap-3 overflow-y-auto scrollbar-fine rounded-20">
      {categories.map((categorie) => (
        <SidebarCategoryBlock
          key={categorie.id}
          categorie={categorie}
          estOuverte={ouvertes.has(categorie.id)}
          onToggle={() => toggleCategorie(categorie.id)}
          selectedId={selectedId}
          onSelect={selectionner}
          onKeyDownItem={gererClavier}
          setRef={(id, el) => {
            refs.current[id] = el;
          }}
          isConsulted={isConsulted}
        />
      ))}
    </nav>
  );
}

interface SidebarCategoryBlockProps {
  categorie: SidebarCategory;
  estOuverte: boolean;
  onToggle: () => void;
  selectedId: string | null;
  onSelect: (id: string) => void;
  onKeyDownItem: (e: React.KeyboardEvent, id: string) => void;
  setRef: (id: string, el: HTMLButtonElement | null) => void;
  isConsulted?: (id: string) => boolean;
}

function SidebarCategoryBlock({
  categorie,
  estOuverte,
  onToggle,
  selectedId,
  onSelect,
  onKeyDownItem,
  setRef,
  isConsulted,
}: SidebarCategoryBlockProps) {
  return (
    <div className="rounded-20 bg-white sidebarCategory">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={estOuverte}
        className="flex w-full items-center justify-between gap-2 p-5 text-left text-base"
        style={
          categorie.banniere
            ? {
                backgroundImage: `linear-gradient(rgba(27,20,20,0.35), rgba(27,20,20,0.35)), url(${categorie.banniere})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : undefined
        }
      >
        <span className={clsx('font-menu text-xl', categorie.banniere ? 'text-white' : 'text-ink-900')}>
          {categorie.label}
        </span>
        <span className="flex items-center gap-2">
          <motion.span
            animate={{ rotate: estOuverte ? 0 : -90 }}
            className={categorie.banniere ? 'text-white' : 'text-coral-500'}
            aria-hidden="true"
          >
            ▾
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {estOuverte && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden p-4 flex flex-col gap-2 border-t border-grey"
          >
            {categorie.items.map((item) => {
              const selectionne = item.id === selectedId;
              const nonConsulte = item.nouveau && isConsulted && !isConsulted(item.id);
              return (
                <li key={item.id}>
                  <button
                    ref={(el) => setRef(item.id, el)}
                    type="button"
                    onClick={() => onSelect(item.id)}
                    onKeyDown={(e) => onKeyDownItem(e, item.id)}
                    aria-current={selectionne ? 'true' : undefined}
                    className={clsx(
                      'group flex w-full items-center justify-between gap-2 rounded-20 px-3 py-2 text-left font-body text-base transition-colors',
                      selectionne
                        ? 'text-white bg-dark'
                        : 'text-ink-700 bg-white',
                    )}
                  >
                    <span>{item.label}</span>
                    {nonConsulte && (
                      <span
                        aria-label="Nouveau"
                        title="Nouveau"
                        className="h-2.5 w-2.5 rotate-45 bg-turquoise-500"
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
