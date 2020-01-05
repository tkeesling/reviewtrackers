import { Router } from '@reach/router';
import React from 'react';
import ReactDOM from 'react-dom';
import Page from './components/Page';
import ReviewsPage from './pages/ReviewsPage';

function App() {
  return (
    <Page>
      <Router>
        <ReviewsPage path="/" />
      </Router>
    </Page>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
