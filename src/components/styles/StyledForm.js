import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  font-size: inherit;
  color: inherit;
  width: 300px;
  margin-bottom: 2rem;
`;

const FormTextarea = styled.textarea`
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  margin-bottom: 2rem;
  height: 10rem;
`;

const FormLabel = styled.label`
  display: flex;
  font-family: 'metropolis-bold';
`;

const FormErrorText = styled.p`
  margin-top: -1rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.red};
`;

export { StyledForm, FormInput, FormTextarea, FormLabel, FormErrorText };
