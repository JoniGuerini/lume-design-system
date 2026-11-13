import { useState } from 'react';
import { Button, IconButton, InlineAction, Chip, ChipGroup, Badge, Alert, Avatar, AvatarGroup, Progress, Spinner, Panel, Section, Breadcrumb } from '../../../react';
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
