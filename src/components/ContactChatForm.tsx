import { useState } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface Champs {
  nom: string;
  email: string;
  message: string;
}

type Erreurs = Partial<Champs>;

function validerEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Formulaire de contact intégré dans une conversation façon messagerie :
 * chaque champ apparaît comme une bulle envoyée par l'utilisateur au fur et
 * à mesure. Validation client simple (champs requis + format e-mail).
 */
export function ContactChatForm() {
  const [champs, setChamps] = useState<Champs>({ nom: '', email: '', message: '' });
  const [erreurs, setErreurs] = useState<Erreurs>({});
  const [envoye, setEnvoye] = useState(false);

  const majChamp = (cle: keyof Champs, valeur: string) => {
    setChamps((c) => ({ ...c, [cle]: valeur }));
    setErreurs((e) => ({ ...e, [cle]: undefined }));
  };

  const soumettre = (e: React.FormEvent) => {
    e.preventDefault();
    const nouvellesErreurs: Erreurs = {};
    if (!champs.nom.trim()) nouvellesErreurs.nom = 'Dis-moi ton nom !';
    if (!champs.email.trim() || !validerEmail(champs.email)) {
      nouvellesErreurs.email = 'Une adresse e-mail valide, stp.';
    }
    if (!champs.message.trim()) nouvellesErreurs.message = 'Un petit message serait sympa.';

    setErreurs(nouvellesErreurs);
    if (Object.keys(nouvellesErreurs).length === 0) {
      setEnvoye(true);
    }
  };

  if (envoye) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        role="status"
        className="ml-auto max-w-[80%] rounded-blob bg-turquoise-500 px-4 py-3 text-sm text-white shadow-pop"
      >
        Message envoyé 🎉 Merci {champs.nom}, je réponds vite !
      </motion.div>
    );
  }

  return (
    <form onSubmit={soumettre} className="flex flex-col gap-3" noValidate>
      <BulleChamp
        id="nom"
        label="Ton nom"
        valeur={champs.nom}
        onChange={(v) => majChamp('nom', v)}
        erreur={erreurs.nom}
      />
      <BulleChamp
        id="email"
        type="email"
        label="Ton e-mail"
        valeur={champs.email}
        onChange={(v) => majChamp('email', v)}
        erreur={erreurs.email}
      />
      <BulleChamp
        id="message"
        label="Ton message"
        multiline
        valeur={champs.message}
        onChange={(v) => majChamp('message', v)}
        erreur={erreurs.message}
      />
      <button
        type="submit"
        className="ml-auto rounded-pill bg-coral-500 px-5 py-2.5 font-menu text-sm text-white shadow-pop transition-transform hover:-translate-y-0.5"
      >
        Envoyer 🚀
      </button>
    </form>
  );
}

interface BulleChampProps {
  id: string;
  label: string;
  valeur: string;
  onChange: (v: string) => void;
  erreur?: string;
  type?: string;
  multiline?: boolean;
}

function BulleChamp({ id, label, valeur, onChange, erreur, type = 'text', multiline }: BulleChampProps) {
  return (
    <div className="ml-auto w-full max-w-[85%]">
      <label htmlFor={id} className="mb-1 block text-right text-xs font-menu text-ink-500">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          value={valeur}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          aria-invalid={!!erreur}
          aria-describedby={erreur ? `${id}-erreur` : undefined}
          className={clsx(
            'w-full resize-none rounded-blob bg-coral-100 px-4 py-3 text-sm text-ink-900 outline-none ring-2 ring-transparent focus:ring-coral-400',
            erreur && 'ring-2 ring-red-400',
          )}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={valeur}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!erreur}
          aria-describedby={erreur ? `${id}-erreur` : undefined}
          className={clsx(
            'w-full rounded-pill bg-coral-100 px-4 py-2.5 text-sm text-ink-900 outline-none ring-2 ring-transparent focus:ring-coral-400',
            erreur && 'ring-2 ring-red-400',
          )}
        />
      )}
      {erreur && (
        <p id={`${id}-erreur`} role="alert" className="mt-1 text-right text-xs text-red-600">
          {erreur}
        </p>
      )}
    </div>
  );
}
