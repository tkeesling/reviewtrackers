import { Router } from '@reach/router';
import React from 'react';
import ReactDOM from 'react-dom';
import Page from './components/Page';
import NotFound from './pages/NotFound';
import ReviewDetailsPage from './pages/ReviewDetailsPage';
import ReviewsPage from './pages/ReviewsPage';

const App = () => {
  return (
    <Page>
      <Router>
        <NotFound default />
        <ReviewsPage path="/" />
        <ReviewDetailsPage path=":id" />
      </Router>
    </Page>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
