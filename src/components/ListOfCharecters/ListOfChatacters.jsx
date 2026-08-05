import { nanoid } from 'nanoid';

export const ListOfChatacters = ({ transList }) => {
  return (
    <ul>
      {transList.map(item => {
        return (
          item.Value !== null && (
            <li key={nanoid()}>
              {item.Variable}: {item.Value}
            </li>
          )
        );
      })}
    </ul>
  );
};
