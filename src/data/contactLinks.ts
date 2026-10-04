export interface ContactLink {
  id: string;
  label: string;
  valeur: string;
  url: string;
  icone: string;
}

/** Liens affichés comme des "contacts épinglés" dans le menu gauche de la page Contact. */
export const contactLinks: ContactLink[] = [
  {
    id: 'email',
    label: 'E-mail',
    valeur: 'alexandre.grandjean@example.com',
    url: 'mailto:alexandre.grandjean@example.com',
    icone: '✉️',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    valeur: '/in/alexandre-grandjean',
    url: 'https://www.linkedin.com/in/alexandre-grandjean',
    icone: '💼',
  },
  {
    id: 'behance',
    label: 'Behance',
    valeur: '/alexandregrandjean',
    url: 'https://www.behance.net/alexandregrandjean',
    icone: '🎨',
  },
];
