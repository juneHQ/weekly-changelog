import React from "react";
import Moment from "react-moment";
import Link from 'next/link'
import { Flex, Text, Image } from '@chakra-ui/react';
import { getStrapiMedia } from "../lib/media";

const ArticleCard = ({ article }) => {
  return (    
    <Link href={`/changelog/${article.slug}`}>
      <Flex direction='column' cursor='pointer'>
          <Flex justify ='center' align='center' position='relative' w={['100%', '100%','600px']} h={['175px', '300px']}>
            <Image px={[0, 2, 0]} objectFit='contain' src={getStrapiMedia(article.image)} />
          </Flex>
          <Flex w={['auto']} px={[4, 2]} py={2} justify='space-between'>
            <Text w='60%' fontSize='lg' fontWeight='bold'>
              {article.title}
            </Text>
            <Text textDecoration='none' color='gray.600'><Moment format="MMM Do, YYYY">{article.publishedAt}</Moment></Text>
          </Flex>
      </Flex>
    </Link>
  );
};

export default ArticleCard;
