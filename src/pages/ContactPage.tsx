import { Header } from '../components/Header';
import { DialogueBox } from '../components/DialogueBox';
import { PageBackdrop } from '../components/PageBackdrop';
import { PAGE_BACKGROUND_IMAGE } from '../config/background';
import { contactLinks } from '../data/contactLinks';
import { dialogues } from '../data/dialogues';

const LIEN_LINKEDIN = contactLinks.find((c) => c.id === 'linkedin')!;

/**
 * Page Contact : même structure en grille que la page CV — bloc à gauche
 * (fond blanc, coins arrondis, ombre) invitant à contacter via LinkedIn, et
 * visuel à droite (animé en flottement), qui passe au-dessus en 1 colonne
 * sur mobile/tablette (< lg) et reprend sa place à droite dès lg.
 */
export function ContactPage() {
  return (
    <div className="min-h-screen">
      <PageBackdrop fond={PAGE_BACKGROUND_IMAGE} />
      <Header />

      <div className="mx-auto flex w-full flex-1 items-center px-4 pb-4 pt-24 sm:px-6 lg:pt-30">
        <div className="grid h-full w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/* Gauche : invitation à contacter via LinkedIn, même apparence
              que le bloc "Télécharger le CV" de la page CV. */}
          <div className="order-2 flex flex-col items-center gap-6 rounded-20 bg-white p-6 text-center shadow-soft sm:p-10 lg:order-1">
            <span aria-hidden="true" className="text-5xl">
              👋
            </span>
            <div>
              <h2 className="font-menu text-2xl text-ink-900">Discutons sur LinkedIn !</h2>
              <p className="mt-3 text-base leading-relaxed text-ink-700">
                Une idée de projet, une opportunité, ou juste envie de dire bonjour ? Le plus
                simple pour me joindre, c'est de m'envoyer un message directement sur LinkedIn —
                je réponds toujours avec plaisir !
              </p>
            </div>
            <a
              href={LIEN_LINKEDIN.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-pill bg-coral-500 px-6 py-3 font-menu text-base text-white shadow-pop transition-colors hover:bg-coral-600"
            >
              <span aria-hidden="true">{LIEN_LINKEDIN.icone}</span>
              <span>M'envoyer un message sur LinkedIn</span>
            </a>
          </div>

          {/* Droite : visuel (avatar), animé en flottement, comme le radar
              de la page CV. Sur mobile (1 colonne), passe au-dessus du bloc
              de gauche ; dès lg, reprend sa place à droite en pleine taille. */}
          <div className="relative order-1 mx-auto flex w-full max-w-[12rem] items-center justify-center sm:max-w-xs lg:order-2 lg:h-full lg:max-w-none lg:p-10">
            <img
              src="/images/Avatar/neutre.png"
              alt=""
              aria-hidden="true"
              className="w-full object-contain drop-shadow-xl floating"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <DialogueBox flowId="contact" repliques={dialogues.contact} />
    </div>
  );
}
