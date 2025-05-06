import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main> {/* Main content is passed from the page */}
      <Footer />
    </>
  );
};

export default Layout;
