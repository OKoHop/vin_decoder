export const Message = ({ message, lastResult }) => {
  return (
    <>
      <p>Serch result by VIN code: {lastResult[0]}</p>
      <p>{message}</p>
    </>
  );
};
