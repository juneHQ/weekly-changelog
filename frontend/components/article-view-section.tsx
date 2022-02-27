import {
  Box,
  Container,
  ContainerProps,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
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
import ReactMarkdown from "react-markdown";
import Contributor from "./Contributor";

const MotionBox = motion(Box);

const markdownRenderers = {
  root: ({ children }) => (
    <Box fontSize="lg" lineHeight="32px" color="landing.almostBlack.500">
      {children}
    </Box>
  ),
  heading: (args) => {
    return (
      <Heading as="h2" lineHeight="400%" fontSize="xl">
        {args.children}
      </Heading>
    );
  },
  list: UnorderedList,
  image: (image) => {
    return (
      <Flex py={2} justify="center">
        <Image
          src={image.src}
          alt={image.alt}
          h="100%"
          w={["100%", "100%", "100%", "100%"]}
          maxW={["100%", "100%", "700px", "900px"]}
        />
      </Flex>
    );
  },
  link: (link) => {
    return (
      <a href={link.href} style={{ color: "#6868F7" }}>
        {link.children}
      </a>
    );
  },
};

interface ArticleViewSectionProps {
  article: Article;
  _wrapper?: ContainerProps;
}

export const ArticleViewSection = (props: ArticleViewSectionProps) => {
  const { article } = props;
  const { innerWidth: screenWidth } = global;

  const [isMobile] = useState(screenWidth < 425);

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
          mb={[4, 4, "67px"]}
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
                objectFit="cover"
                objectPosition="50% 50%"
                w="full"
                h={["300px", "300px", "unset"]}
                borderRadius="10px"
                shadow="0px 4px 12px rgba(0, 0, 0, 0.15)"
              />
            </VStack>
          </GridItem>
        </Grid>
        <Grid gridTemplateColumns={["1fr", "1fr", "1fr 3fr"]}>
          <GridItem />
          <GridItem>
            <ReactMarkdown
              renderers={markdownRenderers}
              source={article.content}
              escapeHtml={false}
            />
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
