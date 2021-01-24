import { getStrapiMedia } from "../lib/media";
import { Stack, Flex, Avatar, Text } from '@chakra-ui/react';

function Contributor({author}){
  return  <Flex>
  <div>
    {author.picture && (
      <Avatar
      src={getStrapiMedia(author.picture)}
      />
      )}
  </div>
  <Flex pl={4} direction='column' align='flex-start' justify='center'>
      <Text fontWeight='medium'>
        {author.name}
      </Text>
      <Text color='gray.600'>
        {author.bio}
      </Text>
  </Flex>
</Flex>
}

export default Contributor