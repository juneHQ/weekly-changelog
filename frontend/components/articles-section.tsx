import React from 'react';
import Link from 'next/link';
import { Article } from 'lib/models/article';
import { ArticleViewSection } from 'components/article-view-section';
import {
  Button,
  Container,
  ContainerProps,
  Divider,
  Flex,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';

interface ArticlesSectionProps {
  articles: Article[];
  currentPage?: number;
  _wrapper: ContainerProps;
}

export const ArticlesSection = (props: ArticlesSectionProps) => {
  return (
    <Container maxW="landingMax" pt={[24, 24, 32, 32]}>
      <SimpleGrid columns={1} columnGap={4} rowGap={4} mb={[6, 6, 16]}>
        <Flex direction={"column"} align="center">
          <Text fontSize="5xl" fontWeight="bold">
            Changelog
          </Text>
          <Text fontSize="xl" color="gray.600">
            How June gets better, every week
          </Text>
          <Divider mt={16} mb={8} />
        </Flex>

        {props.articles.map((article) => (
          <Link key={article.slug} href={`/changelog/${article.slug}`} passHref>
            <VStack align="start" cursor="pointer">
              <ArticleViewSection article={article} isHome={true} />
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
