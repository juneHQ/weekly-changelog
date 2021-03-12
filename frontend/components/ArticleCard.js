import React, { useState } from "react";
import Moment from "react-moment";
import Link from "next/link";
import { Flex, Text, Image, Circle } from "@chakra-ui/react";
import { getStrapiMedia } from "../lib/media";
import { motion } from "framer-motion";

const MotionCircle = motion.custom(Circle);
const MotionFlex = motion.custom(Flex);

const ArticleCard = ({ article }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <Link href={`/changelog/${article.slug}`}>
      <MotionFlex
        direction="column"
        cursor="pointer"
        mb={[4, 8]}
        onHoverStart={() => setHovering(true)}
        onHoverEnd={() => setHovering(false)}
      >
        <Flex
          justify="center"
          align="center"
          position="relative"
          w={["100%", "100%", "600px"]}
          h={["175px", "300px"]}
          my={[4, 4]}
          borderRadius="xl"
          bg="#fafafa"
          /*           bg="radial-gradient(88.18% 214.84% at 94.21% 16.05%, #FFD6CE 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(89.13% 217.14% at 0% 73.43%, #C2BFEA 0%, rgba(194, 191, 234, 0) 95.31%);"
           */
        >
          <Image
            px={[2, 2, 0]}
            objectFit="fill"
            src={getStrapiMedia(article.image)}
          />
        </Flex>
        <Flex
          w={["auto"]}
          px={[4, 2]}
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
