import React from 'react';
import ReactDOM from 'react-dom';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';

function App() {
  return (
    <div className='App'>
      <h1>Hello World</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
