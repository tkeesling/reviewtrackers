import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import formatDateTime from '../global/formatDateTime';
import StarRow from './StarRow';

const StyledReviewCard = styled.div`
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.boxShadow};
  position: relative;
  padding: 1rem 1rem;
  display: flex;
  line-height: 1.5rem;
  flex-direction: column;
  .author-date {
    margin-top: 3rem;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }
`;

const Title = styled.h3`
  margin: 1rem 0;
  /* transform: skew(-2deg) rotate(-1deg); */
  font-family: 'metropolis-bold';
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  font-size: 2rem;
`;

const Author = styled.span``;

const Date = styled.span`
  color: ${props => props.theme.grey};
`;

function ReviewCard({ review }) {
  const { id, author, place, published_at: publishedAt, rating } = review;
  return (
    <StyledReviewCard>
      <Title>{place}</Title>
      <StarRow rating={rating} />
      <div className="author-date">
        <Author>{author}</Author>
        <Date>{formatDateTime(publishedAt)}</Date>
      </div>
    </StyledReviewCard>
  );
}

ReviewCard.propTypes = {
  review: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
      published_at: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
    })
  ),
};

export default ReviewCard;
