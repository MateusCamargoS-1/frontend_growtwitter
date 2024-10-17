import styled from 'styled-components';

const SignupStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #eee;

  display: flex;
  align-items: center;
  justify-content: center;

  .card-container {
    display: flex;
    border-radius: 10px;
    font-family: 'Open Sans', sans-serif;
    box-shadow: 0 0 10px #979797;

    .content-info {
      color: #eee;
      background-color: #1d9bf0;
      padding: 40px 30px 40px 25px;
      border-radius: 10px 0 0 10px;

      h1 {
        color: #fff;
        margin-bottom: 10px;
      }

      span {
        font-size: 0.8em;
      }

      p {
        margin-top: 18px;
        width: 415px;
      }
    }

    .content-form {
      width: 100%;
      padding: 40px 50px;
      background-color: #fff;
      border-radius: 0 10px 10px 0;

      .container-form {
        width: 325px;
        display: flex;
        flex-direction: column;
        align-items: start;
        h1 {
          color: #333;
          font-size: 1.5em;
          margin-bottom: 10px;
        }

        .loadingBtn {
          width: 100%;
          display: flex;
          justify-content: center;
          margin: 10px 0;
        }
      }

      .login {
        font-size: 0.9em;
        color: #333;
        text-align: center;
      }
    }
  }
`;

export default SignupStyled;
