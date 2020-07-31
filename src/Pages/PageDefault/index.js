import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';

// import { Container } from './styles';

function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default PageDefault;
