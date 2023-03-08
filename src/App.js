import { useEffect, useState } from 'react';
import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Contrato from './componentes/Contrato';
import Rodape from './componentes/Rodape';

function App() {
  const [contratos, setContratos] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(0);

  const contratosPorPagina = 25;
  const primeiroDaLista = paginaAtual * contratosPorPagina;
  const ultimoDaLista = primeiroDaLista + contratosPorPagina;
  const contratosAtuais = contratos.slice(primeiroDaLista, ultimoDaLista);

  const paginas = Math.ceil(contratos.length/contratosPorPagina);

  useEffect(() => {
    fetch('https://compras.dados.gov.br/contratos/v1/contratos.json?uasg=153229')
      .then(resposta => resposta.json())
      .then(dados => setContratos(dados._embedded.contratos))
      .catch(erro => {
        alert('Ocorreu um erro ao buscar os items. Por favor, recarregue a página.')
      })
  }, [])

  return (
    <div className="App">
      <Cabecalho />

      <ul>
        {contratosAtuais.map(contrato => {
          return (
            <Contrato 
              key={contrato.numero}
              contrato={contrato.identificador}
              modalidade={contrato.modalidade_licitacao} 
              link={contrato._links}
              uasg={contrato.uasg}
              tipoContrato={contrato.codigo_contrato}
            />
            )
          })
        } 
      </ul>

      <Rodape 
        paginas={paginas} 
        paginaAtual={paginaAtual}
        setPaginaAtual={setPaginaAtual}
      />
    </div>
  );
}

export default App;
