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
  width: 100%;
  .author-date {
    margin-top: 2rem;
    display: flex;
    width: 100%;
  }
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
`;

const CardAuthor = styled.span`
  margin-right: 30px;
`;

const CardDate = styled.span`
  color: ${props => props.theme.grey};
`;

const CardTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 2.2rem;
  font-family: 'metropolis-bold';
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
`;

export { StyledCard, CardTitle, CardContent, CardAuthor, CardDate };
