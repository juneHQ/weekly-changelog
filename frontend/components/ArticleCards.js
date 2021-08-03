import React from "react";
import ArticleCard from "./ArticleCard";
import { Grid, Flex } from "@chakra-ui/react";

const Articles = ({ articles }) => {
  return (
    <div>
      <Flex justify="center">
        <Grid
          gridTemplateRows="auto"
          maxWidth={["100%", "75%"]}
          templateColumns={[
            "100%",
            "repeat(auto-fill, minmax(100%, 1fr))",
            "repeat(auto-fill, minmax(40%, 1fr))",
          ]}
          gap={6}
        >
          {[...articles].map((article) => (
            <ArticleCard article={article} key={article.slug} />
          ))}
        </Grid>
      </Flex>
    </div>
  );
};

export default Articles;
