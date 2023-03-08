import React from 'react';
import styles from './Cabecalho.module.css';

const Cabecalho = () => {
  const itens = [
    "Aditivos",
    "Apostilamentos",
    "Eventos",
    "Fornecedor",
    "Licitação",
    "Modalidade de Licitação",
    "Tipo de Contrato",
    "UASG"
  ]

  return (
    <header className={styles.cabecalho}>
      <ul>
        <li key="contrato">Contrato</li>
        {itens.map(item => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </header>
  );
}

export default Cabecalho;