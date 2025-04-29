import { useState, type FormEvent } from "react";

import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";

import "./Formulario.css";
import Botao from "../Botao";

import type { IColaborador } from "../../shared/interfaces/IColaborador";

type FormularioProps = {
  timesNomes: string[];
  aoColaboradorCadastrado: (colaborador: IColaborador) => void;
};

const Formulario = ({timesNomes, aoColaboradorCadastrado}: FormularioProps) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento: FormEvent) => {
    evento.preventDefault();

    aoColaboradorCadastrado({
      nomeColaborador: nome,
      cargo,
      imagem,
      time,
    });

    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />

        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />

        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />

        <ListaSuspensa
          required={true}
          label="Time"
          timesNomes={timesNomes}
          timeSelecionado={time}
          aoAlterado={(valor) => setTime(valor)}
        />

        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
