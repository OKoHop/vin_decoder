import { useEffect, useState } from 'react';
import { getVariablesData } from '../../components/InputForm/getData';
import toast, { Toaster } from 'react-hot-toast';
import { VariablesList } from '../../components/VariablesList/VariablesList';
import { StyledH2 } from '../Home/Home.styled';

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
        toast.success('Successfully!', { duration: 1000 });
      } catch (err) {
        console.warn(err);
      } finally {
        setIsLoading(false);
      }
    };

    getVarData();
  }, [variables]);

  return (
    <main>
      <div className="container">
        <StyledH2>All variables info</StyledH2>
        {isLoading ? (
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              duration: 2000,
            }}
          />
        ) : (
          <VariablesList variables={variables} />
        )}
      </div>
    </main>
  );
};
