import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Loginpage from 'components/Accounts/Login';


const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
          title="EasyRent Gh"
        />

        <Loginpage />
      </Layout>
    </ThemeProvider>
  );
}


export default IndexPage;