import { navigate } from '@reach/router';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import formatDateTime from '../global/formatDateTime';
import StarRow from './StarRow';
import { StyledAuthor, StyledDate } from './styles/StyledCard';

const StyledReviewCard = styled.div`
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.boxShadow};
  position: relative;
  padding: 1.5rem 1.5rem;
  display: flex;
  line-height: 1.5rem;
  flex-direction: column;
  max-width: 1000px;
  ${props =>
    props.isClickable &&
    css`
      &:hover,
      &:focus {
        cursor: pointer;
        box-shadow: ${props => props.theme.darkBoxShadow};
      }
    `}
  .author-date {
    margin-top: 2rem;
    display: flex;
    width: 100%;
  }
`;

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 2.2rem;
  font-family: 'metropolis-bold';
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
`;

function ReviewCard(props) {
  const isClickable = props.isClickable;
  const { id, author, place, published_at: publishedAt, rating } = props.review;

  function goToDetails() {
    navigate(`details/${id}`);
  }

  return (
    <StyledReviewCard isClickable={isClickable} onClick={goToDetails}>
      <Title>{place}</Title>
      <StarRow rating={rating} />
      {props.children}
      <div className="author-date">
        <StyledAuthor>{author}</StyledAuthor>
        <StyledDate>{formatDateTime(publishedAt)}</StyledDate>
      </div>
    </StyledReviewCard>
  );
}

ReviewCard.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    place: PropTypes.string,
    published_at: PropTypes.string,
    rating: PropTypes.number,
  }),
};

export default ReviewCard;
