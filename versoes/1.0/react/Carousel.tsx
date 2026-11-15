import { Children, useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import { createCarousel } from '../js/carousel.js';
import { useLatest, defined } from './useController';
import { cx } from './cx';

export interface CarouselProps {
  /** Cada filho vira um slide. */
  children: ReactNode;
  /** Nome do carrossel para o leitor de tela (“Destaques”). */
  label: string;
  /** Quantos aparecem de uma vez. Para mudar por largura de tela, deixe vazio e use --ds-carousel-per-view no CSS. */
  perView?: number;
  /** Deixa a ponta do próximo à vista. */
  peek?: boolean;
  /** Depois do último volta ao primeiro. */
  loop?: boolean;
  /** Milissegundos entre um slide e outro; sempre com botão de pausa. */
  autoplay?: number;
  dots?: boolean;
  count?: boolean;
  /** O slide atual, a partir de 0. Com onChange, o carrossel acompanha o estado. */
  index?: number;
  onChange?: (index: number) => void;
  className?: string;
}

type CarouselApi = { index: number; goTo(i: number): void; destroy(): void };

/**
 * Destaques e galerias que passam um por vez, com setas, pontos, teclado e arrastar.
 *   <Carousel label="Destaques" loop>
 *     <article className="ds-carousel__card">…</article>
 *     <article className="ds-carousel__card">…</article>
 *   </Carousel>
 * https://lumeui.dev/#/componentes/carrossel
 */
export function Carousel({ children, label, perView, peek, loop, autoplay, dots, count, index, onChange, className }: CarouselProps) {
  const root = useRef<HTMLElement>(null);
  const api = useRef<CarouselApi | null>(null);
  const change = useLatest(onChange);
  const start = useLatest(index);
  const slides = Children.toArray(children);
  useEffect(() => {
    const c = createCarousel(root.current!, defined({ loop, autoplay, dots, count, onChange: (i: number) => change.current?.(i) })) as CarouselApi;
    if (start.current) c.goTo(start.current);
    api.current = c;
    return () => {
      c.destroy();
      api.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length, loop, autoplay, dots, count]);
  useEffect(() => {
    if (index !== undefined && api.current && api.current.index !== index) api.current.goTo(index);
  }, [index]);
  const style = perView ? ({ '--ds-carousel-per-view': perView } as CSSProperties) : undefined;
  return (
    <section ref={root} className={cx('ds-carousel', peek && 'ds-carousel--peek', className)} aria-label={label} style={style}>
      <div className="ds-carousel__viewport">
        {slides.map((child, i) => (
          <div className="ds-carousel__slide" key={(child as { key?: string }).key ?? i}>
            {child}
          </div>
        ))}
      </div>
    </section>
  );
}
