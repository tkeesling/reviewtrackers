import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ReplyIcon } from '../assets/icons/reply.svg';
import formatDateTime from '../global/formatDateTime';
import Dropdown from './SimpleDropdown';
import { CardAuthor, CardContent, CardDate, StyledCard } from './styles/StyledCard';

const propTypes = {
  author: PropTypes.string,
  comment: PropTypes.string,
  published_at: PropTypes.string,
  setShowEdit: PropTypes.func,
  deleteComment: PropTypes.func,
};

const CommentCard = (props) => {
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
      <CardContent>
        <StyledReplyIcon />
        <p>{comment}</p>
      </CardContent>
      <div className="author-date">
        <CardAuthor>{author}</CardAuthor>
        <CardDate>{formatDateTime(published_at)}</CardDate>
      </div>
    </StyledCard>
  );
}

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

CommentCard.propTypes = propTypes;

export default CommentCard;
