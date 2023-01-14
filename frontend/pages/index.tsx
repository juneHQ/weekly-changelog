import { Box } from "@chakra-ui/react";
import { getArticles } from "lib/get-articles";
import Head from "next/head";
import { createContext } from "react";

import { Footer } from "../components/core/footer/footer";
import { Navbar } from "../components/core/navbar/navbar";
import { pageStyles } from "../components/core/page-styles";
import { TryBanner } from "../components/core/try-banner";
import Layout from "../components/layout";

export const GlobalContext = createContext({});

const Home = () => {
  return (
    <>
      <Head>
        <title>June Changelog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="June Changelog" />
        <meta
          name="description"
          content="Discover new updates and improvements to June."
        />
        <meta name="image" content="https://changelog.june.so/social.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://changelog.june.so" />
        <meta property="og:title" content="June Changelog" />
        <meta
          property="og:description"
          content="Discover new updates and improvements to June."
        />
        <meta
          property="og:image"
          content="https://changelog.june.so/social.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://changelog.june.so" />
        <meta name="twitter:title" content="June Changelog" />
        <meta
          name="twitter:description"
          content="Discover new updates and improvements to June."
        />
        <meta
          name="twitter:image"
          content="https://changelog.june.so/social.png"
        />
      </Head>
      <Layout>
        <Navbar />
        <Box w="100%">
          <TryBanner _wrapper={pageStyles.middleSection} />
          <Footer _wrapper={pageStyles.lastSection} />
        </Box>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const articles = getArticles();
  return {
    props: {},
    revalidate: 1,
  };
}

export default Home;
