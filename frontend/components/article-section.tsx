import {
  Box,
  Circle,
  Container,
  ContainerProps,
  Divider,
  Flex,
  Grid,
  Image,
  propNames,
  Stack,
  Text,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { Article } from "lib/models/article";
import Link from "next/link";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { getStrapiMedia } from "../lib/media";
import Contributor from "./Contributor";

const MotionBox = motion(Box);

const renderers = {
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

interface Props {
  article: Article;
  _wrapper: ContainerProps;
}

export const ArticleSection = (props: Props) => {
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
      }}>
      <Container maxW="landingMax" {...props._wrapper}>
        <Flex direction="column">
          <Flex direction="column" align="flex-start" maxWidth={["100%", "100%", "100%", "75%"]} m="0 auto" pt={4}>
            <Flex align="center" w="100%" m="0 auto" py={0} justify="space-between">
              <Link href="/">
                <Flex cursor="pointer" align="center" py={0}>
                  <Circle size="30px" bg="rgba(36,31,71,0.07)">
                    <Image src="/chevron-left.svg" />
                  </Circle>
                </Flex>
              </Link>
              <Flex align="center">
                <Text textDecoration="none" color="#6868F7" fontSize="sm" fontWeight="bold">
                  FEATURE
                </Text>
                <Text color="rgba(36,31,71,0.3)" mx={2}>
                  |
                </Text>
                <Text textDecoration="none" color="rgba(36,31,71,0.8)" fontSize="sm">
                  {dayjs(article.publishedAt).format("MMM Do, YYYY")}
                </Text>
              </Flex>
              <Flex cursor="pointer" align="center" py={2} opacity="0">
                <Circle size="30px" bg="rgba(36,31,71,0.07)"></Circle>
              </Flex>
            </Flex>
            <Text
              w="auto"
              fontSize={["5xl", "6xl"]}
              fontWeight="bold"
              m="0 auto"
              textAlign="center"
              lineHeight="shorter">
              {article.title}
            </Text>
            <Flex
              justify="flex-start"
              position="relative"
              height={["200px", "400px", "400px", "450px"]}
              width={["100%", "100%", "100%", "100%"]}
              objectFit="scale-down"
              my={8}>
              <Image objectFit="scale-down" src={getStrapiMedia(article.image)} />
            </Flex>
            <Stack m="0 auto" maxW={["100%", "700px", "700px", "80%"]} px={[2, 0]}>
              <Box mb={16}>
                <ReactMarkdown renderers={renderers} source={article.content} escapeHtml={false} />
              </Box>
              <Divider mb={4} />
              <Grid
                gridTemplateRows="auto"
                templateColumns={["100%", "repeat(auto-fill, minmax(300px, 1fr))"]}
                py={4}
                gap={4}>
                {article.authors.map((author) => (
                  <Contributor author={author} />
                ))}
              </Grid>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </MotionBox>
  );
};
