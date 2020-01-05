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
  const [showEdit, setShowEdit] = useState(true);
  const [values, setValues] = useState({
    id,
    name: '',
    comment: '',
    published_at: '',
  });

  // in replace of an http request, we are using local storage to persist comments on unique reviews
  useEffect(() => {
    const commentString = localStorage.getItem(id);
    if (!!commentString) {
      setValues(JSON.parse(commentString));
      setShowEdit(false);
    }
  }, [id]);

  function saveComment(values) {
    localStorage.setItem(values.id, JSON.stringify(values));
    setValues(values);
    setShowEdit(false);
  }

  return (
    <Center>
      <ReviewDetails id={id} />
      {showEdit ? (
        <CreateCommentCard id={id} callback={saveComment} initialState={values} />
      ) : (
        <CommentCard values={values} />
      )}
    </Center>
  );
}

export default ReviewDetailsPage;
