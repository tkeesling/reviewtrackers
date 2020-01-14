import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import reviewData from '../assets/resources/reviews-data.json';
import formatDateTime from '../global/formatDateTime';
import StarRow from './StarRow';
import { CardAuthor, CardContent, CardDate, CardTitle, StyledCard } from './styles/StyledCard';

const propTypes = {
  id: PropTypes.string,
};

const ReviewDetails = ({ id }) => {
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
    <StyledCard>
      <CardTitle>{review.place}</CardTitle>
      <StarRow rating={review.rating} />
      <CardContent>{review.content}</CardContent>
      <div className="author-date">
        <CardAuthor>{review.author}</CardAuthor>
        <CardDate>{formatDateTime(review.published_at)}</CardDate>
      </div>
    </StyledCard>
  );
};

ReviewDetails.propTypes = propTypes;

export default ReviewDetails;
