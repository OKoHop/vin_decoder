import { useLocation } from 'react-router-dom';

export const VariabelsPage = () => {
  const location = useLocation();

  const variable = location.state;
  console.log(variable);

  return (
    <>
      <p>{variable.Name}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: variable.Description,
        }}
      />
    </>
  );
};
