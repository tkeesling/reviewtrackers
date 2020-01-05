import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import reviewData from '../assets/resources/reviews-data.json';
import ReviewCard from './ReviewCard';

const StyledContent = styled.p``;

function ReviewDetails({ id }) {
  const [review, setReview] = useState({});

  useEffect(() => {
    const theReview = reviewData.find(review => id === review.id);
    setReview(theReview);
  }, [id]);

  return (
    <ReviewCard review={review}>
      <StyledContent>{review.content}</StyledContent>
    </ReviewCard>
  );
}

export default ReviewDetails;
