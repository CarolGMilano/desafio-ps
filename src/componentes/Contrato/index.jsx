import React from 'react';
import styles from './Contrato.module.css';
import openLink from './openLink.svg'; 

const Contrato = ({ contrato, modalidade, link, uasg, tipoContrato }) => {
  return (
    <li className={styles.contrato}>
      <a href={`http://compras.dados.gov.br${link.self.href}`}
      >{contrato}<img src={openLink} alt=""/></a>

      <a href={`http://compras.dados.gov.br${link.aditivos.href}`}><img src={openLink} alt=""/></a>

      <a href={`http://compras.dados.gov.br${link.apostilamentos.href}`}><img src={openLink} alt=""/></a>

      <a href={`http://compras.dados.gov.br${link.eventos.href}`}><img src={openLink} alt=""/></a>

      {link.fornecedor ? <a href={`http://compras.dados.gov.br${link.fornecedor.href}`}><img src={openLink} alt=""/></a> : <p>-</p>}
      
      <a href={`http://compras.dados.gov.br${link.licitacao.href}`}><img src={openLink} alt=""/></a>

      <a href={`http://compras.dados.gov.br${link.modalidade_licitacao.href}`}>{modalidade}</a>

      <a href={`http://compras.dados.gov.br${link.tipo_contrato.href}`}>{tipoContrato}</a>
      
      <a href={`http://compras.dados.gov.br${link.uasg.href}`}>{uasg}</a>
    </li>
  );
}

export default Contrato;