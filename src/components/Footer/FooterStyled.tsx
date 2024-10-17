import styled from 'styled-components';

const FooterStyled = styled.footer`
  height: 100vh;
  color: #333;
  border-left: 1px solid #a1a1a1c5;
  padding: 40px 50px 0 30px;
  font-family: 'Open Sans', sans-serif;

  .card {
    width: 300px;
    background-color: #eee;
    padding: 15px;
    border-radius: 10px;

    h1 {
      font-size: 0.9em;
      margin-bottom: 20px;
    }

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

    button {
      cursor: pointer;
      color: #1d9bf0;
      font-size: 0.78em;
      margin-top: 10px;
    }
  }
`;

export default FooterStyled;
