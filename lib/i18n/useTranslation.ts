import { useLanguageStore } from './language-store';
import { translations } from './translations';

export function useTranslation() {
  const language = useLanguageStore((s) => s.language);
  return translations[language];
}
