import React from 'react';
import styled from 'styled-components';
import ReviewDetails from '../components/ReviewDetails';

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

function ReviewDetailsPage({ id }) {
  return (
    <Center>
      <ReviewDetails id={id} />
    </Center>
  );
}

export default ReviewDetailsPage;
