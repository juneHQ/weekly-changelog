import {
  Box,
  Divider,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import { ReactNode } from "@mdx-js/react/lib";
import Contributor from "components/Contributor";
import { Footer } from "components/core/footer/footer";
import { Navbar } from "components/core/navbar/navbar";
import { TryBanner } from "components/core/try-banner";
import dayjs from "dayjs";
import { MdxMeta } from "lib/models/mdx-meta";
import { defaultPx } from "lib/utils/default-container-px";
import type { MDXComponents } from "mdx/types";
import Head from "next/head";

const components: MDXComponents = {
  h1: (props) => (
    <Heading
      as="h1"
      fontSize={["2xl", "2xl", "32px"]}
      color="#000"
      {...props}
    />
  ),
  h2: (props) => (
    <Text fontWeight="bold" fontSize="xl" mt={12} mb={6} {...props} />
  ),
  p: (props) => <Text my={6} {...props} />,
  a: (props) => (
    <Text
      as="a"
      href={props.href}
      rel="noopener noreferrer"
      color="#6868F7"
      fontWeight="bold"
    >
      {props.children}
    </Text>
  ),
  ul: (props) => <UnorderedList spacing={4} {...props} />,
  ol: (props) => <OrderedList spacing={4} {...props} />,
  li: (props) => <ListItem _before={{ content: "unset" }} {...props} />,
};

export interface MdxLayoutProps {
  meta: MdxMeta;
  children: ReactNode;
}

export const MdxLayout = (props: MdxLayoutProps) => {
  const title = `${props.meta.title} | June Changelog`;
  const description = "Discover new updates and improvements to June.";
  const url = "https://changelog.june.so";

  return (
    <MDXProvider components={components}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="image" content={props.meta.headerImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={props.meta.headerImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={props.meta.headerImage} />
      </Head>
      <Box>
        <Navbar />
        <Box w="full" maxW="100vw" overflow="hidden" zIndex="docked">
          <Box mt={[86, 86, 140]} maxW="4xl" mx="auto" px={defaultPx(32)}>
            {/* Article header */}
            <VStack align="start" spacing={[4, 4, 6]}>
              <VStack align="start">
                <Text fontSize="sm" color="landing.gray">
                  {dayjs(props.meta.publishedAt).format("MMM Do YYYY")}
                </Text>
                <Heading as="h1" fontSize={["2xl", "2xl", "32px"]} color="#000">
                  {props.meta.title}
                </Heading>
              </VStack>
              <Image
                borderRadius="md"
                src={props.meta.headerImage}
                alt={props.meta.title}
                w="full"
              />
            </VStack>
            {/* Article content */}
            <Box px={[6]} pt={[10]}>
              {props.children}
            </Box>
            {/* Article authors */}
            <Divider mt={16} mb={8} />
            <VStack px={[6]} align="start" spacing={4}>
              {props.meta.authors.map((author) => (
                <Contributor key={author.name} {...author} />
              ))}
            </VStack>
          </Box>
          <TryBanner _wrapper={{ my: [50, 50, 120] }} />
          <Footer _wrapper={{ mt: [50, 50, 120], mb: 20 }} />
        </Box>
      </Box>
    </MDXProvider>
  );
};
