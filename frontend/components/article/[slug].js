import React from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Image from "../../components/image";
import Seo from "../../components/seo";
import { getStrapiMedia } from "../../lib/media";

const Article = ({ article, categories }) => {

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <>
        <Flex justify='space-between' direction={{base: 'column', md: 'row'}} p={2} px={4}>
          <Text pb={2} width={'100%'} textDecoration='none' color='gray.600'><Moment format="MMM Do, YYYY">{article.published_at}</Moment></Text>
          <Stack maxWidth={'900px'} width={['100%', 'auto']}>
            <div>
              <Image borderRadius='lg' src={getStrapiMedia(article.image)} />
            </div>
            <Text fontSize='3xl' py={4}>
              {article.title}
            </Text>
            
            <Box>
              <ReactMarkdown source={article.content} escapeHtml={false} />
            </Box>
            <Grid templateColumns="repeat(2, 1fr)" py={4}>
              {article.authors.map(author => <Flex>
                <div>
                  {author.picture && (
                    <Avatar
                    src={getStrapiMedia(author.picture)}
                    />
                    )}
                </div>
                <Stack pl={4}>
                    <p className="uk-margin-remove-bottom">
                      {author.name}
                    </p>
                    <p className="uk-text-meta uk-margin-remove-top">
                      {author.bio}
                    </p>
                </Stack>
              </Flex>
                    )}
            </Grid>
          </Stack>
        </Flex>
        </>
    </Layout>
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
  const categories = await fetchAPI("/categories");

  return {
    props: { article: articles[0], categories },
    revalidate: 1,
  };
}

export default Article;
