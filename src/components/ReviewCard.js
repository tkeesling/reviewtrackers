import { navigate } from '@reach/router';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import formatDateTime from '../global/formatDateTime';
import StarRow from './StarRow';
import { CardAuthor, CardDate, CardTitle, StyledCard } from './styles/StyledCard';

const propTypes = {
  review: PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    place: PropTypes.string,
    published_at: PropTypes.string,
    rating: PropTypes.number,
  }),
};

const ReviewCard = props => {
  const { id, author, place, published_at: publishedAt, rating } = props.review;

  const goToDetails = () => {
    navigate(`${id}`);
  };

  return (
    <StyledReviewCard onClick={goToDetails}>
      <CardTitle>{place}</CardTitle>
      <StarRow rating={rating} />
      <div className="author-date">
        <CardAuthor>{author}</CardAuthor>
        <CardDate>{formatDateTime(publishedAt)}</CardDate>
      </div>
    </StyledReviewCard>
  );
};

const StyledReviewCard = styled(StyledCard)`
  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: ${props => props.theme.darkBoxShadow};
  }
`;

ReviewCard.propTypes = propTypes;

export default ReviewCard;
