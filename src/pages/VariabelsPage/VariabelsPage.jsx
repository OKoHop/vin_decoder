import { useLocation } from 'react-router-dom';
import arrowleft from '../../../assets/arrow-left.svg';
import { StyledLink } from './VarPage.style';

export const VariabelsPage = () => {
  const location = useLocation();

  const variable = location.state;

  return (
    <main>
      <div className="container">
        <StyledLink to={`/variabels`}>
          <img src={arrowleft} width={20} height={20} />
          <div>Back to variabels</div>
        </StyledLink>
        <p>{variable.Name}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: variable.Description,
          }}
        />
      </div>
    </main>
  );
};
