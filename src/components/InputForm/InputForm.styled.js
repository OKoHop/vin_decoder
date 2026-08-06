import { Field, ErrorMessage, Form } from 'formik';
import { styled } from 'styled-components';
import { media } from '../../styles/breakpoints';

export const StyledField = styled(Field)`
  border-radius: 10px;
  margin-bottom: 1em;

  &::placeholder {
    text-align: center;
  }

  @media ${media.tablet} {
    margin-bottom: 2em;
    width: 200px;
    height: 20px;
  }

  @media ${media.desktop} {
    magrin-bottom: 3em;
    width: 400px;
    height: 30px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  padding: auto;
`;

export const StyledErrMsg = styled(ErrorMessage)`
  color: red;
`;

export const StyledButton = styled.button`
  background: transparent;
  border-radius: 10px;
  border: 2px solid #1d268b;
  color: #1e53cf;
  margin: 1em 1em;
  padding: auto;
  width: 160px;

  @media ${media.tablet} {
    margin: 2em 2em;
    width: 200px;
    height: 20px;
  }

  @media ${media.desktop} {
    margin: 3em 3em;
    width: 400px;
    height: 30px;
  }
`;
