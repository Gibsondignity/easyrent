/** @jsxRuntime classic */
/** @jsx jsx */


import { css, jsx } from 'theme-ui';
import React, { useState } from 'react';
import ScrollToTop from "react-scroll-to-top";
import Sticky from 'react-stickynode';
import Header from './header/header';
// import Footer from './footer/footer';
import Footer from '../components/Newfooter'

import {SSRProvider} from '@react-aria/ssr';

export default function Layout({ children }) {
  const [isSticky, setIsSticky] = useState(false);
  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  
  return (

    
    <React.Fragment>
      <SSRProvider>
      <ScrollToTop />
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        <Header className={`${isSticky ? 'sticky' : 'unSticky'}`} />
      </Sticky>
      <main
        sx={{
          variant: 'layout.main',
        }}
      >
        {children}
      </main>
      <Footer />
      </SSRProvider>
    </React.Fragment>
    
  );
}
