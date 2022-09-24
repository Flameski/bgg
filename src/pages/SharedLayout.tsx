import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import StyledNavbar from '../components/StyledNavbar';

interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = (): React.ReactElement => {
  return (
    <>
      <StyledNavbar />
      <section>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default Homepage;
