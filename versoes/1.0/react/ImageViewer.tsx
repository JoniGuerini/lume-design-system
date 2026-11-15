import { useEffect, useRef, type HTMLAttributes, type MouseEvent } from 'react';
import { openImageViewer, type ViewerImage } from '../js/image-viewer.js';

export { openImageViewer, type ViewerImage };

export interface GalleryImage extends ViewerImage {
  /** A miniatura que fica na página. Sem ela, a própria imagem grande. */
  thumb?: string;
}

export interface ImageGalleryProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  images: GalleryImage[];
  /** Chamado com o índice da imagem a cada troca dentro do visualizador. */
  onChange?: (index: number) => void;
  onClose?: () => void;
}

/**
 * Miniaturas que abrem o visualizador de imagem, com zoom, arrastar e a galeria inteira.
 *   <ImageGallery className="grade" images={[{ src: 'inicio.jpg', thumb: 'inicio-mini.jpg', alt: 'A página inicial do Lume', caption: 'Início' }]} />
 * Para abrir de outro lugar: openImageViewer(imagens, { index: 1 }).
 * https://lumeui.dev/#/componentes/visualizador-de-imagem
 */
export function ImageGallery({ images, onChange, onClose, className, ...rest }: ImageGalleryProps) {
  const viewer = useRef<ReturnType<typeof openImageViewer> | null>(null);
  useEffect(() => () => viewer.current?.close(), []);

  const open = (event: MouseEvent<HTMLAnchorElement>, index: number) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.button) return;
    event.preventDefault();
    viewer.current = openImageViewer(
      images.map(({ thumb: _thumb, ...image }) => image),
      { index, onChange, onClose: () => { viewer.current = null; onClose?.(); } },
    );
  };

  return (
    <div className={className} {...rest}>
      {images.map((image, i) => (
        <a key={image.src + i} className="ds-viewer-thumb" href={image.src} data-caption={image.caption} onClick={(event) => open(event, i)}>
          <img src={image.thumb ?? image.src} alt={image.alt ?? ''} loading="lazy" />
        </a>
      ))}
    </div>
  );
}

