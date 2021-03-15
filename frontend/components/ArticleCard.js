import React, { useState } from "react";
import Moment from "react-moment";
import Link from "next/link";
import { Flex, Text, Image, Circle } from "@chakra-ui/react";
import { getStrapiMedia } from "../lib/media";
import { motion } from "framer-motion";

const MotionCircle = motion.custom(Circle);
const MotionFlex = motion.custom(Flex);
const MotionImage = motion.custom(Image);

const articleType = Object.freeze({
  feature: { label: "FEATURE", color: "#6868F7" },
  fix: { label: "FIX", color: "#FF937D" },
  template: { label: "TEMPLATE", color: "#C56EEE" },
  improvement: { label: "IMPROVEMENT", color: "#48A9A6" }
});

const ArticleCard = ({ article }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <Link href={`/changelog/${article.slug}`}>
      <MotionFlex
        direction="column"
        cursor="pointer"
        mb={[6, 10]}
        mx={[4, 0]}
        onHoverStart={() => setHovering(true)}
        onHoverEnd={() => setHovering(false)}
      >
        <Flex
          justify="center"
          align="center"
          position="relative"
          w={["100%", "100%", "100%"]}
          h={["175px", "300px"]}
          my={[4, 4]}
          borderRadius={"xl"}
        >
          <Image
            borderRadius={"xl"}
            h="100%"
            w="100%"
            objectFit="cover"
            src={getStrapiMedia(article.image)}
          />
        </Flex>
        <Flex
          w={["auto"]}
          px={[1, 2]}
          direction="column"
          justify="space-between"
        >
          <Flex align="center">
            <Text
              textDecoration="none"
              color="#6868F7"
              fontSize="sm"
              fontWeight="bold"
            >
              FEATURE
            </Text>
            <Text color="rgba(36,31,71,0.3)" mx={2}>
              |
            </Text>
            <Text
              textDecoration="none"
              color="rgba(36,31,71,0.8)"
              fontSize="sm"
            >
              <Moment format="MMM Do, YYYY">{article.publishedAt}</Moment>
            </Text>
          </Flex>

          <Flex align="center" mt={2}>
            <Text w="auto" fontSize="xl" fontWeight="bold" mr={[4]}>
              {article.title}
            </Text>
            <MotionCircle
              size="30px"
              bg="rgba(36,31,71,0.07)"
              initial={{ x: 0 }}
              animate={{ x: hovering ? 8 : 0 }}
            >
              <Image src="/chevron-right.svg" />
            </MotionCircle>
          </Flex>
        </Flex>
      </MotionFlex>
    </Link>
  );
};

export default ArticleCard;
