import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiLayout, FiEdit, FiLogOut } from 'react-icons/fi';

import { Header, HeaderText, Nav } from './styles';

const Menu = () => {
  const history = useHistory();

  return (
    <Nav>
      <Header>
        <HeaderText>Anmer.</HeaderText>
      </Header>

      <Link to="/dashboard">
        <span>
          <FiEdit />
          Escrever Nota
        </span>
      </Link>

      <Link to="/allnotes">
        <span>
          <FiLayout />
          Minhas notas
        </span>
      </Link>

      <span
        onClick={() => history.push('/')}
        onKeyPress={() => history.push('/')}
        role="button"
        tabIndex={0}
      >
        <FiLogOut />
        Sair
      </span>
    </Nav>
  );
};

export default Menu;
