import Head from "next/head";
import { createContext } from "react";
import { getStrapiMedia } from "../../lib/media";
import Article from "../../components/Article";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

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
        <Article article={article} />
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
