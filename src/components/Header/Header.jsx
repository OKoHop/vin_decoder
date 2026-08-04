import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/variabels">Variabels</NavLink>
      </nav>
    </header>
  );
};
