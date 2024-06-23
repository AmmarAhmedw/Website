import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};

  nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }

  nav a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer as={motion.header} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <h1>Ammar Ahmed</h1>
      <nav>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
