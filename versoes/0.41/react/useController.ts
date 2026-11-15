import { useId, useRef } from 'react';

/** Guarda sempre a versão mais nova de um valor (callbacks), sem refazer efeitos quando ele muda. */
export function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}

/** Compara listas e objetos simples pelo conteúdo, para usar como dependência de efeito. */
export const stableKey = (value: unknown) => JSON.stringify(value, (_k, v) => (v instanceof Date ? v.toISOString() : v));

/** Tira as chaves undefined: os módulos do Lume usam { padrão, ...opções }, e um undefined apagaria o padrão. */
export const defined = <T extends object>(options: T): T =>
  Object.fromEntries(Object.entries(options).filter(([, v]) => v !== undefined)) as T;

/** useId sem os caracteres especiais do React («r1», :r1:), para o id servir em seletores CSS e em getElementById. */
export function useSafeId(prefix = 'ds'): string {
  return `${prefix}-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
}
