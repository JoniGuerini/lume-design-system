import { useState } from 'react';
import {
  Button, Form, Field, TextField, Select, DatePicker, TimePicker, NumberField, TagField, Slider, Switch, Checkbox, RadioGroup,
} from '../../../react';
import { mount } from './mount';

export default {
  title: 'React/Formulários',
  id: 'react-formularios',
  parameters: { docs: { description: { component: 'Controles de formulário com o valor no estado do React e a validação do Lume (Form).\n\nDocumentação: https://lumeui.dev/#/recursos/react' } } },
};

export const Campo = {
  name: 'TextField',
  args: { label: 'Nome do projeto', hint: 'Aparece no menu e na busca.', error: '', optional: false, showCount: true, maxLength: 40 },
  render: (args: Record<string, never>) => {
    function Demo() {
      const [v, setV] = useState('');
      return <TextField {...args} error={args.error || undefined} value={v} onChange={(e) => setV(e.target.value)} onClear={() => setV('')} />;
    }
    return mount(<div style={{ maxWidth: 360 }}><Demo /></div>);
  },
};

function Cadastro() {
  const [pais, setPais] = useState<string | null>(null);
  const [data, setData] = useState<Date | null>(null);
  const [hora, setHora] = useState<string | null>('09:00');
  const [qtd, setQtd] = useState<number | null>(1);
  const [tags, setTags] = useState(['design']);
  const [vol, setVol] = useState(40);
  const [plano, setPlano] = useState<string | null>('equipe');
  const [avisos, setAvisos] = useState(true);
  const [enviado, setEnviado] = useState('');
  return (
    <Form onSubmit={(d) => setEnviado(JSON.stringify(d))} style={{ display: 'grid', gap: 16, maxWidth: 420 }}>
      <TextField label="E-mail" name="email" type="email" required icon="mail" />
      <Field label="País">
        <Select name="pais" required placeholder="Escolha um país" value={pais} onChange={setPais} search options={[{ value: 'br', label: 'Brasil' }, { value: 'pt', label: 'Portugal' }, { value: 'ar', label: 'Argentina' }]} />
      </Field>
      <Field label="Entrega"><DatePicker name="entrega" value={data} onChange={setData} required /></Field>
      <Field label="Início"><TimePicker name="inicio" value={hora} onChange={setHora} step={30} /></Field>
      <Field label="Quantidade"><NumberField name="qtd" value={qtd} onChange={setQtd} min={0} max={10} /></Field>
      <Field label="Assuntos"><TagField name="assuntos" value={tags} onChange={setTags} /></Field>
      <Slider label="Volume" name="volume" value={vol} onChange={setVol} format={(v) => `${v}%`} />
      <RadioGroup legend="Plano" name="plano" value={plano} onChange={setPlano} options={[{ value: 'pessoal', label: 'Pessoal' }, { value: 'equipe', label: 'Equipe' }]} />
      <Switch label="Avisar sobre comentários" checked={avisos} onChange={(e) => setAvisos(e.target.checked)} />
      <Checkbox label="Aceito os termos" name="termos" required />
      <div><Button type="submit" variant="primary">Enviar</Button></div>
      {enviado && <pre className="ds-code ds-code--sm" style={{ whiteSpace: 'pre-wrap' }}>{enviado}</pre>}
    </Form>
  );
}

export const Formulario = { name: 'Form completo', render: () => mount(<Cadastro />) };
