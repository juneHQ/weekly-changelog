import {
  Box,
  Button,
  Container,
  ContainerProps,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { getStrapiMedia } from "lib/media";
import { Article } from "lib/models/article";
import Link from "next/link";
import React from "react";
import { defaultPx } from "../lib/utils/default-container-px";
import { PageHeader } from "./core/page-header";
import { WindowMockBox } from "./core/window-mock-box";

interface ArticlesSectionProps {
  articles: Article[];
  currentPage?: number;
  _wrapper: ContainerProps;
}

export const ArticlesSection = (props: ArticlesSectionProps) => {
  return (
    <Container maxW="landingMax" px={defaultPx(32)} {...props._wrapper}>
      <PageHeader
        title="What's new?"
        description="New updates and improvements to June."
      />
      <SimpleGrid
        columns={[1, 1, 2]}
        columnGap={6}
        rowGap={8}
        mt={[8, 8, 10]}
        mb={[6, 6, 16]}
      >
        {props.articles.map((article) => (
          <Link key={article.slug} href={`/changelog/${article.slug}`} passHref>
            <VStack align="start" spacing={4} cursor="pointer">
              <WindowMockBox _wrapper={{ w: "full" }}>
                <Box
                  h="300px"
                  bg="linear-gradient(129.77deg, #ADABFF 16.97%, #9C88DD 64.88%, #CB8AE8 94.21%);"
                  px={[2, 2, 10]}
                  pt={[2, 2, "30px"]}
                >
                  <Image
                    src={getStrapiMedia(article.image)}
                    alt={article.title}
                    objectFit="cover"
                    borderTopRadius="base"
                    w="full"
                    h="full"
                    bg="whiteAlpha.500"
                  />
                </Box>
              </WindowMockBox>
              <HStack>
                <Text fontWeight="bold" fontSize="sm" color="primary">
                  Feature
                </Text>
                <Box h={3} w="1px" bg="landing.gray" />
                <Text fontSize="sm" color="landing.gray">
                  {dayjs(article.publishedAt).format("MMM Do, YYYY")}
                </Text>
              </HStack>
              <Heading as="h3" fontSize="2xl" color="landing.black">
                {article.title}
              </Heading>
            </VStack>
          </Link>
        ))}
      </SimpleGrid>
      <VStack align={["stretch", "stretch", "center"]}>
        {props.currentPage === undefined ? (
          <Link href="/page/1">
            <Button variant="landingOutline" size="landingLg">
              Load more
            </Button>
          </Link>
        ) : (
          <HStack justifyContent="center" spacing={4}>
            {props.currentPage > 0 && (
              <Link href={`/page/${props.currentPage - 1}`}>
                <Button variant="landingOutline" size="landingLg">
                  Previous page
                </Button>
              </Link>
            )}
            <Link href={`/page/${props.currentPage + 1}`}>
              <Button variant="landingOutline" size="landingLg">
                Next page
              </Button>
            </Link>
          </HStack>
        )}
      </VStack>
    </Container>
  );
};
