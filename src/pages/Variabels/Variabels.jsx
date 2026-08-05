import { useEffect, useState } from 'react';
import { getVariablesData } from '../../components/InputForm/getData';
import { Toaster } from 'react-hot-toast';
import { VariablesList } from '../../components/VariablesList/VariablesList';

export const Variabels = () => {
  const [variables, setVariables] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getVarData = async () => {
      if (variables.length > 0) return;
      try {
        setIsLoading(true);
        const data = await getVariablesData();

        setVariables(data.Results);
        console.log(data.Results);
      } catch (err) {
        console.warn(err);
      } finally {
        setIsLoading(false);
      }
    };

    getVarData();
  }, [variables]);

  return (
    <>
      <h2>This is variables page</h2>
      {isLoading ? (
        <Toaster position="top-center" reverseOrder={false} />
      ) : (
        <VariablesList variables={variables} />
      )}
    </>
  );
};
