import React from "react";
import Card from "./card";
import { Flex } from "@chakra-ui/core";

const Articles = ({ articles }) => {
  console.log(articles.reverse())
  return (
    <div>
      <Flex justify='center'>
        <Flex maxWidth={'1200px'} direction='column'>
          {articles.map(article=> <Card
            article={article}
            key={article.slug}
            />
          )}        
        </Flex>
      </Flex>
    </div>
  );
};

export default Articles;