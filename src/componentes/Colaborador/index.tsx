import type { IColaborador } from "../../shared/interfaces/IColaborador";
import "./Colaborador.css";

type ColaboradorProps = IColaborador & {
  corDeFundo: string;
};

const Colaborador = ({
  nomeColaborador,
  imagem,
  cargo,
  data,
  corDeFundo,
}: ColaboradorProps) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nomeColaborador} />
      </div>
      <div className="rodape">
        <h4>{nomeColaborador}</h4>
        <h5>{cargo}</h5>
        <h5>{new Date(data).toLocaleDateString()}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
