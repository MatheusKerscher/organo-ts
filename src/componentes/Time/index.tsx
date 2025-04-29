import Colaborador from "../Colaborador";

import { IColaborador } from "../../shared/interfaces/IColaborador";
import { ITime } from "../../shared/interfaces/ITime";

import "./Time.css";

type TimeProps = ITime & {
  colaboradores: IColaborador[];
};

const Time = ({
  corPrimaria,
  corSecundaria,
  nome,
  colaboradores,
}: TimeProps) => {
  const css = { backgroundColor: corSecundaria };

  return colaboradores.length > 0 ? (
    <section className="time" style={css}>
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>

      <div className="colaboradores">
        {colaboradores.map((colaborador) => (
          <Colaborador
            key={colaborador.nomeColaborador}
            corDeFundo={corPrimaria}
            nomeColaborador={colaborador.nomeColaborador}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    <></>
  );
};

export default Time;
