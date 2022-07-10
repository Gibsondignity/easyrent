import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/global.css';
import { Provider } from 'react-redux';
import { useStore } from '../store';

// Load Typeface Fonts
import 'typeface-dm-sans';
import 'typeface-bree-serif';
import 'typeface-roboto-slab';

// Load other package css file
import 'rc-drawer/assets/index.css';
const CustomApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);
  
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return (
  <Provider store={store}>
    <Component {...pageProps} />;
  </Provider>
  );
}

export default CustomApp;
