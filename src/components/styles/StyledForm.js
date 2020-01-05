import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const NameInput = styled.input`
  font-size: inherit;
  color: inherit;
  width: 300px;
  margin-bottom: 2rem;
`;

const TextInput = styled.textarea`
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  margin-bottom: 2rem;
  height: 10rem;
`;

const Label = styled.label`
  display: flex;
  font-family: 'metropolis-bold';
`;

const ErrorText = styled.p`
  margin-top: -1rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.red};
`;

export { Form, NameInput, TextInput, Label, ErrorText };
