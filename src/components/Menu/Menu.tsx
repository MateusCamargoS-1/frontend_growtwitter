import MenuItem from '../MenuItem/MenuItem';

import pageInitial from '../../assets/icone_pagina inicial.svg';
import pageInitialActive from '../../assets/icone_pagina inicial_selecionado.svg';
import explorer from '../../assets/icone_explorar.svg';
import explorerActive from '../../assets/icone_explorar_selecionado.svg';
import profile from '../../assets/icone_perfil.svg';
import profileActive from '../../assets/icone_perfil_selecionado.svg';

const Menu = () => {
  return (
    <ul role="menu">
      <MenuItem label="Página Inicial" icon={pageInitial} iconActive={pageInitialActive} route="/" />

      <MenuItem label="Explorar" icon={explorer} iconActive={explorerActive} route="/explorer" />

      <MenuItem label="Perfil" icon={profile} iconActive={profileActive} route="/profile" />
    </ul>
  );
};

export default Menu;
