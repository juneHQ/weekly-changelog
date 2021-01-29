import React from "react";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { getStrapiMedia } from "../lib/media";
import { Box, Flex, Text, Grid, Stack, Image } from '@chakra-ui/react';
import Contributor from './Contributor'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import Link from "next/link";

const renderers = {
  image: image => {
    return <Flex py={2} justify='center'>
        <Image src={image.src} alt={image.alt} h='100%' w={['100%', '100%', '100%', '100%']} maxW={['100%', '100%', '700px', '900px']} />
      </Flex>
  },
}


const Card = ({ article }) => {
  return (
    <>
      <Flex direction='column' py={2} px={[4, 32]}>
        <Link href='/'>
          <Flex cursor='pointer' align='center' py={2}>
            <ChevronLeftIcon color='gray.600' />
            <Text color='gray.600'>
              All updates
            </Text>  
          </Flex>
        </Link>
        <Flex direction='column' align='flex-start' maxWidth={['100%', '60%']} pt={4}>
          <Flex justify='flex-start' position='relative' height={['200px','400px', '400px', '450px']} width={['100%','700px', '700px','900px']} objectFit='scale-down'>
            <Image objectFit='scale-down' src={getStrapiMedia(article.image)} />
          </Flex>
          <Stack maxW={['100%','700px', '700px','900px']} px={[2, 0]}>
            <Text fontSize='3xl' pt={4}>
              {article.title}
            </Text>
            <Text pb={4} width={'100%'} textDecoration='none' color='gray.600'><Moment format="MMM Do, YYYY">{article.publishedAt}</Moment></Text>
            <Box>
              <ReactMarkdown renderers={renderers} source={article.content} escapeHtml={false} />
            </Box>
            <Grid gridTemplateRows='auto' templateColumns={["100%", "repeat(auto-fill, minmax(300px, 1fr))"]} py={4} gap={4}>
              {article.authors.map(author => <Contributor author={author}/>)}
            </Grid>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};

export default Card;
