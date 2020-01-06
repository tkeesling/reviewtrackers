import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Dropdown, DropdownItem, DropdownMenu } from 'styled-dropdown-component';
import { ReactComponent as Ellipsis } from '../assets/icons/ellipsis.svg';

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

const CustomDropdownMenu = styled(DropdownMenu)`
  font-size: 1.5rem;
`;

function SimpleDropdown(props) {
  const { setShowEdit, deleteComment } = props;
  const [hidden, setHidden] = useState(true);

  return (
    <Dropdown>
      <Button onClick={() => setHidden(!hidden)}>
        <StyledEllipsis />
      </Button>
      <CustomDropdownMenu right hidden={hidden} toggle={() => setHidden(!hidden)}>
        <DropdownItem onClick={() => setShowEdit(true)}>Edit</DropdownItem>
        <DropdownItem onClick={deleteComment}>Delete</DropdownItem>
      </CustomDropdownMenu>
    </Dropdown>
  );
}

Dropdown.propTypes = {
  setShowEdit: PropTypes.func,
  deleteComment: PropTypes.func,
};

export default SimpleDropdown;
