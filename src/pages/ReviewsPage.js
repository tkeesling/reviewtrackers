import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import reviewData from '../assets/resources/reviews-data.json';
import ReviewCard from '../components/ReviewCard';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // simulate a fetch, not sure if I'll have the time to implement some fetcher component
    setReviews(reviewData);
  }, [reviews]);

  return (
    <ReviewList>
      {reviews.map(review => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </ReviewList>
  );
};

const ReviewList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

export default ReviewsPage;
