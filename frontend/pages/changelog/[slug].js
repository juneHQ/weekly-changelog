import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { createContext } from "react";
import { ArticleSection } from "../../components/article-section";
import { FooterV2 } from "../../components/core/footer/footer";
import { Navbar } from "../../components/core/navbar/navbar";
import { pageStyles } from "../../components/core/page-styles";
import { TryBanner } from "../../components/core/try-banner";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";

export const GlobalContext = createContext({});

const ArticlePage = ({ article, global }) => {
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  return (
    <GlobalContext.Provider value={global}>
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
          seo={seo}
          defaultSeo={global.defaultSeo}
          siteName={global.siteName}
        />
        <>
          <Navbar />
          <Box w="100%" maxW="100vw" overflow="hidden" zIndex="docked">
            <ArticleSection
              _wrapper={pageStyles.firstSection}
              article={article}
            />
            <TryBanner _wrapper={pageStyles.middleSection} />
            <FooterV2 _wrapper={pageStyles.lastSection} />
          </Box>
        </>
      </Layout>
    </GlobalContext.Provider>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(
    `/articles?slug=${params.slug}&status=published`
  );

  const global = await fetchAPI("/global");

  return {
    props: { article: articles[0], global },
    revalidate: 1,
  };
}

export default ArticlePage;
