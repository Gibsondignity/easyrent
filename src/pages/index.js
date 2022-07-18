import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Faq from 'components/Faq/Faq';
import CarouselFade from 'components/Slider';
import HowToApply from 'components/HowToApply';
import Stories from 'components/Stories';


export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          description="EasyRent ensures that Ghanaians find affordable and comfortable accommodation with ease, 
          without any financial burden: Let EasyRent take the stress out of your rental 
          experience in Ghana."
          title="EasyRent Gh"
        />
        <CarouselFade />
        <HowToApply />
        <Stories />
        <Faq />
      </Layout>
    </ThemeProvider>
  );
}
