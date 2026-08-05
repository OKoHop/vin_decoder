export const VariablesItem = ({ item }) => {
  return (
    <>
      {item.Name} :{' '}
      <div dangerouslySetInnerHTML={{ __html: item.Description }} />
    </>
  );
};
