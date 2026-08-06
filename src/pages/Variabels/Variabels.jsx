import { useEffect, useState } from 'react';
import { getVariablesData } from '../../api/getData';
import toast from 'react-hot-toast';
import { VariablesList } from '../../components/VariablesList/VariablesList';
import { StyledH2 } from '../Home/Home.styled';
import { Oval } from 'react-loader-spinner';
import { LoaderWrapper } from './Variabels.style';

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
        toast.success('Data loaded!', { duration: 1000 });
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
          <LoaderWrapper>
            <Oval
              height={80}
              width={80}
              color="#4fa94d"
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </LoaderWrapper>
        ) : (
          <VariablesList variables={variables} />
        )}
        <VariablesList variables={variables} />
      </div>
    </main>
  );
};
