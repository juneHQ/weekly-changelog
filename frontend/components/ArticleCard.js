import React from "react";
import Image from "next/image";
import Moment from "react-moment";
import Link from 'next/link'
import { Flex, Text } from '@chakra-ui/react';
import { getStrapiMedia } from "../lib/media";

const ArticleCard = ({ article }) => {
  return (    
    <Link href={`/changelog/${article.slug}`}>
      <Flex direction='column' cursor='pointer'>
          <Flex position='relative' w={['100%', '600px']} h={['175px', '300px']} objectFit='contain'>
            <Image layout='fill' objectFit='contain' borderRadius='lg' src={getStrapiMedia(article.image)} />
          </Flex>
          <Flex w={['auto', '600px']} px={[4, 2]} py={2} justify='space-between'>
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
