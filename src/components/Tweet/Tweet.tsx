import { Avatar } from '@mui/material';
import TweetStyled from './TweetStyled';

import likeIcon from '../../assets/icone_curtir.svg';
import commentIcon from '../../assets/icone_responder.svg';
import retweetIcon from '../../assets/icone_retweet.svg';
import comIcon from '../../assets/icone_compartilhar.svg';

const Tweet = () => {
  return (
    <TweetStyled>
      <Avatar className="avatar" src="/" />
      <div className="info-tweet">
        <p>
          Micheal Scott <span>@michael_scott</span> • <span>3h</span>
        </p>
        <p>Prefiro ser temido ou amado? Fácil. Ambos. Quero que as pessoas tenham medo do quanto me amam</p>
        <div className="icons">
          <img src={likeIcon} alt="Curtir" />
          <img src={commentIcon} alt="Comentar" />
          <img src={retweetIcon} alt="Retweet" />
          <img src={comIcon} alt="Compartilhar" />
        </div>
      </div>
    </TweetStyled>
  );
};

export default Tweet;
