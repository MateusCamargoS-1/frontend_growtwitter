import Tweet from '../../components/Tweet/Tweet';
import LayoutDefault from '../../config/layout/LayoutDefault';
import HomeStyled from './HomeStyled';

const Home = () => {
  return (
    <LayoutDefault>
      <HomeStyled>
        <h1>Página Inicial</h1>
        <Tweet />
      </HomeStyled>
    </LayoutDefault>
  );
};

export default Home;
