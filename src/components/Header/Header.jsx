import { StyledNav, StyledNavLink } from './Header.styled';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <StyledNav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/variabels">Variabels</StyledNavLink>
        </StyledNav>
      </div>
    </header>
  );
};
