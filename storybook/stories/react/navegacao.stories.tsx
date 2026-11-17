import { useRef, useState } from 'react';
import {
  Button, Chip, Menu, Tabs, SegmentedControl, Pagination, Stepper, Accordion, Modal, Drawer, Popover, Tooltip, IconButton, useDisclosure, toast,
  AppShell, Breadcrumb, type NavGroup,
} from '../../../react';
import { mount } from './mount';

export default {
  title: 'React/Navigation and layers',
  id: 'react-navegacao',
  parameters: { docs: { description: { component: 'Abas, menus, paginação e camadas abertas e fechadas pelo estado do React.\n\nDocumentação: https://lumeui.dev/#/recursos/react' } } },
};

function Navegacao() {
  const ref = useRef<HTMLButtonElement>(null);
  const [ordem, setOrdem] = useState('recentes');
  const [aba, setAba] = useState('geral');
  const [visao, setVisao] = useState('mes');
  const [pag, setPag] = useState({ page: 1, pageSize: 10 });
  const [etapa, setEtapa] = useState(1);
  const nomes: Record<string, string> = { recentes: 'Recentes', antigos: 'Antigos', nome: 'Nome' };
  return (
    <div style={{ display: 'grid', gap: 20, maxWidth: 680 }}>
      <div>
        <Chip ref={ref} icon="filter" chevron>{nomes[ordem]}</Chip>
        <Menu triggerRef={ref} label="Ordenar" value={ordem} onChange={setOrdem} options={Object.entries(nomes).map(([value, label]) => ({ value, label }))} />
      </div>
      <Tabs label="Seções" value={aba} onChange={setAba} items={[{ id: 'geral', label: 'Geral', content: <p>Conteúdo geral.</p> }, { id: 'membros', label: 'Membros', content: <p>Lista de membros.</p> }]} />
      <div><SegmentedControl label="Visão" value={visao} onChange={setVisao} options={[{ value: 'mes', label: 'Mês' }, { value: 'semana', label: 'Semana' }, { value: 'dia', label: 'Dia' }]} /></div>
      <Pagination total={248} page={pag.page} pageSize={pag.pageSize} pageSizes={[10, 25, 50]} onChange={setPag} />
      <Stepper current={etapa} onChange={setEtapa} steps={[{ label: 'Conta' }, { label: 'Perfil' }, { label: 'Pronto' }]} />
      <Accordion single defaultOpen={['a']} items={[{ id: 'a', title: 'O que está incluído?', content: 'Todos os componentes.' }, { id: 'b', title: 'Posso cancelar?', content: 'Quando quiser.' }]} />
    </div>
  );
}

export const NavegacaoStory = { name: 'Navigation', render: () => mount(<Navegacao />) };

function Camadas() {
  const modal = useDisclosure();
  const gaveta = useDisclosure();
  const ref = useRef<HTMLButtonElement>(null);
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary" onClick={modal.show}>Publicar</Button>
      <Button onClick={gaveta.show}>Detalhes</Button>
      <Button ref={ref} icon="link">Compartilhar</Button>
      <Popover triggerRef={ref} title="Compartilhar"><p style={{ margin: 0 }}>Qualquer pessoa com o link pode ver.</p></Popover>
      <Tooltip content="Recolher menu" kbd="⌘B"><IconButton icon="panel-left" label="Recolher menu" /></Tooltip>
      <Button variant="ghost" onClick={() => toast('Projeto arquivado', { tone: 'success' })}>Mostrar toast</Button>
      <Modal open={modal.open} onClose={modal.close} eyebrow="Projeto" title="Publicar alterações?" actions={[{ label: 'Cancelar', value: 'cancel' }, { label: 'Publicar', value: 'ok', variant: 'primary' }]}>
        As mudanças ficam visíveis para todo mundo.
      </Modal>
      <Drawer open={gaveta.open} onClose={gaveta.close} eyebrow="Pedido" title="Nº 1042" actions={[{ label: 'Fechar', value: 'close' }]}>Detalhes do pedido.</Drawer>
    </div>
  );
}

export const CamadasStory = { name: 'Layers', render: () => mount(<Camadas />) };

/* ───────── App shell: sidebar ou navbar ───────── */

const NAV: NavGroup[] = [
  { id: 'main', items: [
    { label: 'Início', icon: 'home', href: '#/' },
    { label: 'Novidades', icon: 'megaphone', href: '#novidades', dot: true },
    { label: 'Roadmap', icon: 'compass', href: '#roadmap' },
  ] },
  { id: 'fundamentos', label: 'Fundamentos', items: [
    { label: 'Cores', icon: 'palette', href: '#cores' },
    { label: 'Tipografia', icon: 'type', href: '#tipografia' },
    { label: 'Ícones', icon: 'shapes', href: '#icones' },
  ] },
  { id: 'componentes', label: 'Componentes', items: [
    { label: 'Botão', icon: 'button', href: '#botao', section: 'Ações' },
    { label: 'Chip', icon: 'tag', href: '#chip', section: 'Ações' },
    { label: 'Sidebar', icon: 'panel-left', href: '#sidebar', section: 'Navegação' },
    { label: 'Navbar', icon: 'panel-top', href: '#navbar', section: 'Navegação' },
    { label: 'Abas', icon: 'tabs', href: '#abas', section: 'Navegação' },
  ] },
  { id: 'padroes', label: 'Padrões', items: [
    { label: 'App shell', icon: 'app-shell', href: '#app-shell' },
    { label: 'Formulários', icon: 'input', href: '#formularios' },
  ] },
];

function Shell() {
  const [layout, setLayout] = useState<'sidebar' | 'navbar'>('sidebar');
  const [atual, setAtual] = useState('#/');
  const pagina = NAV.flatMap((g) => g.items).find((i) => i.href === atual);
  return (
    // transform: o shell usa position: fixed (aba de recolher, gaveta); assim ele fica preso a esta caixa
    <div className="lume-shell-story" style={{ height: 640, transform: 'translateZ(0)', overflow: 'hidden', borderRadius: 16 }}>
      <style>{'.lume-shell-story .ds-shell { height: 100%; }'}</style>
      <AppShell
        name="Lume"
        logo={<img src="assets/favicon.svg" alt="" width={24} height={24} />}
        homeHref="#/"
        nav={NAV}
        layout={layout}
        activeHref={atual}
        persist={false}
        themeToggle={false}
        onNavigate={(href, event) => {
          event.preventDefault();
          setAtual(href);
        }}
        onSearch={() => toast('Aqui abriria a sua paleta de comandos.')}
        searchLabel="Buscar"
        breadcrumb={<Breadcrumb items={atual === '#/' ? [{ label: 'Início' }] : [{ label: 'Início', href: '#/' }, { label: pagina?.label ?? '' }]} />}
        actions={<SegmentedControl label="Layout" value={layout} onChange={(v) => setLayout(v as 'sidebar' | 'navbar')} options={[{ value: 'sidebar', label: 'Sidebar' }, { value: 'navbar', label: 'Navbar' }]} />}
      >
        <div style={{ display: 'grid', gap: 12, maxWidth: 560 }}>
          <h1 style={{ font: 'var(--ds-text-heading-lg)', margin: 0 }}>{pagina?.label ?? 'Início'}</h1>
          <p style={{ color: 'var(--ds-color-fg-muted)', margin: 0 }}>
            Troque o layout na topbar. A navbar usa os mesmos grupos; diminua a tela para ver a busca encolher e os itens irem para o Mais.
          </p>
        </div>
      </AppShell>
    </div>
  );
}

export const ShellStory = {
  name: 'App shell: sidebar or navbar',
  parameters: { docs: { description: { story: 'AppShell com layout="sidebar" ou layout="navbar". https://lumeui.dev/#/componentes/navbar' } } },
  render: () => mount(<Shell />),
};
