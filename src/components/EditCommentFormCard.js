import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import useFormHook from '../global/useFormHook';
import validateForm from '../global/validateForm';
import { StyledCard } from './styles/StyledCard';
import { FormErrorText, FormInput, FormLabel, FormTextarea, StyledForm } from './styles/StyledForm';

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formState: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    published_at: PropTypes.string.isRequired,
  }),
};

const EditCommentFormCard = ({ onSubmit, formState }) => {
  const { handleChange, handleSubmit, errors, values } = useFormHook(
    onSubmit,
    formState,
    validateForm
  );

  return (
    <StyledCard>
      <StyledForm onSubmit={handleSubmit}>
        <FormLabel htmlFor="author">Your Name:</FormLabel>
        <FormInput
          name="author"
          onChange={handleChange}
          value={values.author}
          placeholder="Enter your name..."
        />
        {errors.author && <FormErrorText>{errors.author}</FormErrorText>}
        <FormLabel htmlFor="comment">Comments:</FormLabel>
        <FormTextarea name="comment" onChange={handleChange} value={values.comment} />
        {errors.comment && <FormErrorText>{errors.comment}</FormErrorText>}
        <Button type="submit">Submit</Button>
      </StyledForm>
    </StyledCard>
  );
};

const Button = styled.button`
  border-radius: 5px;
  cursor: pointer;
  background: green;
  color: white;
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

EditCommentFormCard.propTypes = propTypes;

export default EditCommentFormCard;
