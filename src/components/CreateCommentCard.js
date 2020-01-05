import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import useFormHook from '../global/useFormHook';
import validateForm from '../global/validateForm';
import { StyledCard } from './styles/StyledCard';
import { ErrorText, Form, Label, NameInput, TextInput } from './styles/StyledForm';

const Button = styled.button`
  border-radius: 5px;
  cursor: pointer;
  background: green;
  color:white
  height: 4rem;
  width: 10rem;
  border: none;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  font-size: inherit;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 1;
  }
  &:active {
    transform: scale(0.95);
  }
`;

function CreateCommentCard({ callback, initialState }) {
  const { handleChange, handleSubmit, errors, values } = useFormHook(
    callback,
    initialState,
    validateForm
  );

  return (
    <StyledCard>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Your Name:</Label>
        <NameInput
          name="name"
          onChange={handleChange}
          value={values.name}
          placeholder="Enter your name..."
        />
        {errors.name && <ErrorText>{errors.name}</ErrorText>}
        <Label htmlFor="comment">Comments:</Label>
        <TextInput name="comment" onChange={handleChange} value={values.comment} />
        {errors.comment && <ErrorText>{errors.comment}</ErrorText>}
        <Button type="submit">Submit</Button>
      </Form>
    </StyledCard>
  );
}

CreateCommentCard.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CreateCommentCard;
