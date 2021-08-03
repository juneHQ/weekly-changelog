import "../assets/css/style.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimateSharedLayout } from "framer-motion";

import juneTheme from "../lib/theme/juneTheme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <AnimateSharedLayout>
        <ChakraProvider theme={juneTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </AnimateSharedLayout>
    </>
  );
};

export default MyApp;
