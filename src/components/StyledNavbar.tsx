import React from 'react';
import { NavLink } from 'react-router-dom';

const StyledNavbar: React.FC = (): React.ReactElement => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/games'>Games</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      <NavLink to='/donate'>Donate</NavLink>
      <NavLink to='/login'>Login</NavLink>
    </nav>
  );
};

export default StyledNavbar;
