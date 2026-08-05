import { useEffect, useState } from 'react';
import { getVariablesData } from '../../components/InputForm/getData';
import toast, { Toaster } from 'react-hot-toast';
import { VariablesList } from '../../components/VariablesList/VariablesList';

toast.success('Successfully!', { duration: 4000 });

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
