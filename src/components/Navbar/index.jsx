import React from 'react';
import styled from 'styled-components';

import Link from 'gatsby-link';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
`;

export default function Navbar() {
  return (
    <Nav>
      <Link to="/carros/">Carros</Link>
      <Link to="/motos/">Motos</Link>
    </Nav>
  );
}
