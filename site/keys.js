/**
 * Atalhos no sistema de quem lê: ⌘ no Mac, Ctrl no Windows e no Linux (o mesmo critério do shell e da busca).
 * Use em todo texto do site que ensina uma tecla: combo('K') → “⌘K” ou “Ctrl K”.
 */
export const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);
export const MOD = isMac ? '⌘' : 'Ctrl';
export const combo = (key) => (isMac ? `⌘${key}` : `Ctrl ${key}`);
