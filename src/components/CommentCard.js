import React from 'react';
import { StyledCard } from './styles/StyledCard';

function CommentCard({ values }) {
  const { id, name, comment, published_at } = values;
  return <StyledCard></StyledCard>;
}

CommentCard.propTypes = {};

export default CommentCard;
