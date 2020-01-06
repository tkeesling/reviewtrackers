import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ReplyIcon } from '../assets/icons/reply.svg';
import formatDateTime from '../global/formatDateTime';
import Dropdown from './SimpleDropdown';
import { StyledAuthor, StyledCard, StyledContent, StyledDate } from './styles/StyledCard';

const TopRight = styled.div`
  position: absolute;
  right: 15px;
  top: 0;
`;

const StyledReplyIcon = styled(ReplyIcon)`
  height: 15px;
  width: 15px;
  min-width: 15px;
  margin-right: 10px;
  fill: ${props => props.theme.grey};
`;

function CommentCard(props) {
  const {
    values: { author, comment, published_at },
    setShowEdit,
    deleteComment,
  } = props;
  return (
    <StyledCard>
      <TopRight>
        <Dropdown setShowEdit={setShowEdit} deleteComment={deleteComment} />
      </TopRight>
      <StyledContent>
        <StyledReplyIcon />
        <p>{comment}</p>
      </StyledContent>
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
  setShowEdit: PropTypes.func,
  deleteComment: PropTypes.func,
};

export default CommentCard;
