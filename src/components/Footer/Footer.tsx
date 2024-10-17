import FooterStyled from './FooterStyled';

const Footer = () => {
  return (
    <FooterStyled>
      <div className="card">
        <h1>O que está acontecendo?</h1>
        <div>
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
        </div>
        <button>Mostrar mais</button>
      </div>
    </FooterStyled>
  );
};

export default Footer;
