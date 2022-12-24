import { Avatar, Flex, HStack, Text } from "@chakra-ui/react";

function Contributor({ avatarUrl, name, description }) {
  return (
    <HStack spacing={4}>
      {avatarUrl && <Avatar src={avatarUrl} />}
      <Flex direction="column" align="flex-start" justify="center">
        <Text fontWeight="semibold">{name}</Text>
        <Text color="rgba(36,31,71,0.8)">{description}</Text>
      </Flex>
    </HStack>
  );
}

export default Contributor;
