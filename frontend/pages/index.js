import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import { Divider, Flex, Stack, Text } from '@chakra-ui/core';

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <div>  
        <Flex justify='center' alignItems='center' py={8}>
          <Stack>
            <Text textAlign='center' color='black' fontSize='5xl' fontWeight='bold'>{homepage.hero.title}</Text>
            <Text textAlign='center' color='gray.600'>{homepage.hero.subtitle}</Text>
          </Stack>
        </Flex>
        <Divider mb={16}/>
        <Articles articles={articles} />
      </div>
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
