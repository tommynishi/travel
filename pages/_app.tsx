import App, { AppContext, AppProps } from 'next/app'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import basicAuthCheck from './utils/basicAuthCheck';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { req, res } = appContext.ctx;
  if(req && res) {
    basicAuthCheck(req, res);
  }

  const appProps = await App.getInitialProps(appContext);
  return { ...appProps};
} 

export default MyApp
