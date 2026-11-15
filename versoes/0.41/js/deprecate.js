/**
 * Avisos de nomes antigos da API (interno). Cada aviso aparece uma vez por página.
 * Os nomes antigos continuam funcionando até a 1.0, quando saem.
 */
import { msg } from './i18n.js';

const warned = new Set();

const warn = (key, ...args) => {
  const id = `${key}:${args.join('|')}`;
  if (warned.has(id)) return;
  warned.add(id);
  console.warn(msg(key, ...args));
};

/** Avisa que `old` foi trocado por `next`. */
export const renamed = (old, next) => warn('api.renamed', old, next);

/** Avisa que a função `name` vira propriedade na 1.0. */
export const becomesProperty = (name) => warn('api.becomesProperty', name);

/** Embrulha uma função com o aviso de nome antigo. */
export const alias = (fn, old, next) => (...args) => {
  renamed(old, next);
  return fn(...args);
};
