import Head from "next/head";
import ArticleCards from "../../components/ArticleCards";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { fetchAPI } from "../../lib/api";
import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import Nav from "../../components/nav";
import Footer from "../../components/Footer";
import { getStrapiMedia } from "../../lib/media";
import CreateAccountSection from "../../components/CreateAccountSection";
import Link from "next/link";

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
          <Nav />
          <Flex justify="center" alignItems="center" py={32}>
            <Stack mx={[2, 2]}>
              <Text
                textAlign="center"
                color="#000000"
                fontSize={["5xl", "6xl"]}
                fontWeight="bold"
              >
                {homepage.hero.title}
              </Text>
              <Text textAlign="center" color="gray.600" fontSize={"lg"}>
                {homepage.hero.subtitle}
              </Text>
              <Flex
                direction={["column", "row-reverse"]}
                justify="space-between"
                pt={4}
              >
                <Button
                  bg="#6868F7"
                  as="a"
                  href={`${process.env.NEXT_PUBLIC_APP_HOST}/start`}
                  border="2px solid rgba(36, 31, 71, 0)"
                  colorScheme="templatePurple"
                  px={[4, 6]}
                  py={[4, 6]}
                  my={[2, 4]}
                  mx={[6, 2]}
                  textAlign="center"
                >
                  Sign up
                </Button>
                <Button
                  bg="#ffffff"
                  as="a"
                  href="https://twitter.com/JuneDotSo"
                  border="2px solid rgba(36, 31, 71, 0.2)"
                  colorScheme="gray"
                  px={[4, 6]}
                  py={[4, 6]}
                  my={[2, 4]}
                  mx={[6, 2]}
                  textAlign="center"
                >
                  Follow us on twitter
                </Button>
              </Flex>
            </Stack>
          </Flex>
          <ArticleCards articles={articles} />
          <Flex justify="center" py={4}>
            {params.pageNumber > 0 ? (
              <Link href={`/page/${Number(params.pageNumber) - 1}`}>
                <Button
                  bg="#ffffff"
                  border="2px solid rgba(36, 31, 71, 0.2)"
                  colorScheme="gray"
                  px={[4, 6]}
                  py={[4, 6]}
                  my={[2, 4]}
                  mx={[6, 2]}
                  textAlign="center"
                >
                  Previous page
                </Button>
              </Link>
            ) : undefined}
            <Link href={`/page/${Number(params.pageNumber) + 1}`}>
              <Button
                bg="#ffffff"
                border="2px solid rgba(36, 31, 71, 0.2)"
                colorScheme="gray"
                px={[4, 6]}
                py={[4, 6]}
                my={[2, 4]}
                mx={[6, 2]}
                textAlign="center"
              >
                Next page
              </Button>
            </Link>
          </Flex>
          <CreateAccountSection />
          <Footer />
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
