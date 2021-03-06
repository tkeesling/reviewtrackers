import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import metropolisBold from '../assets/fonts/Metropolis-Bold.woff';
import metropolis from '../assets/fonts/Metropolis-Regular.woff';
import Header from './Header';

const Page = props => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledPage>
        <Header />
        <Inner>{props.children}</Inner>
      </StyledPage>
    </ThemeProvider>
  );
};

const theme = {
  black: '#393939',
  grey: '#9D9D9D',
  lightGrey: '#E1E1E1',
  red: 'red',
  offWhite: '#EDEDED',
  maxWidth: '1200px',
  boxShadow: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  darkBoxShadow: '0 12px 24px 0 rgba(0, 0, 0, 0.2)',
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'metropolis';
    src: url(${metropolis}) format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'metropolis-bold';
    src: url(${metropolisBold});
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: metropolis, serif;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

export default Page;
