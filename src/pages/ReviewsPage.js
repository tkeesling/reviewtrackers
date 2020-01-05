import React from 'react';
import styled from 'styled-components';
import reviewData from '../assets/resources/reviews-data.json';
import ReviewCard from '../components/ReviewCard';

const ReviewList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

function ReviewsPage() {
  const [reviews, setReviews] = React.useState([]);

  React.useEffect(() => {
    // simulate a fetch, not sure if I'll have the time to implement some fetcher component
    setReviews(reviewData);
  }, [reviews]);

  return (
    <ReviewList>
      {reviews.map(review => (
        <ReviewCard isClickable key={review.id} review={review} />
      ))}
    </ReviewList>
  );
}

export default ReviewsPage;
