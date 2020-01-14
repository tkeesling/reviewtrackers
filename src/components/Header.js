import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const Header = () => {
  return (
    <StyledHeader>
      <div className="bar">
        <Logo>Reviews</Logo>
        <Nav />
      </div>
    </StyledHeader>
  );
};

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  transform: skew(-7deg);
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.div`
  .bar {
    border-bottom: 10px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
`;

export default Header;
