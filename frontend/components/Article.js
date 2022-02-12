import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { getStrapiMedia } from "../lib/media";
import {
  Box,
  Flex,
  Text,
  Grid,
  Stack,
  Image,
  Circle,
  Divider,
} from "@chakra-ui/react";
import Contributor from "./Contributor";
import Link from "next/link";
import Nav from "../components/nav";
import Footer from "../components/Footer";
import CreateAccountSection from "../components/CreateAccountSection";
import { motion } from "framer-motion";

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
  /*   text: text => {
    return <p>{text}</p>;
  } */
};

const Card = ({ article }) => {
  const { innerWidth: screenWidth } = global;
  const [isMobile] = useState(screenWidth < 425);
  return (
    <>
      <Flex w="100%">
        <Nav />
      </Flex>
      <Flex display={["block", "none"]} w="100%" h={1} />
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
        <Flex direction="column" pt={["15vh"]} pb={24} px={[4, 32]}>
          <Flex
            direction="column"
            align="flex-start"
            maxWidth={["100%", "100%", "100%", "75%"]}
            m="0 auto"
            pt={4}
          >
            <Flex
              align="center"
              w="100%"
              m="0 auto"
              py={0}
              justify="space-between"
            >
              <Link href="/">
                <Flex cursor="pointer" align="center" py={0}>
                  <Circle size="30px" bg="rgba(36,31,71,0.07)">
                    <Image src="/chevron-left.svg" />
                  </Circle>
                </Flex>
              </Link>
              <Flex align="center">
                <Text
                  textDecoration="none"
                  color="#6868F7"
                  fontSize="sm"
                  fontWeight="bold"
                >
                  FEATURE
                </Text>
                <Text color="rgba(36,31,71,0.3)" mx={2}>
                  |
                </Text>
                <Text
                  textDecoration="none"
                  color="rgba(36,31,71,0.8)"
                  fontSize="sm"
                >
                  <Moment format="MMM Do, YYYY">{article.publishedAt}</Moment>
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
              lineHeight="shorter"
            >
              {article.title}
            </Text>
            <Flex
              justify="flex-start"
              position="relative"
              height={["200px", "400px", "400px", "450px"]}
              width={["100%", "100%", "100%", "100%"]}
              objectFit="scale-down"
              my={8}
            >
              <Image
                objectFit="scale-down"
                src={getStrapiMedia(article.image)}
              />
            </Flex>
            <Stack
              m="0 auto"
              maxW={["100%", "700px", "700px", "80%"]}
              px={[2, 0]}
            >
              <Box mb={16}>
                <ReactMarkdown
                  renderers={renderers}
                  source={article.content}
                  escapeHtml={false}
                />
              </Box>
              <Divider mb={4} />
              <Grid
                gridTemplateRows="auto"
                templateColumns={[
                  "100%",
                  "repeat(auto-fill, minmax(300px, 1fr))",
                ]}
                py={4}
                gap={4}
              >
                {article.authors.map((author) => (
                  <Contributor author={author} />
                ))}
              </Grid>
            </Stack>
          </Flex>
        </Flex>
      </MotionBox>
      <CreateAccountSection />
      <Footer />
    </>
  );
};

export default Card;
