import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Footer } from "components/core/footer/footer";
import { Navbar } from "components/core/navbar/navbar";
import { pageStyles as styles } from "components/core/page-styles";
import { TryBanner } from "components/core/try-banner";
import { getArticleSlugs } from "lib/get-articles-slugs";
import { defaultPx } from "lib/utils/default-container-px";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const ARTICLES_PER_PAGE = 4;

const Page = ({ slugs }) => {
  const router = useRouter();
  const page = parseInt(router.query.page as string);

  const metaTitle = `${page > 0 ? `Page ${page} -` : ""} June Changelog`;

  const Articles = slugs.map((slug) =>
    dynamic(() => import(`../changelogs/${slug}.mdx`))
  );

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={metaTitle} />
        <meta
          name="description"
          content="Discover new updates and improvements to June."
        />
        <meta name="image" content="https://changelog.june.so/social.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://changelog.june.so" />
        <meta property="og:title" content={metaTitle} />
        <meta
          property="og:description"
          content="Discover new updates and improvements to June."
        />
        <meta
          property="og:image"
          content="https://changelog.june.so/social.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://changelog.june.so" />
        <meta name="twitter:title" content={metaTitle} />
        <meta
          name="twitter:description"
          content="Discover new updates and improvements to June."
        />
        <meta
          name="twitter:image"
          content="https://changelog.june.so/social.png"
        />
      </Head>
      <Navbar />
      <Box w="full" maxW="100vw" overflow="hidden" zIndex="docked">
        <Container maxW="landingMax" px={defaultPx(32)} mt={[86, 86, 140]}>
          <VStack>
            <Heading as="h1" fontSize={["5xl"]} color="black">
              Changelog
            </Heading>
            <Text fontSize="xl" color="gray.700">
              How June gets better, every week
            </Text>
          </VStack>
          <Divider my={16} />
          <VStack spacing={16} divider={<Divider />}>
            {Articles.map((Article, index) => (
              <Article
                key={index}
                hideLayout={true}
                hideHead={true}
                hideAuthors={true}
              />
            ))}
            <VStack align={["stretch", "stretch", "center"]}>
              {page === 0 ? (
                <Link href="/page/1">
                  <Button variant="landingOutline" size="landingLg">
                    Load more
                  </Button>
                </Link>
              ) : (
                <HStack justifyContent="center" spacing={4}>
                  {page > 0 && (
                    <Link href={`/page/${page - 1}`}>
                      <Button variant="landingOutline" size="landingLg">
                        Previous page
                      </Button>
                    </Link>
                  )}
                  <Link href={`/page/${page + 1}`}>
                    <Button variant="landingOutline" size="landingLg">
                      Next page
                    </Button>
                  </Link>
                </HStack>
              )}
            </VStack>
          </VStack>
        </Container>
        <TryBanner _wrapper={styles.middleSection} />
        <Footer _wrapper={styles.lastSection} />
      </Box>
    </>
  );
};

export async function getStaticPaths() {
  const slugs = getArticleSlugs();
  const articlesLength = Math.floor(slugs.length / ARTICLES_PER_PAGE);
  const numbers = Array.from(Array(articlesLength), (x, i) => i);

  return {
    paths: numbers.map((number) => ({
      params: {
        page: number.toString(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slugs = getArticleSlugs();

  const results = await Promise.allSettled(
    slugs.map((slug) => import(`../changelogs/${slug}.mdx`))
  );

  const meta = results
    .map((res) => res.status === "fulfilled" && res.value.meta)
    .filter((item) => item);

  meta.sort((a, b) => {
    const dateB = new Date(b.publishedAt);
    const dateA = new Date(a.publishedAt);
    return dateB.getTime() - dateA.getTime();
  });

  const start = parseInt(params.page) * ARTICLES_PER_PAGE;
  const end = start + ARTICLES_PER_PAGE;
  const recents = meta.slice(start, end).map((item) => item.slug);

  return {
    props: { slugs: recents },
    revalidate: 1,
  };
}

export default Page;
