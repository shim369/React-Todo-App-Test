import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: flex-end;
`

const Navbar = () => {
  return (
    <header>
      <div className="header-inner">
          <h1>React Todo App</h1>
        <Nav>
          <Burger />
        </Nav>
      </div>
    </header>
  )
}

export default Navbar