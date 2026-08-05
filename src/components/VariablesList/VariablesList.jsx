import { VariablesItem } from './VariablesItem';
import { nanoid } from 'nanoid';

export const VariablesList = ({ variables }) => {
  return (
    <ul>
      {variables.map(item => {
        return (
          <li key={nanoid()}>
            <VariablesItem item={item} />
          </li>
        );
      })}
    </ul>
  );
};
