import React from "react";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import Link from "next/link";
import { getStrapiMedia } from "../lib/media";
import { Box, Stack, Divider, Flex, Text, Image, Avatar, Grid } from '@chakra-ui/core';

const Card = ({ article }) => {
  return (
    <>
      
        <>
        <Flex justify='space-between' direction={{base: 'column', md: 'row'}} p={2} px={4}>
          <Text pb={2} width={'100%'} textDecoration='none' color='gray.600'><Moment format="MMM Do, YYYY">{article.publishedAt}</Moment></Text>
          <Stack maxWidth={'900px'} width={['100%', 'auto']}>
            <div>
              <Image borderRadius='lg' src={getStrapiMedia(article.image)} />
            </div>
            <Text fontSize='3xl' py={4}>
              {article.title}
            </Text>
            
            <Box>
              <ReactMarkdown source={article.content} escapeHtml={false} />
            </Box>
            <Grid templateColumns="repeat(2, 1fr)" py={4} gap={4}>
              {article.authors.map(author => <Flex>
                <div>
                  {author.picture && (
                    <Avatar
                    src={getStrapiMedia(author.picture)}
                    />
                    )}
                </div>
                <Stack pl={4}>
                    <p className="uk-margin-remove-bottom">
                      {author.name}
                    </p>
                    <p className="uk-text-meta uk-margin-remove-top">
                      {author.bio}
                    </p>
                </Stack>
              </Flex>
                    )}
            </Grid>
          </Stack>
        </Flex>
        </>
      <Divider mb={16}/>
    </>
  );
};

export default Card;
