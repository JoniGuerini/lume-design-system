import { useState } from 'react';
import { Button, IconButton, InlineAction, Chip, ChipGroup, Badge, Alert, Avatar, AvatarGroup, Progress, Spinner, Panel, Section, Breadcrumb, Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarButton, Link, Divider, ProgressRing, Banner, NotificationCenter, type NotificationItem } from '../../../react';
import { mount } from './mount';

export default {
  title: 'React/Ações e conteúdo',
  id: 'react-acoes',
  parameters: {
    docs: {
      description: {
        component:
          'Os componentes React do Lume (react/*.tsx), com o mesmo CSS. Copie a pasta react/ que vem no zip de cada versão.\n\nDocumentação: https://lumeui.dev/#/recursos/react',
      },
    },
  },
};

export const Botao = {
  name: 'Button',
  args: { variant: 'primary', size: 'md', children: 'Salvar alterações', icon: 'check', busy: false, disabled: false },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'subtle', 'danger'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    icon: { control: 'select', options: ['', 'check', 'pencil', 'plus', 'download', 'trash', 'send'] },
  },
  render: (args: Record<string, never>) => mount(<Button {...args} icon={args.icon || undefined} />),
};

export const Badges = {
  name: 'Badge',
  args: { tone: 'success', size: 'md', dot: true, children: 'Pago' },
  argTypes: {
    tone: { control: 'select', options: ['neutral', 'brand', 'info', 'success', 'warning', 'danger'] },
    size: { control: 'inline-radio', options: ['sm', 'md'] },
  },
  render: (args: Record<string, never>) => mount(<Badge {...args} />),
};

export const Alerta = {
  name: 'Alert',
  args: { tone: 'info', title: 'Nova versão disponível', children: 'Atualize quando puder; nada do que você fez se perde.', compact: false },
  argTypes: { tone: { control: 'select', options: ['neutral', 'info', 'success', 'warning', 'danger'] } },
  render: (args: Record<string, never>) => mount(<Alert {...args} onClose={() => {}} />),
};

function Filtros() {
  const [on, setOn] = useState(['web']);
  const toggle = (v: string) => setOn(on.includes(v) ? on.filter((x) => x !== v) : [...on, v]);
  return (
    <ChipGroup label="Plataformas">
      {['web', 'ios', 'android'].map((v) => (
        <Chip key={v} pressed={on.includes(v)} onClick={() => toggle(v)}>{v === 'ios' ? 'iOS' : v[0].toUpperCase() + v.slice(1)}</Chip>
      ))}
    </ChipGroup>
  );
}

export const Chips = { name: 'Chip (filtro)', render: () => mount(<Filtros />) };

export const Conjunto = {
  name: 'Conjunto',
  render: () =>
    mount(
      <div style={{ display: 'grid', gap: 20, maxWidth: 640 }}>
        <Breadcrumb items={[{ label: 'Início', href: '#' }, { label: 'Projetos', href: '#' }, { label: 'Lume' }]} />
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <IconButton icon="x" label="Fechar" />
          <IconButton icon="settings" label="Ajustes" look="outline" />
          <InlineAction icon="video" plus>Na cena</InlineAction>
          <Avatar name="Marina Duarte" status="online" />
          <AvatarGroup size="sm">{['Marina Duarte', 'Caio Ramos', 'Lia Nakamura', 'Otávio Prado', 'Bruna Sá'].map((n) => <Avatar key={n} name={n} size="sm" />)}</AvatarGroup>
          <Spinner size="sm" />
        </div>
        <Progress label="Enviando arquivos" value={62} />
        <Panel eyebrow="Roteiro" title="Roteiro de lançamento" actions={<IconButton icon="x" label="Fechar" />} footer={<Button variant="primary">Escolher formato</Button>}>
          <Section stamp="00" title="Abertura">Comece pelo problema de quem vai ler.</Section>
        </Panel>
      </div>,
    ),
};

function Formatacao() {
  const [on, setOn] = useState<Record<string, boolean>>({ bold: false, italic: false, left: true, center: false });
  const toggle = (value: string, pressed: boolean) => setOn((s) => ({ ...s, [value]: pressed }));
  return (
    <div style={{ display: 'grid', gap: 16, justifyItems: 'start' }}>
      <Toolbar label="Formatação" onToggle={toggle}>
        <ToolbarGroup>
          <ToolbarButton icon="bold" label="Negrito" value="bold" pressed={on.bold} />
          <ToolbarButton icon="italic" label="Itálico" value="italic" pressed={on.italic} />
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup exclusive>
          <ToolbarButton icon="align-left" label="Alinhar à esquerda" value="left" pressed={on.left} />
          <ToolbarButton icon="align-center" label="Centralizar" value="center" pressed={on.center} />
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarButton icon="undo" label="Desfazer" />
      </Toolbar>
      <p style={{ margin: 0, width: 360, textAlign: on.center ? 'center' : 'start', fontWeight: on.bold ? 600 : 400, fontStyle: on.italic ? 'italic' : 'normal' }}>O Lume é um design system sem dependências.</p>
    </div>
  );
}

export const BarraDeFerramentas = { name: 'Toolbar', render: () => mount(<Formatacao />) };

function PecasPequenas() {
  const [v, setV] = useState(62);
  return (
    <div style={{ display: 'grid', gap: 20, maxWidth: 420 }}>
      <p style={{ margin: 0 }}>
        Os componentes usam só tokens semânticos. Veja as <Link href="#">cores</Link> e a fonte <Link href="https://vercel.com/font" external>Geist</Link>.
      </p>
      <Link variant="standalone" href="#">Ver todas as versões</Link>
      <Divider />
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <span>Lume 0.34</span>
        <Divider vertical />
        <span>52 componentes</span>
      </div>
      <Divider label="ou" />
      <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        <ProgressRing size="sm" value={v} label="Enviando arquivos" />
        <ProgressRing value={v} label="Enviando arquivos" />
        <ProgressRing size="lg" value={v} tone={v === 100 ? 'success' : 'brand'} label="Enviando arquivos" />
        <ProgressRing label="Preparando" />
        <button type="button" className="ds-btn ds-btn--sm" onClick={() => setV((x) => (x >= 100 ? 0 : Math.min(100, x + 19)))}>Avançar</button>
      </div>
    </div>
  );
}

export const LinkDivisorProgresso = { name: 'Link, divisor e progresso circular', render: () => mount(<PecasPequenas />) };

function Avisos() {
  const [items, setItems] = useState<NotificationItem[]>([
    { id: 'v035', title: 'Lume 0.35', text: 'Banner de anúncio e central de notificações.', time: new Date(Date.now() - 4 * 60000), icon: 'megaphone', tone: 'brand' },
    { id: 'v034', title: 'Lume 0.34', text: 'Divisor, link e progresso circular.', time: new Date(Date.now() - 26 * 3600000), icon: 'megaphone', read: true },
  ]);
  return (
    <div style={{ display: 'grid', gap: 20, maxWidth: 560 }}>
      <Banner tone="brand" title="Lume 0.35" closable>
        Banner de anúncio e central de notificações. <Link href="#">Ver novidades</Link>
      </Banner>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <NotificationCenter items={items} onChange={setItems} />
        <button
          type="button"
          className="ds-btn ds-btn--secondary ds-btn--sm"
          onClick={() => setItems((list) => [{ id: `n${list.length}`, title: 'Lume 0.36', text: 'Visualizador de imagem.', time: new Date(), icon: 'megaphone', tone: 'brand' }, ...list])}
        >
          Chegou uma nova
        </button>
      </div>
    </div>
  );
}

export const BannerECentral = { name: 'Banner e central de notificações', render: () => mount(<Avisos />) };
