import { nanoid } from 'nanoid';

export const ListOfLastResults = ({ lastResult, updateResult }) => {
  return (
    <ul>
      {lastResult.map(item => {
        return (
          <li key={nanoid()}>
            <button type="button" onClick={() => updateResult(item)}>
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
