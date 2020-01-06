import React, { useEffect, useState } from 'react';
import reviewData from '../assets/resources/reviews-data.json';
import ReviewCard from './ReviewCard';
import { StyledContent } from './styles/StyledCard';

function ReviewDetails(props) {
  const [review, setReview] = useState({});

  useEffect(() => {
    const theReview = reviewData.find(review => props.id === review.id);
    setReview(theReview);
  }, [props.id]);

  return (
    <ReviewCard review={review}>
      <StyledContent>{review.content}</StyledContent>
    </ReviewCard>
  );
}

export default ReviewDetails;
