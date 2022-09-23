import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = (): React.ReactElement => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/catalog'>Catalog</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/donate'>Donate</Link>
    </nav>
  );
};

export default Navbar;
