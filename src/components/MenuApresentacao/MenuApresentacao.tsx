import React from 'react';
import './MenuApresentacao.css';

const MenuApresentacao: React.FC = () => {
  return (
    <section className="menu-apresentacao fd-column">
      <div className="apresentacao-content d-flex fd-column">
        <h1 className="apresentacao-titulo">
          Olá, eu sou Pedro Desenvolvedor Full-stack
        </h1>
        
        <p className="apresentacao-paragrafo">
          Desenvolvedor Full-Stack com foco em Java e TypeScript. Criando soluções digitais práticas e escaláveis para pequenos negócios e MEIs.
        </p>

        <button className="apresentacao-botao d-flex jc-center al-center" type="button">
          Download resumo
        </button>
      </div>
    </section>
  );
};

export default MenuApresentacao;