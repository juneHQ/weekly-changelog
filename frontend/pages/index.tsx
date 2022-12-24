import { createContext } from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { TryBanner } from "../components/core/try-banner";
import { pageStyles } from "../components/core/page-styles";
import { Navbar } from "../components/core/navbar/navbar";
import { Footer } from "../components/core/footer/footer";
import { ArticlesSection } from "../components/articles-section";

export const GlobalContext = createContext({});

const Home = ({ articles, homepage, global }) => {
  return (
    <>
      <Head>
        <>
          {global && global.favicon ? (
            <>
              <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
            </>
          ) : undefined}
        </>
      </Head>
      <Layout>
        <Seo
          seo={homepage.seo}
          defaultSeo={global.defaultSeo}
          siteName={global.siteName}
        />
        <>
          <Navbar />
          <Box w="100%">
            <ArticlesSection
              _wrapper={pageStyles.firstSection}
              articles={articles}
            />
            <TryBanner _wrapper={pageStyles.middleSection} />
            <Footer _wrapper={pageStyles.lastSection} />
          </Box>
        </>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const [articles, categories, homepage, global] = await Promise.all([
    fetchAPI("/articles?status=published&_limit=4&_sort=publishedAt:DESC"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    fetchAPI("/global"),
  ]);

  return {
    props: { articles, categories, homepage, global },
    revalidate: 1,
  };
}

export default Home;
