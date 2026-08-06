import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  gap: 20px;
  text-decoration: none;
  color: inherit;
  margin-bottom: 2em;

  &:hover {
    color: #4f46e5;
  }
`;
