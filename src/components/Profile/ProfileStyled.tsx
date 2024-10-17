import styled from 'styled-components';

const ProfileStyled = styled.div`
  color: #333;
  .loadingBtn {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 10px 0;
  }
  .img-name {
    display: flex;
    margin-bottom: 5px;

    p {
      display: flex;
      flex-direction: column;
      font-size: 0.76em;
      font-family: 'Open Sans', sans-serif;
      font-weight: 700;
      margin-left: 5px;

      span {
        font-size: 0.9em;
        font-weight: 400;
        color: #8a8989;
      }
    }
  }

  button {
    cursor: pointer;
    background-color: transparent;
    font-size: 0.8em;
    margin-left: 5px;
  }
`;

export default ProfileStyled;
