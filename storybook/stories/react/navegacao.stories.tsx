import { useRef, useState } from 'react';
import {
  Button, Chip, Menu, Tabs, SegmentedControl, Pagination, Stepper, Accordion, Modal, Drawer, Popover, Tooltip, IconButton, useDisclosure, toast,
} from '../../../react';
import { mount } from './mount';

export default {
  title: 'React/Navegação e camadas',
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

export const NavegacaoStory = { name: 'Navegação', render: () => mount(<Navegacao />) };

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

export const CamadasStory = { name: 'Camadas', render: () => mount(<Camadas />) };
