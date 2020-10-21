import React from "react";
import Card from "./card";
import { Flex, Stack } from "@chakra-ui/core";

const Articles = ({ articles }) => {
  return (
    <div>
      <Flex justify='center'>
        <Stack maxWidth={'1200px'}>
          {articles.map(article=> <Card
            article={article}
            key={article.slug}
            />
          )}        
        </Stack>
      </Flex>
    </div>
  );
};

export default Articles;