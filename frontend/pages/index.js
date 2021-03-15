import React from "react";
import ArticleCards from "../components/ArticleCards";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import { Button, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import Nav from "../components/nav";
import Footer from "../components/Footer";
import CreateAccountSection from "../components/CreateAccountSection";

const Home = ({ articles, homepage }) => {
  return (
    <Layout>
      <Seo seo={homepage.seo} />
      <>
        <Nav />
        <Flex justify="center" alignItems="center" py={32}>
          <Stack mx={[2, 2]}>
            <Text
              textAlign="center"
              color="black"
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
                href={`${process.env.JUNE_APP_HOST}/start`}
                border="2px solid rgba(36, 31, 71, 0)"
                colorScheme="templatePurple"
                px={[4, 6]}
                py={[4, 6]}
                my={[2, 4]}
                mx={[6, 2]}
                textAlign="center"
              >
                Sign up for early access
              </Button>
              <Button
                bg="#ffffff"
                as="a"
                href={`${process.env.JUNE_APP_HOST}/start`}
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
        <CreateAccountSection />
        <Footer />
      </>
    </Layout>
  );
};

export async function getStaticProps() {
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage")
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1
  };
}

export default Home;
