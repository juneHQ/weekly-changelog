import {
  Box,
  chakra,
  Container,
  ContainerProps,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { PageHeader } from "components/core/page-header";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { getStrapiMedia } from "lib/media";
import { Article } from "lib/models/article";
import { defaultPx } from "lib/utils/default-container-px";
import React, { useState } from "react";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import Contributor from "./Contributor";

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
      style={{ color: "#6868F7" }}
    >
      {props.children}
    </Text>
  ),
  ul: ({ node, ...props }) => <UnorderedList spacing={4} {...props} />,
  li: ({ node, ...props }) => (
    <ListItem _before={{ content: "unset" }} {...props} />
  ),
};

interface ArticleViewSectionProps {
  article: Article;
  _wrapper?: ContainerProps;
}

export const ArticleViewSection = (props: ArticleViewSectionProps) => {
  const { article } = props;
  const { innerWidth: screenWidth } = global;

  const [isMobile] = useState(screenWidth < 425);

  const markdown = article.content.replace(/<br>/gi, "");

  return (
    <MotionBox
      initial={{
        opacity: 0,
        x: isMobile ? 0 : 100,
        width: "100vw",
        height: "100%",
      }}
      animate={{
        opacity: 1,
        x: 0,
        width: "100%vw",
        height: "100%",
      }}
      exit={{
        x: 100,
        opacity: 0,
        width: "100%",
        height: "100%",
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
    >
      <Container
        maxW="landingMax"
        pl={defaultPx(32)}
        pr={defaultPx(96)}
        {...props._wrapper}
      >
        <Grid
          gridTemplateColumns={["1fr", "1fr", "1fr 3fr"]}
          mb={[8, 8, "60px"]}
        >
          <GridItem />
          <GridItem>
            <PageHeader
              title="What's new?"
              description="New updates and improvements to June."
              _title={{ as: "h2" }}
            />
          </GridItem>
        </Grid>
        <Grid
          gridTemplateColumns={["1fr", "1fr", "1fr 3fr"]}
          gridTemplateAreas={[
            "'title-thumbnail' 'type-date'",
            "'title-thumbnail' 'type-date'",
            "'type-date title-thumbnail'",
          ]}
          gap={[4, 4, 0]}
        >
          <GridItem gridArea="type-date">
            <Stack
              direction={["row", "row", "column"]}
              align={["center", "center", "start"]}
              spacing={4}
            >
              <Box
                px={4}
                py={2}
                bg="rgba(104, 104, 247, 0.05);"
                borderRadius="6px"
              >
                <Text fontSize="sm" fontWeight="bold" color="primary">
                  Feature
                </Text>
              </Box>
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
              color="landing.almostBlack.500"
            >
              <ReactMarkdown
                skipHtml
                remarkPlugins={[remarkGfm]}
                components={mdComponents}
              >
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
              ]}
            >
              {article.authors.map((author) => (
                <Contributor key={author.id} author={author} />
              ))}
            </Grid>
          </GridItem>
        </Grid>
      </Container>
    </MotionBox>
  );
};
