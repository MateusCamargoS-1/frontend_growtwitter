import HeaderStyled from './HeaderStyled';

import logoGrow from '../../assets/logo_growtweet.svg';
import Menu from '../Menu/Menu';
import Profile from '../Profile/Profile';
import ButtonDefault from '../ButtonDefault/ButtonDefault';

const Header = () => {
  return (
    <HeaderStyled>
      <div className="headerTop">
        <div className="logo">
          <img src={logoGrow} alt="logo growtweet" />
        </div>
        <nav>
          <Menu />
        </nav>
        <ButtonDefault label="Tweetar" onClick={() => alert('Show')} borderRadius="50px" margin="10px 0 0 -10px" />
      </div>

      <Profile />
    </HeaderStyled>
  );
};

export default Header;
