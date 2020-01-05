import React from 'react';
import styled from 'styled-components';
import reviewData from '../assets/resources/reviews-data';
import ReviewCard from '../components/ReviewCard';

const ReviewList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

function ReviewsPage() {
  return (
    <ReviewList>
      {reviewData.map(review => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </ReviewList>
  );
}

export default ReviewsPage;
