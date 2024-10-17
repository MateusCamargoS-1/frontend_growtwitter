import styled from 'styled-components';

const ExplorerStyled = styled.main`
  width: 100%;
  color: #333;
  font-family: 'Open Sans', sans-serif;
  h1 {
    font-size: 1.3em;
    padding: 5px 20px;
    border-bottom: 1px solid #a1a1a1c5;
  }

  .assuntos {
    margin-top: 25px;
    margin-left: 20px;
    p {
      display: flex;
      flex-direction: column;
      font-size: 0.8em;
      font-weight: 700;
      margin-bottom: 15px;

      span {
        color: #7f7e7e;
        font-weight: 600;
        font-size: 0.88em;
      }
    }
  }
`;

export default ExplorerStyled;
