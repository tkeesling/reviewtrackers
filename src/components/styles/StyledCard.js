import styled from 'styled-components';

const StyledCard = styled.div`
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.boxShadow};
  position: relative;
  padding: 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  line-height: 1.5rem;
  max-width: 1000px;
`;

const StyledAuthor = styled.span`
  margin-right: 30px;
`;

const StyledDate = styled.span`
  color: ${props => props.theme.grey};
`;

export { StyledCard, StyledAuthor, StyledDate };
