import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CommentCard from '../components/CommentCard';
import CreateCommentCard from '../components/CreateCommentCard';
import ReviewDetails from '../components/ReviewDetails';

const Center = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

// the id is available as a prop via the Router
function ReviewDetailsPage({ id }) {
  const INITIAL_STATE = {
    id,
    author: '',
    comment: '',
    published_at: '',
  };
  const [showEdit, setShowEdit] = useState(true);
  const [values, setValues] = useState(INITIAL_STATE);

  // in replace of an http request, we are using local storage to persist comments on unique reviews
  // and retrieving the comment upon first mount
  useEffect(() => {
    // in replace of an http request, we are using local storage to persist comments on unique reviews
    // and retrieving the comment upon first mount
    const commentString = localStorage.getItem(id);
    if (!!commentString) {
      setValues(JSON.parse(commentString));
      setShowEdit(false);
    }
  }, [id]);

  function saveComment(values) {
    // think of the flow here like an POST
    localStorage.setItem(values.id, JSON.stringify(values));
    // GET the values, and set them
    setValues(values);
    setShowEdit(false);
  }

  function deleteComment() {
    // DELETE
    localStorage.removeItem(values.id);
    // 200 success?
    setValues(INITIAL_STATE);
    setShowEdit(true);
  }

  return (
    <Center>
      <ReviewDetails id={id} />
      {showEdit ? (
        <CreateCommentCard id={id} callback={saveComment} initialState={values} />
      ) : (
        <CommentCard values={values} setShowEdit={setShowEdit} deleteComment={deleteComment} />
      )}
    </Center>
  );
}

export default ReviewDetailsPage;
