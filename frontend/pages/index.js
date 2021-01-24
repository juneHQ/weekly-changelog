import React from "react";
import ArticleCards from "../components/ArticleCards";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import { Divider, Flex, Stack, Text } from '@chakra-ui/react';

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout>
      <Seo seo={homepage.seo} />
      <>
        <Flex justify='center' alignItems='center' py={8}>
          <Stack>
            <Text textAlign='center' color='black' fontSize='5xl' fontWeight='bold'>{homepage.hero.title}</Text>
            <Text textAlign='center' color='gray.600'>{homepage.hero.subtitle}</Text>
          </Stack>
        </Flex>
        <Divider mb={16}/>
        <ArticleCards articles={articles} />
      </>
    </Layout>
  );
};

export async function getStaticProps() {
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}

export default Home;
