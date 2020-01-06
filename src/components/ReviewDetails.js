import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import reviewData from '../assets/resources/reviews-data.json';
import ReviewCard from './ReviewCard';
import { StyledContent } from './styles/StyledCard';

function ReviewDetails(props) {
  const { id } = props;
  const [review, setReview] = useState({
    id: '',
    author: '',
    comment: '',
    content: '',
    published_at: '',
  });

  useEffect(() => {
    const theReview = reviewData.find(review => id === review.id);
    if (theReview) {
      setReview(theReview);
    }
  }, [id]);

  return (
    <ReviewCard review={review}>
      <StyledContent>
        <p>{review.content}</p>
      </StyledContent>
    </ReviewCard>
  );
}

ReviewDetails.propTypes = {
  id: PropTypes.string,
};

export default ReviewDetails;
