import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import AboutBody from 'components/about';
import Faq from 'components/Faq/Faq';
import Chooseus from 'components/About/WhyChooseUs';

const about = () => {
  return (
    <div>

    <ThemeProvider theme={theme}>
       <Layout>
         <SEO
           description="EasyRent ensures that Ghanaians find affordable and comfortable accommodation with ease, 
           without any financial burden: Let EasyRent take the stress out of your rental 
           experience in Ghana."
           title="EasyRent Gh"
         />

          <AboutBody />
          {/* <Chooseus /> */}
          {/* <Faq /> */}
       </Layout>
     </ThemeProvider>

    </div>
  )
}

export default about

