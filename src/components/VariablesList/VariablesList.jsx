import { VariablesItem } from './VariablesItem';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

export const VariablesList = ({ variables }) => {
  return (
    <ul>
      {variables.map(item => {
        return (
          <li key={nanoid()}>
            <Link to={`/variabels/${item.ID}`} state={item}>
              <VariablesItem item={item} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
