import React from "react";
import ArticleCards from "../components/ArticleCards";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import { Button, Divider, Flex, Stack, Text } from '@chakra-ui/react';

const Home = ({ articles, homepage }) => {
  return (
    <Layout>
      <Seo seo={homepage.seo} />
      <>
        <Flex justify='center' alignItems='center' py={8}>
          <Stack>
            <Text textAlign='center' color='black' fontSize='5xl' fontWeight='bold'>{homepage.hero.title}</Text>
            <Text textAlign='center' color='gray.600'>{homepage.hero.subtitle}</Text>
            <Flex direction={['column', 'row-reverse']} justify='space-between' pt={4}>
              <Button as='a' href='https://june.so' variant='outline' size='sm' colorScheme='gray' textAlign='center' m={1}>Sign up for early access</Button>
              <Button as='a' href='https://twitter.com/JuneDotSo' variant='ghost' size='sm' colorScheme='twitter' textAlign='center' m={1}>Follow us on twitter</Button>
            </Flex>
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
