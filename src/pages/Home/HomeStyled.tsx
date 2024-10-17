import styled from 'styled-components';

const HomeStyled = styled.main`
  width: 100%;
  color: #333;
  font-family: 'Open Sans', sans-serif;

  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;

  -ms-overflow-style: none;
  h1 {
    font-size: 1.3em;
    padding: 5px 15px;
    border-bottom: 1px solid #a1a1a1c5;
  }
`;

export default HomeStyled;
