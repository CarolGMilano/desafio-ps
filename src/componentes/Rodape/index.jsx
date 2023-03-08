import React from 'react';
import styles from './Rodape.module.css';

const Rodape = ({ paginas, paginaAtual, setPaginaAtual }) => {
  return(
    <footer className={styles.rodape} >
      <button 
        onClick={() => (
          paginaAtual <= 0 
            ? setPaginaAtual(0) 
            : setPaginaAtual(paginaAtual - 1)
        )}></button>

      <span>{paginaAtual + 1} de {paginas}</span>

      <button 
        onClick={() => (
          paginaAtual >= (paginas - 1) 
            ? setPaginaAtual(paginas - 1) 
            : setPaginaAtual(paginaAtual + 1)
        )}></button>
    </footer>
  );
}

export default Rodape;