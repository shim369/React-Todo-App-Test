import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    a {
      padding: 16px 0;
      text-decoration: none;
      color: #f6f7d4;
      font-weight: bold;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #04c67b;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
    <li><a href="https://github.com/shim369" target="_blank" rel="noopener noreferrer">Github</a></li>
    <li><a href="https://ja.reactjs.org/" target="_blank" rel="noopener noreferrer">React</a></li>
    <li><a href="https://dotinstall.com/home" target="_blank" rel="noopener noreferrer">Dotinstall</a></li>
    <li><a href="https://jsprimer.net/" target="_blank" rel="noopener noreferrer">JavaScript Primer</a></li>
    </Ul>
  )
}

export default RightNav