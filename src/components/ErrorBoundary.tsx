import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Isole la scène 3D (ou tout autre composant instable) : en cas d'échec de
 * chargement ou de rendu, affiche un fallback plutôt que de faire crasher
 * toute l'application.
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ErrorBoundary] Erreur capturée :', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div
            role="alert"
            className="flex h-full min-h-[320px] w-full flex-col items-center justify-center gap-3 rounded-blob bg-cream-200 p-8 text-center"
          >
            <p className="font-menu text-lg text-ink-700">
              Oups, la scène 3D n'a pas pu s'afficher 😅
            </p>
            <p className="text-sm text-ink-500">
              Essaie de rafraîchir la page, ou utilise les liens du menu ci-dessus.
            </p>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
