/**
 * Slider — um valor (ou uma faixa) sobre o <input type="range"> nativo, que já cuida do teclado e do leitor de tela.
 *
 *   <div class="ds-form-field">
 *     <div class="ds-slider__head">
 *       <label class="ds-form-field__label" for="volume">Volume</label>
 *       <output class="ds-slider__value" for="volume"></output>
 *     </div>
 *     <div class="ds-slider"><input class="ds-slider__input" id="volume" name="volume" type="range" min="0" max="100" value="40"></div>
 *   </div>
 *
 *   const slider = createSlider(document.querySelector('.ds-slider'), {
 *     format: (value) => `${value}%`,               // texto do valor e do leitor de tela
 *     marks: [{ value: 0, label: '0' }, { value: 100, label: '100' }],
 *     onChange: (value) => …,                       // ao soltar; onInput, enquanto arrasta
 *   });
 *   slider.value; slider.setValue(50); slider.destroy();
 *
 * Faixa: dois inputs dentro do .ds-slider, cada um com seu aria-label (“Mínimo”, “Máximo”). O valor vira [mínimo, máximo],
 * e os dois polegares não se cruzam. Sem JavaScript, o slider simples continua funcionando, só sem a parte preenchida.
 */
export function createSlider(root, options = {}) {
  const o = { format: String, ...options };
  const inputs = [...root.querySelectorAll('.ds-slider__input')];
  const range = inputs.length === 2;
  const output = root.closest('.ds-form-field')?.querySelector('.ds-slider__value') ?? root.parentElement?.querySelector('.ds-slider__value');
  const [first, second] = inputs;
  const min = Number(first.min || 0);
  const max = Number(first.max || 100);
  const pct = (v) => (max === min ? 0 : (v - min) / (max - min));
  if (range) root.dataset.range = '';

  const read = () => (range ? [Number(first.value), Number(second.value)] : Number(first.value));

  function sync() {
    const low = range ? Number(first.value) : min;
    const high = range ? Number(second.value) : Number(first.value);
    root.style.setProperty('--_from', pct(low));
    root.style.setProperty('--_to', pct(high));
    inputs.forEach((i) => i.setAttribute('aria-valuetext', o.format(Number(i.value))));
    if (output) output.textContent = range ? `${o.format(low)} – ${o.format(high)}` : o.format(high);
    // com os dois polegares juntos no máximo, o de cima tem de ser o que ainda pode descer
    if (range) first.style.zIndex = low >= max ? 2 : 1;
  }

  if (o.marks?.length) {
    const marks = document.createElement('div');
    marks.className = 'ds-slider__marks';
    marks.setAttribute('aria-hidden', 'true');
    marks.innerHTML = o.marks.map((m) => `<span class="ds-slider__mark" style="--_at:${pct(m.value)}">${m.label ?? ''}</span>`).join('');
    root.append(marks);
    root.dataset.marks = '';
  }

  const onInput = (event) => {
    if (range) {
      // não deixa um polegar passar do outro
      const step = Number(first.step || 1);
      if (event.target === first && Number(first.value) > Number(second.value) - step) first.value = Number(second.value) - step;
      if (event.target === second && Number(second.value) < Number(first.value) + step) second.value = Number(first.value) + step;
    }
    sync();
    o.onInput?.(read());
  };
  const onChange = () => o.onChange?.(read());

  root.addEventListener('input', onInput);
  root.addEventListener('change', onChange);
  sync();

  return {
    get value() {
      return read();
    },
    setValue(next) {
      if (range) {
        first.value = next[0];
        second.value = next[1];
      } else first.value = next;
      sync();
    },
    refresh: sync,
    destroy() {
      root.removeEventListener('input', onInput);
      root.removeEventListener('change', onChange);
      root.querySelector('.ds-slider__marks')?.remove();
    },
  };
}
