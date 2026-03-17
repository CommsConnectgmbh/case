import { create } from 'zustand';

type Language = 'de' | 'en' | 'fr' | 'es' | 'it';

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: 'de',
  setLanguage: (language) => set({ language }),
}));
