import remarkGfm from 'remark-gfm';
import ReactMarkdown, { Components } from 'react-markdown';
import React from 'react';
import { defaultPx } from 'lib/utils/default-container-px';
import { Article } from 'lib/models/article';
import { getStrapiMedia } from 'lib/media';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';
import {
  Box,
  Container,
  ContainerProps,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import Contributor from './Contributor';

const MotionBox = motion(Box);

const mdComponents: Components = {
  h2: ({ node, ...props }) => (
    <Text fontWeight="bold" fontSize="xl" mt={12} mb={6} {...props} />
  ),
  p: ({ node, ...props }) => <Text my={6} {...props} />,
  a: (props) => (
    <Text
      as="a"
      href={props.href}
      rel="noopener noreferrer"
      color="#6868F7"
      fontWeight="bold">
      {props.children}
    </Text>
  ),
  ul: ({ node, ...props }) => <UnorderedList spacing={4} {...props} />,
  ol: ({ node, ...props }) => <OrderedList spacing={4} {...props} />,
  li: ({ node, ...props }) => (
    <ListItem _before={{ content: "unset" }} {...props} />
  ),
};

interface ArticleViewSectionProps {
  article: Article;
  _wrapper?: ContainerProps;
  isHome?: boolean;
}

export const ArticleViewSection = (props: ArticleViewSectionProps) => {
  const { article, isHome } = props;

  const markdown = article.content.replace(/<br>/gi, "");

  return (
    <MotionBox
      animate={{
        x: 0,
        width: "100vw",
        height: "100%",
      }}
      exit={{
        x: 100,
        width: "100%",
        height: "100%",
      }}>
      <Container
        maxW="landingMax"
        pl={defaultPx(32)}
        pr={defaultPx(96)}
        {...props._wrapper}>
        <Grid
          gridTemplateColumns={["1fr", "1fr", "1fr 3fr"]}
          gridTemplateAreas={[
            "'type-date' 'title-thumbnail'",
            "'type-date' 'title-thumbnail'",
            "'type-date title-thumbnail'",
          ]}
          gap={[4, 4, 0]}>
          <GridItem gridArea="type-date">
            <Stack
              direction={["row", "row", "column"]}
              align={["center", "center", "start"]}>
              <Text fontSize="sm" color="landing.gray">
                {dayjs(article.publishedAt).format("MMM Do, YYYY")}
              </Text>
            </Stack>
          </GridItem>
          <GridItem gridArea="title-thumbnail">
            <VStack align="start" spacing={[4, 4, 6]}>
              <Heading as="h1" fontSize={["2xl", "2xl", "32px"]} color="#000">
                {article.title}
              </Heading>
              <Image
                src={getStrapiMedia(article.image)}
                alt={article.title}
                w="full"
              />
            </VStack>
          </GridItem>
        </Grid>
        <Grid gridTemplateColumns={["1fr", "1fr", "1fr 3fr"]}>
          <GridItem />
          <GridItem mt={[0, 0, 10]}>
            <Box
              fontSize="lg"
              lineHeight="32px"
              color="landing.almostBlack.500">
              <ReactMarkdown
                skipHtml
                remarkPlugins={[remarkGfm]}
                components={mdComponents}>
                {markdown}
              </ReactMarkdown>
            </Box>
            <Divider mt={16} mb={8} />
            <Grid
              gap={4}
              gridTemplateRows="auto"
              templateColumns={[
                "100%",
                "repeat(auto-fill, minmax(300px, 1fr))",
              ]}>
              {!isHome &&
                article.authors.map((author) => (
                  <Contributor key={author.id} author={author} />
                ))}
            </Grid>
          </GridItem>
        </Grid>
      </Container>
    </MotionBox>
  );
};
