import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';


const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header />
      <main className="content-wrapper">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
