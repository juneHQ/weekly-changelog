import React from 'react';
import Link from 'next/link';
import { Article } from 'lib/models/article';
import { pageStyles } from 'components/core/page-styles';
import { ArticleViewSection } from 'components/article-view-section';
import { Button, Container, ContainerProps, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import { defaultPx } from '../lib/utils/default-container-px';

interface ArticlesSectionProps {
  articles: Article[];
  currentPage?: number;
  _wrapper: ContainerProps;
}

export const ArticlesSection = (props: ArticlesSectionProps) => {
  return (
    <Container maxW="landingMax" px={defaultPx(32)}>
      <SimpleGrid
        maxW="2xl"
        columns={1}
        columnGap={4}
        rowGap={4}
        mb={[6, 6, 16]}>
        {props.articles.map((article) => (
          <Link key={article.slug} href={`/changelog/${article.slug}`} passHref>
            <VStack align="start" cursor="pointer">
              <ArticleViewSection
                _wrapper={pageStyles.firstSection}
                article={article}
                isHome={true}
              />
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
