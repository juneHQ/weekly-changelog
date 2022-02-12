import { Box, Button, Container, ContainerProps, Heading, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { PageHeader } from "./core/page-header";
import { defaultPx } from "../lib/utils/default-container-px";
import { WindowMockBox } from "./core/window-mock-box";

const DUMMY_ARTICLES = [...new Array(4)];

interface ArticlesSectionProps {
  _wrapper: ContainerProps;
}

export const ArticlesSection = (props: ArticlesSectionProps) => {
  return (
    <Container maxW="landingMax" px={defaultPx(32)} {...props._wrapper}>
      <PageHeader title="What's new?" description="New updates and improvements to June." />
      <SimpleGrid columns={[1, 1, 2]} columnGap={6} rowGap={8} mt={[8, 8, 10]} mb={[6, 6, 16]}>
        {DUMMY_ARTICLES.map((_, i) => (
          <Link key={i} href={`/changelog/${i}`} passHref>
            <VStack align="start" spacing={4} cursor="pointer">
              <WindowMockBox _wrapper={{ w: "full" }}>
                <Box
                  h="300px"
                  bg="linear-gradient(129.77deg, #ADABFF 16.97%, #9C88DD 64.88%, #CB8AE8 94.21%);"
                  px={10}
                  pt="30px">
                  <Box bg="white" opacity={0.5} borderTopRadius="base" w="full" h="full">
                    {/* TODO: Add article image here */}
                  </Box>
                </Box>
              </WindowMockBox>
              <HStack>
                <Text fontWeight="bold" fontSize="sm" color="primary">
                  Feature
                </Text>
                <Box h={3} w="1px" bg="landing.gray" />
                <Text fontSize="sm" color="landing.gray">
                  Jan 17th, 2022
                </Text>
              </HStack>
              <Heading as="h3" color="landing.black">
                New users
              </Heading>
            </VStack>
          </Link>
        ))}
      </SimpleGrid>
      <VStack align={["stretch", "stretch", "center"]}>
        <Button variant="landingOutline" size="landingLg">
          Load more
        </Button>
      </VStack>
    </Container>
  );
};
