import "./ListaSuspensa.css";

type ListaSuspensaProps = {
  timesNomes: string[];
  label: string;
  timeSelecionado: string;
  required: boolean;
  aoAlterado: (time: string) => void;
};

const ListaSuspensa = ({
  label,
  timeSelecionado,
  timesNomes,
  required = false,
  aoAlterado,
}: ListaSuspensaProps) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        onChange={(evento) => aoAlterado(evento.target.value)}
        required={required}
        value={timeSelecionado}
      >
        <option value=""></option>
        {timesNomes.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
