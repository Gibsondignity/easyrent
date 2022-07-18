import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Services from 'components/Services';


const service = () => {
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

            <Services />
       </Layout>
     </ThemeProvider>

    </div>
  )
}

export default service;


