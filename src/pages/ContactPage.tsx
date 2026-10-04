import { useMemo, useState } from 'react';
import { Header } from '../components/Header';
import { DialogueBox } from '../components/DialogueBox';
import { SidebarMenu, type SidebarCategory } from '../components/SidebarMenu';
import { ThreeZoneLayout } from '../components/ThreeZoneLayout';
import { ContactChatForm } from '../components/ContactChatForm';
import { contactLinks } from '../data/contactLinks';
import { dialogues } from '../data/dialogues';

export function ContactPage() {
  const [selectedId, setSelectedId] = useState<string>('message');

  const categories: SidebarCategory[] = useMemo(
    () => [
      {
        id: 'contacts',
        label: 'Contacts épinglés',
        items: [
          { id: 'message', label: '💬 Nouveau message' },
          ...contactLinks.map((c) => ({ id: c.id, label: `${c.icone} ${c.label}` })),
        ],
      },
    ],
    [],
  );

  const lienExterne = contactLinks.find((c) => c.id === selectedId);

  const selectionner = (id: string) => {
    setSelectedId(id);
    const lien = contactLinks.find((c) => c.id === id);
    if (lien) window.open(lien.url, '_blank', 'noreferrer');
  };

  return (
    <div className="min-h-screen bg-cream-100">
      <Header />
      <ThreeZoneLayout
        gauche={
          <SidebarMenu
            ariaLabel="Contacts"
            categories={categories}
            selectedId={selectedId}
            onSelect={selectionner}
          />
        }
        centre={
          <div className="flex h-full flex-col rounded-blob bg-cream-50 p-6 shadow-soft">
            <h2 className="text-center font-menu text-xl text-ink-900">Message</h2>
            <hr className="my-4 border-cream-300" />
            <div className="scrollbar-fine flex-1 overflow-y-auto pr-1">
              <div className="mb-4 max-w-[85%] rounded-blob bg-cream-200 px-4 py-3 text-sm text-ink-700">
                Salut ! Écris-moi ci-dessous, je réponds toujours 😊
              </div>
              <ContactChatForm />
              {lienExterne && (
                <p className="mt-4 text-xs text-ink-500">
                  Lien ouvert dans un nouvel onglet : {lienExterne.valeur}
                </p>
              )}
            </div>
          </div>
        }
        droite={
          <div className="flex h-full items-center justify-center">
            <div
              aria-hidden="true"
              className="flex h-72 w-40 flex-col items-center justify-center gap-3 rounded-[2.5rem] bg-ink-900 p-4 shadow-soft"
            >
              <div className="h-full w-full rounded-3xl bg-gradient-to-b from-coral-300 to-turquoise-300" />
            </div>
          </div>
        }
      />
      <DialogueBox flowId="contact" repliques={dialogues.contact} />
    </div>
  );
}
