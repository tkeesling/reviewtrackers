import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Dropdown, DropdownItem, DropdownMenu } from 'styled-dropdown-component';
import { ReactComponent as Ellipsis } from '../assets/icons/ellipsis.svg';

const propTypes = {
  setShowEdit: PropTypes.func,
  deleteComment: PropTypes.func,
};

const SimpleDropdown = ({ setShowEdit, deleteComment }) => {
  const [hidden, setHidden] = useState(true);
  const toggleDropdown = () => setHidden(!hidden);
  const editComment = () => setShowEdit(true);

  return (
    <Dropdown>
      <Button onClick={() => setHidden(!hidden)}>
        <StyledEllipsis />
      </Button>
      <StyledDropdownMenu right hidden={hidden} toggle={toggleDropdown}>
        <DropdownItem onClick={editComment}>Edit</DropdownItem>
        <DropdownItem onClick={deleteComment}>Delete</DropdownItem>
      </StyledDropdownMenu>
    </Dropdown>
  );
};

const StyledDropdownMenu = styled(DropdownMenu)`
  font-size: 1.5rem;
`;

const StyledEllipsis = styled(Ellipsis)`
  height: 25px;
  width: 25px;
  fill: ${props => props.theme.grey};
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  position: relative;
  &:focus,
  &:hover {
    outline: none;
    svg {
      transform: scale(1.05);
      transition: transform 0.15s linear;
    }
  }
`;

Dropdown.propTypes = propTypes;

export default SimpleDropdown;
