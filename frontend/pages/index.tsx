import Head from "next/head";
import { createContext } from "react";
import ArticleCards from "../components/ArticleCards";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import Nav from "../components/nav";
import Footer from "../components/Footer";
import { getStrapiMedia } from "../lib/media";
import Link from "next/link";
import CreateAccountSection from "../components/CreateAccountSection";
import { Navbar } from "../components/core/navbar/navbar";
import { FooterV2 } from "../components/core/footer/footer";
import { TryBanner } from "../components/core/try-banner";
import { pageStyles } from "../components/core/page-styles";
import { ArticlesSection } from "../components/articles-section";

export const GlobalContext = createContext({});

const Home = ({ articles, homepage, global }) => {
  console.log("🚀 => Home => articles", articles);
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
        <Seo seo={homepage.seo} defaultSeo={global.defaultSeo} siteName={global.siteName} />
        <>
          <Navbar />
          <Box w="100%" maxW="100vw" overflow="hidden" zIndex="docked">
            <ArticlesSection articles={articles} _wrapper={pageStyles.firstSection} />
            <TryBanner _wrapper={pageStyles.middleSection} />
            <FooterV2 _wrapper={pageStyles.lastSection} />
          </Box>
        </>
      </Layout>
    </>
  );

  // return (
  //   <>
  //     <Head>
  //       <>
  //         {global && global.favicon ? (
  //           <>
  //             <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
  //           </>
  //         ) : undefined}
  //       </>
  //     </Head>
  //     <Layout>
  //       <Seo
  //         seo={homepage.seo}
  //         defaultSeo={global.defaultSeo}
  //         siteName={global.siteName}
  //       />
  //       <>
  //         <Nav />
  //         <Flex justify="center" alignItems="center" py={32}>
  //           <Stack mx={[2, 2]}>
  //             <Text
  //               textAlign="center"
  //               color="#000000"
  //               fontSize={["5xl", "6xl"]}
  //               fontWeight="bold"
  //             >
  //               {homepage.hero.title}
  //             </Text>
  //             <Text textAlign="center" color="gray.600" fontSize={"lg"}>
  //               {homepage.hero.subtitle}
  //             </Text>
  //             <Flex
  //               direction={["column", "row-reverse"]}
  //               justify="space-between"
  //               pt={4}
  //             >
  //               <Button
  //                 bg="#6868F7"
  //                 as="a"
  //                 href={`${process.env.NEXT_PUBLIC_APP_HOST}/start`}
  //                 border="2px solid rgba(36, 31, 71, 0)"
  //                 colorScheme="templatePurple"
  //                 px={[4, 6]}
  //                 py={[4, 6]}
  //                 my={[2, 4]}
  //                 mx={[6, 2]}
  //                 textAlign="center"
  //               >
  //                 Sign up
  //               </Button>
  //               <Button
  //                 bg="#ffffff"
  //                 as="a"
  //                 href="https://twitter.com/JuneDotSo"
  //                 border="2px solid rgba(36, 31, 71, 0.2)"
  //                 colorScheme="gray"
  //                 px={[4, 6]}
  //                 py={[4, 6]}
  //                 my={[2, 4]}
  //                 mx={[6, 2]}
  //                 textAlign="center"
  //               >
  //                 Follow us on twitter
  //               </Button>
  //             </Flex>
  //           </Stack>
  //         </Flex>
  //         <ArticleCards articles={articles} />
  //         <Flex justify="center" py={4}>
  //           <Link href="/page/1">
  //             <Button
  //               bg="#ffffff"
  //               border="2px solid rgba(36, 31, 71, 0.2)"
  //               colorScheme="gray"
  //               px={[4, 6]}
  //               py={[4, 6]}
  //               my={[2, 4]}
  //               mx={[6, 2]}
  //               textAlign="center"
  //             >
  //               Load more
  //             </Button>
  //           </Link>
  //         </Flex>
  //         <CreateAccountSection />
  //         <Footer />
  //       </>
  //     </Layout>
  //   </>
  // );
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
