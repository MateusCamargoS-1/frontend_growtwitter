import LayoutDefault from '../../config/layout/LayoutDefault';
import ExplorerStyled from './ExploresStyled';

const Explorer = () => {
  return (
    <LayoutDefault>
      <ExplorerStyled>
        <h1>Explorer</h1>
        <div className="assuntos">
          <p>
            <span>Esportes - Há 45 min</span>
            Assuntos sobre esportes
          </p>
          <p>
            <span>Assunto do Momento em Brasil</span>
            Assuntos do Momento
          </p>
          <p>
            <span>Música - Assunto do Momento</span>
            Assuntos sobre Músicas
          </p>
          <p>
            <span>Cinema - Assunto do Momento</span>
            Assuntos Sobre Filmes e Cinema
          </p>
          <p>
            <span>Entretenimento - Assunto do Momento</span>
            Assuntos Sobre Entretenimento
          </p>
          <p>
            <span>Assunto do Momento em Araruna</span>
            Assuntos do Momento em Araruna
          </p>
          <p>
            <span>Math - Principal Assunto do Momento</span>
            Assuntos sobre o Math Silva
          </p>
        </div>
      </ExplorerStyled>
    </LayoutDefault>
  );
};

export default Explorer;
