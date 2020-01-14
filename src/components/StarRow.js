import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as StarIcon } from '../assets/icons/star-icon.svg';

const propTypes = {
  rating: PropTypes.number,
};

const defaultProps = {
  rating: 1,
};

const StarRow = ({ rating }) => {
  return (
    <div>
      {[...Array(rating)].map(() => (
        <StyledStarIcon key={Math.random()} />
      ))}
    </div>
  );
};

const StyledStarIcon = styled(StarIcon)`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
`;

StarRow.propTypes = propTypes;
StarRow.defaultProps = defaultProps;

export default StarRow;
