import { nanoid } from 'nanoid';
import { StyledUl } from '../ListOfLastResults/List.styled';

export const ListOfChatacters = ({ transList }) => {
  return (
    <StyledUl>
      {transList.map(item => {
        return (
          item.Value !== null && (
            <li key={nanoid()}>
              {item.Variable}: {item.Value}
            </li>
          )
        );
      })}
    </StyledUl>
  );
};
