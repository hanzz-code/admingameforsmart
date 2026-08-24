export const locales = [
  { name: 'Bahasa Indonesia 🇮🇩', locale: 'id' },
  { name: 'English 🇬🇧', locale: 'en' },
];

export const i18n = {
  defaultLanguage: 'id',
  locales,
  translations: {
    id: {
      search: 'Cari dokumentasi...',
      toc: 'Pada halaman ini',
      nextPage: 'Selanjutnya',
      previousPage: 'Sebelumnya',
      chooseLanguage: 'Pilih Bahasa',
    },
    en: {
      search: 'Search documentation...',
      toc: 'On this page',
      nextPage: 'Next',
      previousPage: 'Previous',
      chooseLanguage: 'Choose Language',
    },
  },
};
