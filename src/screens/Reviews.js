import React from 'react';
import styled from 'styled-components';
import reviews from '../assets/reviews-data.json';
import ReviewCard from './ReviewCard.js';

const ReviewList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

function Reviews() {
  return (
    <ReviewList>
      {reviews.map(review => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </ReviewList>
  );
}

export default Reviews;
