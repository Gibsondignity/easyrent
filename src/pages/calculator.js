import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Layout from 'components/layout';
import Calculator from 'components/Calculator';


export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        
        {/* <CarouselFade /> */}
        <Calculator />
      </Layout>
    </ThemeProvider>
  );
}
