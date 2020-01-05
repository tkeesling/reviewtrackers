import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import formatDateTime from '../lib/formatDateTime';
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
    & > * {
      background: white;
      border: 0;
      /* padding: 1rem; */
    }
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
  const { id, author, place, published_at, rating } = review;
  return (
    <StyledReviewCard>
      <Title>{place}</Title>
      <StarRow rating={rating} />
      <div className="author-date">
        <Author>{author}</Author>
        <Date>{formatDateTime(published_at)}</Date>
      </div>
    </StyledReviewCard>
  );
}

ReviewCard.propTypes = {
  review: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ),
};

export default ReviewCard;

// {
//   "id": "5d707203b65083001e956f0a",
//   "author": "Weeks Duran",
//   "place": "Big Johns Burgers",
//   "published_at": "Thu Jun 27 1974 11:46:39 GMT-0500 (Central Daylight Time)",
//   "rating": 5,
//   "content": "Ipsum mollit anim pariatur eu qui velit Lorem ea enim excepteur ut fugiat fugiat esse. Incididunt consectetur deserunt pariatur magna sit dolore voluptate. Minim cupidatat fugiat magna quis consectetur esse id esse adipisicing anim velit. Cillum mollit et nisi ex occaecat labore enim nulla cupidatat. Occaecat Lorem officia est sit enim amet commodo sunt occaecat reprehenderit Lorem culpa. Aute anim ullamco voluptate incididunt incididunt excepteur in irure.\r\n"
// },
