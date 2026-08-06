import { VariablesItem } from './VariablesItem';
import { nanoid } from 'nanoid';
import { StyleLink, StyledOl } from './VarList.styled';

export const VariablesList = ({ variables }) => {
  return (
    <StyledOl>
      {variables.map(item => {
        return (
          <li key={nanoid()}>
            <StyleLink to={`/variabels/${item.ID}`} state={item}>
              <VariablesItem item={item} />
            </StyleLink>
          </li>
        );
      })}
    </StyledOl>
  );
};
