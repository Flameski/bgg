import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = (): React.ReactElement => {
  return (
    <>
      <Navbar />
      <section>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default Homepage;
