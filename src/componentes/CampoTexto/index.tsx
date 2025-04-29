import "./CampoTexto.css";

type CampoTextoProps = {
  placeholder: string;
  label: string;
  valor: string;
  obrigatorio?: boolean;
  tipo?: "text" | "date";
  aoAlterado: (valor: string) => void;
};

const CampoTexto = ({
  label,
  placeholder,
  valor,
  aoAlterado,
  obrigatorio = false,
  tipo = "text",
}: CampoTextoProps) => {
  const placeholderModificada = `${placeholder}...`;

  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        type={tipo}
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default CampoTexto;
