import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import formatDateTime from '../global/formatDateTime';
import Dropdown from './SimpleDropdown';
import { StyledAuthor, StyledCard, StyledContent, StyledDate } from './styles/StyledCard';

const TopRight = styled.div`
  position: absolute;
  right: 25px;
  top: 10px;
`;

function CommentCard(props) {
  const { author, comment, published_at } = props.values;
  return (
    <StyledCard>
      <TopRight>
        <Dropdown setShowEdit={props.setShowEdit} deleteComment={props.deleteComment} />
      </TopRight>
      <StyledContent>{comment}</StyledContent>
      <div className="author-date">
        <StyledAuthor>{author}</StyledAuthor>
        <StyledDate>{formatDateTime(published_at)}</StyledDate>
      </div>
    </StyledCard>
  );
}

CommentCard.propTypes = {
  author: PropTypes.string,
  comment: PropTypes.string,
  published_at: PropTypes.string,
};

export default CommentCard;
