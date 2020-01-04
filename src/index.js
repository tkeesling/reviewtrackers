import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Reviews from './screens/Reviews';
import metropolis from './static/Metropolis-Regular.woff';

const theme = {
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
};

const StyledApp = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'metropolis';
    src: url(${metropolis}) format("woff");
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
    font-family: metropolis, 'serif';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledApp>
        <Inner>
          <Reviews />
        </Inner>
      </StyledApp>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
