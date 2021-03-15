import App from "next/app";
import Head from "next/head";
import "../assets/css/style.css";
import { createContext } from "react";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { AnimateSharedLayout } from "framer-motion";

import juneTheme from "../lib/theme/juneTheme";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps, router }) => {
  const { global } = pageProps;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
      </Head>
      <AnimateSharedLayout>
        <ChakraProvider theme={juneTheme}>
          <GlobalContext.Provider value={global}>
            <Component {...pageProps} />
          </GlobalContext.Provider>
        </ChakraProvider>
      </AnimateSharedLayout>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async ctx => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchAPI("/global");
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
