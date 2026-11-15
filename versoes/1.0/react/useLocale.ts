import { useSyncExternalStore } from 'react';
import { locale } from '../js/i18n.js';

function subscribe(onChange: () => void) {
  const root = document.documentElement;
  root.addEventListener('ds:localechange', onChange);
  return () => root.removeEventListener('ds:localechange', onChange);
}

/**
 * O idioma atual do Lume ('pt-BR', 'en' ou 'es'). O componente que usa redesenha quando o idioma muda
 * (setLocale, do lume.js). Os componentes daqui já usam: os textos deles (Fechar, Carregando) acompanham sozinhos.
 */
export function useLocale(): string {
  return useSyncExternalStore(subscribe, locale, () => 'pt-BR');
}
