import React from 'react';
import logo from '../images/logo.png';
import { StyledNav, StyledNavLink } from './ui';

const Navbar: React.FC = (): React.ReactElement => {
  return (
    <StyledNav>
      <div>
        <img src={logo} alt='Website logo' />
      </div>
      <StyledNavLink to='/' end>
        {/* 'end' prop removes the 'active' class when not on the home route */}
        Home
      </StyledNavLink>
      <StyledNavLink to='/games'>Games</StyledNavLink>
      <StyledNavLink to='/about'>About</StyledNavLink>
      <StyledNavLink to='/contact'>Contact</StyledNavLink>
      <StyledNavLink to='/donate'>Donate</StyledNavLink>
      <StyledNavLink to='/login'>Login</StyledNavLink>
    </StyledNav>
  );
};

export default Navbar;
