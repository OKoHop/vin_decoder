import { StyledNav, StyledNavLink, StyledHeader } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <StyledNav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/variabels">Variabels</StyledNavLink>
        </StyledNav>
      </div>
    </StyledHeader>
  );
};
