import React from 'react';
import styled from 'styled-components';
import reviews from '../assets/reviews-data.json';
import ReviewCard from './ReviewCard.js';

const Center = styled.div`
  text-align: center;
`;

const ReviewList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

function Reviews() {
  return (
    <Center>
      {reviews.map(review => (
        <ReviewList>
          <ReviewCard key={review.id} review={review} />
        </ReviewList>
      ))}
    </Center>
  );
}

export default Reviews;
