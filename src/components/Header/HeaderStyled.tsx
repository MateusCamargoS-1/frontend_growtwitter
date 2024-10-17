import styled from 'styled-components';

const HeaderStyled = styled.header`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Open Sans', sans-serif;

  border-right: 1px solid #a1a1a1c5;
  padding: 20px 15px 30px 40px;

  .logo {
    img {
      width: 100px;
    }

    margin-bottom: 14px;
  }

  .headerTop {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default HeaderStyled;
