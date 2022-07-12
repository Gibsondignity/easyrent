import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import About from 'components/about';
import Faq from 'components/Faq/Faq';
import Chooseus from 'components/About/WhyChooseUs';

const about = () => {
  return (
    <div>

    <ThemeProvider theme={theme}>
       <Layout>
         <SEO
           description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
           title="EasyRent Gh"
         />

          <About />
          <Chooseus />
          <Faq />
       </Layout>
     </ThemeProvider>

    </div>
  )
}

export default about

