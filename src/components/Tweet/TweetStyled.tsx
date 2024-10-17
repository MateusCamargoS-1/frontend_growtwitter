import styled from 'styled-components';

const TweetStyled = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 15px;
  border-bottom: 1px solid #c8c8c8;

  .avatar {
    margin-right: 15px;
  }

  .info-tweet {
    flex: 1;

    p {
      margin: 0;

      &:first-child {
        font-weight: bold;
        color: #333;
        display: flex;
        align-items: center;

        span {
          font-size: 0.9em;
          font-weight: normal;
          color: #657786;
          margin: 0 5px;
        }
      }

      &:last-child {
        margin-top: 5px;
        color: #14171a;
      }
    }

    .icons {
      display: flex;
      align-items: center;
      margin-top: 10px;

      img {
        margin-right: 15px;
        cursor: pointer;
        width: 15px;
        height: 20px;
      }
    }
  }
`;

export default TweetStyled;
