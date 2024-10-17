import { Link, useLocation } from 'react-router-dom';
import MenuItemStyled from './MenuItemStyled';

interface MenuItemProps {
  label: string;
  icon: string;
  iconActive: string;
  route: string;
}

const MenuItem = ({ label, icon, iconActive, route }: MenuItemProps) => {
  const location = useLocation();
  const active = location.pathname === route;
  return (
    <Link to={route}>
      <MenuItemStyled role="menuItem">
        <img src={active ? iconActive : icon} width="15px" />
        <span className="menuItemLabel">{label}</span>
      </MenuItemStyled>
    </Link>
  );
};

export default MenuItem;
