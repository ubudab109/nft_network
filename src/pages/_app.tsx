import theme from "@styles/theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import DappProvider from "@provider/DappProvider";
import TawkTo from 'tawkto-react'

import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const tawk = new TawkTo("6239cc921ffac05b1d7fd60d","1fuose7tb")
  }, [])
  return (
    <DappProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </DappProvider>
  );
}

export default MyApp;
