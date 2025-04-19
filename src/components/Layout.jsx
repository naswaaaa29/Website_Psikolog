import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main> {/* page konten */}
      <Footer />
    </>
  );
};

export default Layout;
