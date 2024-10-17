import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import GlobalStyled from '../GlobalStyled';
import LayoutDefaultStyled from './LayoutDefaulStyle';

interface LayoutDefaultProps {
  children: React.ReactNode;
}

const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <LayoutDefaultStyled>
      <GlobalStyled />
      <Header />
      {children}
      <Footer />
    </LayoutDefaultStyled>
  );
};

export default LayoutDefault;
