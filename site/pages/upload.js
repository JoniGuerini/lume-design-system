import { icon } from '../../ds/icons/icons.js';
import { createFileUpload } from '../../ds/js/file-upload.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, stateGrid, usageCards, stageWrap, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const MB = 1024 * 1024;
const fakeFile = (name, size, type) => new File([new Uint8Array(Math.min(size, 1024))], name, { type });
// o tamanho mostrado é o do arquivo; nos exemplos, um File com tamanho declarado
const sized = (file, size) => Object.defineProperty(file, 'size', { value: size });

const uploader = (id, { multiple = true, attrs = '', state = '', label }) => `<div class="ds-form-field">
    <label class="ds-form-field__label" for="${id}">${label}</label>
    <div class="ds-upload"${state ? ` data-state="${state}"` : ''} data-upload="${id}"><input class="ds-upload__input" type="file" id="${id}" name="${id}"${multiple ? ' multiple' : ''}${attrs ? ` ${attrs}` : ''}></div>
  </div>`;

/** Envio de mentira, para os exemplos: avança aos poucos e termina. */
const simulate = (file, { onProgress, signal }) =>
  new Promise((resolve, reject) => {
    let progress = 0;
    const timer = setInterval(() => {
      progress += 0.08 + Math.random() * 0.12;
      onProgress(Math.min(progress, 1));
      if (progress >= 1) {
        clearInterval(timer);
        setTimeout(resolve, 150);
      }
    }, 240);
    signal.addEventListener('abort', () => {
      clearInterval(timer);
      reject(new Error('abort'));
    });
  });

const label = () => L('Anexos', 'Attachments', 'Adjuntos');
const stateZone = (o = {}) => `<div class="ds-upload"${o.state ? ` data-state="${o.state}"` : ''}${o.dragging ? ' data-dragging' : ''}><input class="ds-upload__input" type="file" tabindex="-1" aria-label="${label()}"${o.disabled ? ' disabled' : ''}>
    <div class="ds-upload__zone"><span class="ds-upload__icon">${icon('upload', { size: 20 })}</span><span class="ds-upload__title">${L('Arraste arquivos ou clique para escolher', 'Drag files or click to browse', 'Arrastra archivos o haz clic para elegir')}</span></div>
  </div>`;

export default function renderUpload(page) {
  return controlPage(page, {
    lead: L('Para enviar arquivos, arrastando ou escolhendo. Cada arquivo tem o próprio progresso e o próprio erro, então uma falha não atrapalha os outros.', 'For sending files, by dragging or browsing. Each file has its own progress and its own error, so one failure doesn’t get in the way of the others.', 'Para enviar archivos, arrastrando o eligiendo. Cada archivo tiene su propio progreso y su propio error, así que un fallo no molesta a los demás.'),
    stats: [
      [L('formas de enviar', 'ways to send', 'formas de enviar'), 2],
      [L('estados do arquivo', 'file states', 'estados del archivo'), 4],
      [L('limites', 'limits', 'límites'), L('tipo · tamanho · número', 'type · size · count', 'tipo · tamaño · número')],
      [L('base', 'base', 'base'), 'file'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Os arquivos não saem do seu computador: o envio é simulado.', 'Files don’t leave your computer: the upload is simulated.', 'Los archivos no salen de tu computadora: el envío es simulado.'), html: playgroundMarkup('upload') },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L(`Sem a opção ${ic('upload')}, os arquivos ficam no input e seguem com o formulário. Com ela, cada um é enviado assim que entra na lista.`, `Without the ${ic('upload')} option, files stay in the input and go with the form. With it, each one is sent as soon as it joins the list.`, `Sin la opción ${ic('upload')}, los archivos quedan en el input y siguen con el formulario. Con ella, cada uno se envía en cuanto entra en la lista.`),
        html: examples([
          example(L('Vários arquivos', 'Multiple files', 'Varios archivos'), 'multiple', L('Com limites de tipo, tamanho e número, escritos na dica.', 'With type, size, and count limits, written in the hint.', 'Con límites de tipo, tamaño y número, escritos en la pista.'), uploader('up-many', { label: label() })),
          example(L('Um arquivo só', 'A single file', 'Un solo archivo'), L('sem multiple', 'no multiple', 'sin multiple'), L('Escolher outro substitui o atual.', 'Choosing another replaces the current one.', 'Elegir otro reemplaza el actual.'), uploader('up-one', { multiple: false, label: L('Currículo', 'Résumé', 'Currículum') })),
          example(L('Situações por arquivo', 'Per-file states', 'Situaciones por archivo'), 'data-status', L('Enviado, enviando, recusado e falha no envio, com “Tentar de novo”.', 'Uploaded, uploading, refused, and failed, with “Try again”.', 'Enviado, enviando, rechazado y fallo de envío, con “Intentar de nuevo”.'), uploader('up-status', { label: L('Fotos', 'Photos', 'Fotos') })),
        ]),
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L(`A área pode ser forçada com ${ic('data-state')} e ${ic('data-dragging')}.`, `The area can be forced with ${ic('data-state')} and ${ic('data-dragging')}.`, `El área se puede forzar con ${ic('data-state')} y ${ic('data-dragging')}.`),
        html: stateGrid([
          [L('Normal', 'Default', 'Normal'), stateZone()],
          ['Hover', stateZone({ state: 'hover' })],
          [L('Foco', 'Focus', 'Foco'), stateZone({ state: 'focus' })],
          [L('Arrastando', 'Dragging', 'Arrastrando'), stateZone({ dragging: true })],
          [L('Desativado', 'Disabled', 'Desactivado'), stateZone({ disabled: true })],
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L(`A função ${ic('upload')} recebe o arquivo, avisa o progresso (de 0 a 1) e devolve uma promessa. O erro que ela lançar aparece na linha do arquivo.`, `The ${ic('upload')} function receives the file, reports progress (0 to 1), and returns a promise. Any error it throws shows on the file’s row.`, `La función ${ic('upload')} recibe el archivo, avisa el progreso (de 0 a 1) y devuelve una promesa. El error que lance aparece en la fila del archivo.`),
        html: codeBlock(`import { createFileUpload } from 'https://lumeui.dev/v/0.37/lume.js';

createFileUpload(document.querySelector('.ds-upload'), {
  accept: ['image/*', '.pdf'],
  maxSize: 5 * 1024 * 1024,
  maxFiles: 3,
  upload: async (file, { onProgress, signal }) => {
    const resposta = await enviar(file, { onProgress, signal });
    if (!resposta.ok) throw new Error('${L('Não foi possível enviar.', 'Couldn’t upload.', 'No se pudo enviar.')}');
  },
});`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('A área é o próprio input de arquivo, então funciona sem arrastar.', 'The area is the file input itself, so it works without dragging.', 'El área es el propio input de archivo, así que funciona sin arrastrar.'),
        html: a11yList([
          [L('Sem depender de arrastar', 'No need to drag', 'Sin depender de arrastrar'), L('Tab leva ao input, e Enter ou Espaço abrem o seletor do sistema.', 'Tab reaches the input, and Enter or Space open the system picker.', 'Tab lleva al input, y Enter o Espacio abren el selector del sistema.'), ['Tab', 'Enter', L('Espaço', 'Space', 'Espacio')]],
          [L('Limites avisados antes', 'Limits stated upfront', 'Límites avisados antes'), L('A dica com tipo e tamanho está ligada ao input por aria-describedby.', 'The hint with type and size is linked to the input by aria-describedby.', 'La pista con tipo y tamaño está vinculada al input por aria-describedby.')],
          [L('Progresso anunciado', 'Announced progress', 'Progreso anunciado'), L('A barra é um role="progressbar" com o nome do arquivo; o fim e os erros são avisados em role="status".', 'The bar is a role="progressbar" with the file’s name; completion and errors are announced in role="status".', 'La barra es un role="progressbar" con el nombre del archivo; el fin y los errores se avisan en role="status".')],
          [L('Não só cor', 'Not only color', 'No solo color'), L('Erro e sucesso trazem ícone e texto.', 'Errors and success include an icon and text.', 'El error y el éxito traen ícono y texto.')],
          [L('Remover com nome', 'Named remove', 'Quitar con nombre'), L('Cada × diz qual arquivo sai, e o foco segue para o próximo botão da lista.', 'Each × says which file goes, and focus moves to the next button in the list.', 'Cada × dice qué archivo sale, y el foco sigue al siguiente botón de la lista.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Tudo o que o upload consome.', 'Everything the upload consumes.', 'Todo lo que consume la carga.'),
        html: tokenTable([
          ['color.bg.field', L('Fundo da área', 'Area background', 'Fondo del área')],
          ['color.bg.field-hover', L('Área no hover', 'Area on hover', 'Área en hover')],
          ['color.border.strong', L('Contorno tracejado', 'Dashed outline', 'Contorno punteado')],
          ['color.border.focus', L('Anel de foco', 'Focus ring', 'Anillo de foco')],
          ['color.brand.subtle', L('Área ao arrastar', 'Area while dragging', 'Área al arrastrar')],
          ['color.brand.border', L('Contorno ao arrastar', 'Outline while dragging', 'Contorno al arrastrar')],
          ['color.brand.solid', L('Barra de progresso', 'Progress bar', 'Barra de progreso')],
          ['color.border.subtle', L('Contorno da linha', 'Row outline', 'Contorno de la fila')],
          ['color.danger.border', L('Linha com erro', 'Row with an error', 'Fila con error')],
          ['color.danger.fg', L('Texto do erro', 'Error text', 'Texto del error')],
          ['color.success.fg', L('Ícone de enviado', 'Uploaded icon', 'Ícono de enviado')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e o que combinar.', 'When to use it and what to pair it with.', 'Cuándo usarlo y con qué combinarlo.'),
        html: usageCards([
          ['do', L('Faça: diga os limites', 'Do: state the limits', 'Haz: di los límites'), L('Tipo e tamanho na dica evitam a frustração do erro depois de escolher.', 'Type and size in the hint avoid the frustration of an error after choosing.', 'El tipo y el tamaño en la pista evitan la frustración del error después de elegir.')],
          ['dont', L('Evite: bloquear tudo por um erro', 'Avoid: blocking everything over one error', 'Evita: bloquear todo por un error'), L('Um arquivo recusado não invalida os outros. Mostre o erro só naquela linha.', 'One refused file doesn’t invalidate the others. Show the error only on that row.', 'Un archivo rechazado no invalida los demás. Muestra el error solo en esa fila.')],
          ['tip', L('Validar também no servidor', 'Validate on the server too', 'Validar también en el servidor'), L('A checagem de tipo e tamanho aqui é uma ajuda para a pessoa, não uma proteção.', 'The type and size check here helps people; it isn’t protection.', 'La comprobación de tipo y tamaño aquí es una ayuda para la persona, no una protección.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'upload',
    controls: [
      { id: 'count', label: L('Arquivos', 'Files', 'Archivos'), value: 'many', options: [{ value: 'many', label: L('Vários', 'Multiple', 'Varios') }, { value: 'one', label: L('Um só', 'Only one', 'Solo uno') }] },
      { id: 'type', label: L('Tipo', 'Type', 'Tipo'), value: 'any', options: [{ value: 'any', label: L('Qualquer', 'Any', 'Cualquiera') }, { value: 'image', label: L('Só imagens', 'Images only', 'Solo imágenes') }] },
      { id: 'send', label: L('Envio', 'Upload', 'Envío'), value: 'on', options: [{ value: 'on', label: L('Simulado', 'Simulated', 'Simulado') }, { value: 'off', label: L('Com o formulário', 'With the form', 'Con el formulario') }] },
      { id: 'state', label: L('Estado', 'State', 'Estado'), value: 'default', options: [{ value: 'default', label: L('Normal', 'Default', 'Normal') }, { value: 'disabled', label: L('Desativado', 'Disabled', 'Desactivado') }] },
    ],
    render: (s) => `<div class="fc-stage fc-stage--wide">${uploader('up-play', { multiple: s.count === 'many', attrs: s.state === 'disabled' ? 'disabled' : '', label: label() })}</div>`,
    mount: (preview, s) => {
      const upload = createFileUpload(preview.querySelector('.ds-upload'), {
        accept: s.type === 'image' ? ['image/*'] : undefined,
        maxSize: 5 * MB,
        maxFiles: s.count === 'many' ? 3 : undefined,
        upload: s.send === 'on' ? simulate : undefined,
      });
      return () => upload.destroy();
    },
    code: (s) => `<div class="ds-form-field">
  <label class="ds-form-field__label" for="anexos">${label()}</label>
  <div class="ds-upload"><input class="ds-upload__input" type="file" id="anexos" name="anexos"${s.count === 'many' ? ' multiple' : ''}${s.state === 'disabled' ? ' disabled' : ''}></div>
</div>

<script type="module">
  import { createFileUpload } from 'https://lumeui.dev/v/0.37/lume.js';
  createFileUpload(document.querySelector('.ds-upload'), {${s.type === 'image' ? "\n    accept: ['image/*']," : ''}
    maxSize: 5 * 1024 * 1024,${s.count === 'many' ? '\n    maxFiles: 3,' : ''}${s.send === 'on' ? '\n    upload: enviar,' : ''}
  });
</script>`,
  });

  const fail = () => Promise.reject(new Error(L('Não foi possível enviar.', 'Couldn’t upload.', 'No se pudo enviar.')));
  const stuck = (file, { onProgress, signal }) =>
    new Promise((resolve, reject) => {
      onProgress(0.62);
      signal.addEventListener('abort', () => reject(new Error('abort')));
    });
  const uploads = [
    createFileUpload(root.querySelector('[data-upload="up-many"]'), { accept: ['image/*', '.pdf'], maxSize: 5 * MB, maxFiles: 3, upload: simulate }),
    createFileUpload(root.querySelector('[data-upload="up-one"]'), { accept: ['.pdf'], maxSize: 2 * MB }),
    createFileUpload(root.querySelector('[data-upload="up-status"]'), {
      accept: ['image/*'],
      maxSize: 5 * MB,
      upload: (file, api) => (file.name.startsWith('praia') ? Promise.resolve() : file.name.startsWith('serra') ? stuck(file, api) : fail()),
    }),
  ];
  uploads[2].add([
    sized(fakeFile('praia.jpg', 1024, 'image/jpeg'), 2.1 * MB),
    sized(fakeFile('serra.jpg', 1024, 'image/jpeg'), 3.4 * MB),
    sized(fakeFile('video.mov', 1024, 'video/quicktime'), 48 * MB),
    sized(fakeFile('cidade.jpg', 1024, 'image/jpeg'), 1.2 * MB),
  ]);

  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    uploads.forEach((u) => u.destroy());
    unmountCopy();
    unmountNav();
  };
}
