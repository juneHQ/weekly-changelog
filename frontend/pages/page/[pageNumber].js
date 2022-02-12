import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { ArticlesSection } from "../../components/articles-section";
import { FooterV2 } from "../../components/core/footer/footer";
import { Navbar } from "../../components/core/navbar/navbar";
import { pageStyles } from "../../components/core/page-styles";
import { TryBanner } from "../../components/core/try-banner";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";

const Page = ({ articles, homepage, global, params }) => {
  const seo = {
    metaTitle: `Page ${params.pageNumber}`,
    metaDescription: `Page ${params.pageNumber} of the changelog. ${homepage.seo.metaDescription}`,
    shareImage: homepage.seo.image,
  };

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
          seo={seo}
          defaultSeo={global.defaultSeo}
          siteName={global.siteName}
        />
        <>
          <Navbar />
          <Box w="100%" maxW="100vw" overflow="hidden" zIndex="docked">
            <ArticlesSection
              _wrapper={pageStyles.firstSection}
              articles={articles}
              currentPage={Number(params.pageNumber)}
            />
            <TryBanner _wrapper={pageStyles.middleSection} />
            <FooterV2 _wrapper={pageStyles.lastSection} />
          </Box>
        </>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");
  const articlesLength = Math.floor(articles.length / 4);

  const numbers = Array.from(Array(articlesLength), (x, i) => i);

  return {
    paths: numbers.map((number) => ({
      params: {
        pageNumber: number.toString(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [articles, categories, homepage, global] = await Promise.all([
    fetchAPI(
      `/articles?status=published&_limit=4&_start=${
        params.pageNumber * 4
      }&_sort=publishedAt:DESC`
    ),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    fetchAPI("/global"),
  ]);

  return {
    props: { articles, categories, homepage, global, params },
    revalidate: 1,
  };
}

export default Page;
