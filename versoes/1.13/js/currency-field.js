/**
 * Campo de dinheiro — digita-se livre ("1290", "1.290,5") e, ao sair do campo, o valor volta formatado
 * no idioma atual, com o símbolo da moeda fixo no campo.
 *
 *   <div class="ds-field"><input class="ds-field__input" id="valor" name="valor" type="text"></div>
 *
 *   const valor = createCurrencyField(document.querySelector('#valor'), {
 *     currency: 'BRL',        // código ISO 4217 (padrão: BRL)
 *     value: 1290.5,          // número ou null
 *     min: 0, max: 100000,    // opcionais: ao sair do campo, o valor volta para dentro deles
 *     onChange: (value) => …, // quando o valor se firma (ao sair do campo ou com Enter)
 *   });
 *   valor.value; valor.setValue(80); valor.destroy();
 *
 * O formulário recebe o número puro (1290.5), num input oculto com o name do campo. O símbolo e as casas
 * decimais vêm do Intl: R$ e duas casas no real, ¥ e nenhuma no iene; em espanhol, o € vai depois do valor.
 * Texto que não é número volta ao último valor válido.
 */
import { numberFormat } from './i18n.js';
import { hiddenValue } from './field-support.js';

/** Símbolo, lado do símbolo e casas decimais da moeda no idioma atual. */
export function currencyParts(currency = 'BRL') {
  const f = numberFormat({ style: 'currency', currency, currencyDisplay: 'narrowSymbol' });
  const parts = f.formatToParts(1);
  const symbol = parts.find((p) => p.type === 'currency')?.value ?? currency;
  const after = parts.findIndex((p) => p.type === 'currency') > parts.findIndex((p) => p.type === 'integer');
  return { symbol, after, digits: f.resolvedOptions().maximumFractionDigits };
}

/** "1.290,50" (pt-BR), "1,290.50" (en) ou "R$ 12" → número, conforme os separadores do idioma; null se não for número. */
export function parseMoney(text) {
  // um milhão: o espanhol não separa o milhar em números de quatro dígitos
  const parts = numberFormat({ minimumFractionDigits: 1 }).formatToParts(1234567.5);
  const group = parts.find((p) => p.type === 'group')?.value ?? '';
  const decimal = parts.find((p) => p.type === 'decimal')?.value ?? '.';
  // o separador de milhar do pt-BR e do es é o ponto; o espaço fino do Intl também vale
  let clean = String(text).trim().replace(/\s/g, '');
  const g = group.replace(/\s/g, '');
  // "12.5" num idioma de vírgula: um separador só, com uma ou duas casas no fim, é o decimal
  const tail = g && !clean.includes(decimal) && clean.split(g).length === 2 && new RegExp(`\\${g}\\d{1,2}$`).test(clean);
  if (tail) clean = clean.replace(g, decimal);
  else if (g) clean = clean.split(g).join('');
  clean = clean.replace(decimal, '.').replace(/[^\d.-]/g, '');
  if (!clean || clean === '-' || (clean.match(/\./g) ?? []).length > 1) return null;
  const n = Number(clean);
  return Number.isNaN(n) ? null : n;
}

export function createCurrencyField(input, options = {}) {
  const o = { currency: 'BRL', ...options };
  const field = input.closest('.ds-field');
  field?.classList.add('ds-currency');
  const hidden = input.name ? hiddenValue(input) : null;
  input.inputMode = 'decimal';
  input.autocomplete = 'off';

  const affix = document.createElement('span');
  affix.className = 'ds-field__affix';
  affix.setAttribute('aria-hidden', 'true');

  let value = o.value ?? null;
  let parts = currencyParts(o.currency);
  const round = (n) => Number(n.toFixed(parts.digits));
  const clamp = (n) => Math.min(o.max ?? Infinity, Math.max(o.min ?? -Infinity, n));
  const format = (n) => numberFormat({ minimumFractionDigits: parts.digits, maximumFractionDigits: parts.digits }).format(n);

  function placeAffix() {
    affix.textContent = parts.symbol;
    if (parts.after) input.after(affix);
    else input.before(affix);
    field?.classList.toggle('ds-currency--after', parts.after);
  }

  function sync() {
    input.value = value === null ? '' : format(value);
    if (hidden) hidden.value = value === null ? '' : String(value);
  }

  function set(next) {
    const changed = next !== value;
    value = next;
    sync();
    if (changed) {
      o.onChange?.(value);
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  const commit = () => {
    const text = input.value.trim();
    if (!text) return set(null);
    const n = parseMoney(text);
    if (n === null) return sync(); // não é número: volta ao último valor
    set(clamp(round(n)));
  };

  const onKey = (event) => {
    if (event.key === 'Enter') commit();
  };
  const onLocale = () => {
    parts = currencyParts(o.currency);
    placeAffix();
    sync();
  };

  input.addEventListener('blur', commit);
  input.addEventListener('keydown', onKey);
  document.documentElement.addEventListener('ds:localechange', onLocale);
  placeAffix();
  sync();

  return {
    el: input,
    get value() {
      return value;
    },
    setValue(next) {
      value = next === null || next === undefined ? null : clamp(round(Number(next)));
      sync();
    },
    destroy() {
      input.removeEventListener('blur', commit);
      input.removeEventListener('keydown', onKey);
      document.documentElement.removeEventListener('ds:localechange', onLocale);
      affix.remove();
      field?.classList.remove('ds-currency', 'ds-currency--after');
    },
  };
}
