import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const LIENS = [
  { to: '/projets', label: 'Projets' },
  { to: '/cv', label: 'CV' },
  { to: '/contact', label: 'Contact' },
];

/**
 * Menu principal, centré, superposé à la scène. Style "menu de jeu vidéo" :
 * pilule très arrondie, relief léger, lien actif rempli de la couleur d'accent.
 */
export function Header() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-0 sm:top-6 sm:px-4">
      <nav
        aria-label="Navigation principale"
        className="pointer-events-auto flex w-full items-center gap-1 rounded-none bg-cream-50/90 px-2 py-4 shadow-soft backdrop-blur-sm ring-1 ring-ink-900/5 sm:w-auto sm:gap-2 sm:rounded-pill sm:p-2"
      >
        <ul className="flex flex-1 items-center justify-around gap-1 sm:w-auto sm:flex-none sm:justify-start">
          <li>
            <NavLink
              to="/"
              end
              aria-label="Retour à l'accueil"
              className="relative shrink-0 rounded-pill px-3 py-2 font-menu text-base transition-colors sm:text-base"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="pilule-active"
                      className="absolute inset-0 -z-10 rounded-pill bg-coral-500 shadow-pop"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className={isActive ? 'text-white' : 'text-coral-600'}>A</span>
                  <span className={isActive ? 'text-white' : 'text-ink-900'}>GRANDJEAN</span>
                </>
              )}
            </NavLink>
          </li>
          {LIENS.map((lien) => (
            <li key={lien.to} className="sm:flex-none">
              <NavLink
                to={lien.to}
                end={lien.to === '/'}
                className={({ isActive }) =>
                  [
                    'relative block rounded-pill px-2 py-2 text-center font-menu uppercase tracking-wide transition-colors sm:px-4 text-base',
                    isActive
                      ? 'text-white'
                      : 'text-ink-700 hover:bg-cream-200 hover:text-coral-600',
                  ].join(' ')
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="pilule-active"
                        className="absolute inset-0 -z-10 rounded-pill bg-coral-500 shadow-pop"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    {lien.label}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
