import { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ProjectsPage, CvPage, ContactPage, preloadPagesSecondaires } from './routes/lazyPages';

function ChargementPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream-100">
      <div className="h-3 w-40 overflow-hidden rounded-pill bg-cream-300">
        <div className="h-full w-1/2 animate-pulse rounded-pill bg-coral-500" />
      </div>
    </div>
  );
}

/**
 * HomePage est toujours montée, en dessous des autres routes : naviguer vers
 * Projets/CV/Contact puis revenir sur "/" ne recrée jamais son état (scène
 * 3D, page tampon…), seule sa visibilité CSS change selon la route active.
 */
function AppContent() {
  const location = useLocation();
  const surAccueil = location.pathname === '/';

  // Préchauffe les chunks JS de Projets/CV/Contact pendant que l'utilisateur
  // est sur la page tampon : la navigation ultérieure ne montre alors plus
  // jamais le fallback Suspense (le module est déjà en cache).
  useEffect(() => {
    const id = setTimeout(preloadPagesSecondaires, 400);
    return () => clearTimeout(id);
  }, []);

  return (
    <>
      <HomePage visible={surAccueil} />
      {!surAccueil && (
        <Suspense fallback={<ChargementPage />}>
          <Routes>
            <Route path="/projets" element={<ProjectsPage />} />
            <Route path="/cv" element={<CvPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
