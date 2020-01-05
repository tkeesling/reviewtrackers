import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import starIcon from '../assets/star-icon.svg';

const StarIcon = styled.svg`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
  border: none;
  background: url(${starIcon});
  background-size: contain;
`;

function StarRow({ rating }) {
  return (
    <div>
      {[...Array(rating)].map(() => (
        <StarIcon />
      ))}
    </div>
  );
}

StarRow.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default StarRow;
