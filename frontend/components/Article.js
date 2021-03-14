import React from "react";
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
  Divider
} from "@chakra-ui/react";
import Contributor from "./Contributor";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Nav from "../components/nav";
import Footer from "../components/Footer";
import CreateAccountSection from "../components/CreateAccountSection";

const MyParagraph = props => (
  <Text>This is inside MyParagraph, and the value is {props.children}</Text>
);

const renderers = {
  image: image => {
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
  link: link => {
    return (
      <a href={link.href} style={{ color: "#6868F7" }}>
        {link.children}
      </a>
    );
  }
  /*   text: text => {
    return <MyParagraph>{text}</MyParagraph>;
  } */
};

const Card = ({ article }) => {
  return (
    <>
      <Nav />
      <Flex direction="column" pt={["15vh"]} pb={24} px={[4, 32]}>
        <Flex
          direction="column"
          align="flex-start"
          maxWidth={["100%", "60%"]}
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
          <Text w="auto" fontSize="6xl" fontWeight="bold" m="0 auto">
            {article.title}
          </Text>
          <Flex
            justify="flex-start"
            position="relative"
            height={["200px", "400px", "400px", "450px"]}
            width={["100%", "700px", "700px", "100%"]}
            objectFit="scale-down"
            my={8}
          >
            <Image objectFit="scale-down" src={getStrapiMedia(article.image)} />
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
                "repeat(auto-fill, minmax(300px, 1fr))"
              ]}
              py={4}
              gap={4}
            >
              {article.authors.map(author => (
                <Contributor author={author} />
              ))}
            </Grid>
          </Stack>
        </Flex>
      </Flex>
      <CreateAccountSection />
      <Footer />
    </>
  );
};

export default Card;
