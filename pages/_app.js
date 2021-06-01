import { ChakraProvider } from '@chakra-ui/react';

import { theme } from 'styles/theme';
import { GlobalStyle } from 'styles/styles';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default MyApp;
