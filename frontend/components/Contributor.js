import { getStrapiMedia } from "../lib/media";
import { Stack, Flex, Avatar, Text } from "@chakra-ui/react";

function Contributor({ author }) {
  return (
    <Flex mb={4}>
      <div>
        {author.picture && <Avatar src={getStrapiMedia(author.picture)} />}
      </div>
      <Flex pl={4} direction="column" align="flex-start" justify="center">
        <Text fontWeight="semibold">{author.name}</Text>
        <Text color="rgba(36,31,71,0.8)">{author.bio}</Text>
      </Flex>
    </Flex>
  );
}

export default Contributor;
