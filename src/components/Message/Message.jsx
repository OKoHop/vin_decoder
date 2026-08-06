import { StyledP, StyledP2 } from './Msg.style';

export const Message = ({ message, lastResult }) => {
  return (
    <>
      {lastResult.length > 0 && (
        <StyledP>Serch result by VIN code: {lastResult[0]}</StyledP>
      )}

      <StyledP2>{message}</StyledP2>
    </>
  );
};
