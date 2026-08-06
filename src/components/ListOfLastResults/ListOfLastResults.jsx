import { nanoid } from 'nanoid';
import { StyledUl, StyledListBtn } from './List.styled';

export const ListOfLastResults = ({ lastResult, updateResult }) => {
  return (
    <StyledUl>
      {lastResult.map(item => {
        return (
          <li key={nanoid()}>
            <StyledListBtn type="button" onClick={() => updateResult(item)}>
              {item}
            </StyledListBtn>
          </li>
        );
      })}
    </StyledUl>
  );
};
