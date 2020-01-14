import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CommentCard from '../components/CommentCard';
import EditCommentFormCard from '../components/EditCommentFormCard';
import ReviewDetailsCard from '../components/ReviewDetailsCard';

const propTypes = {
  id: PropTypes.string,
};

// the id is available as a prop via the Router
const ReviewDetailsPage = ({ id }) => {
  const INITIAL_STATE = {
    id,
    author: '',
    comment: '',
    published_at: '',
  };
  const [showEdit, setShowEdit] = useState(true);
  const [values, setValues] = useState(INITIAL_STATE);

  useEffect(() => {
    // in replace of an http request, we are using local storage to persist comments on unique reviews
    // and retrieving the comment upon first mount
    const commentString = localStorage.getItem(id);
    if (!!commentString) {
      setValues(JSON.parse(commentString));
      setShowEdit(false);
    }
  }, [id]);

  const saveComment = values => {
    // think of the flow here like an POST
    localStorage.setItem(values.id, JSON.stringify(values));
    // GET the values, and set them
    setValues(values);
    setShowEdit(false);
  };

  const deleteComment = () => {
    // DELETE
    localStorage.removeItem(values.id);
    // 200 success?
    setValues(INITIAL_STATE);
    setShowEdit(true);
  };

  return (
    <Center>
      <ReviewDetailsCard id={id} />
      <br />
      {showEdit ? (
        <EditCommentFormCard onSubmit={saveComment} formState={values} />
      ) : (
        <CommentCard values={values} setShowEdit={setShowEdit} deleteComment={deleteComment} />
      )}
    </Center>
  );
};

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

ReviewDetailsPage.propTypes = propTypes;

export default ReviewDetailsPage;
