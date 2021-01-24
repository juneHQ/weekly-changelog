import { getStrapiMedia } from "../lib/media";
import { Stack, Flex, Avatar } from '@chakra-ui/react';

function Contributor({author}){
  return  <Flex>
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
}

export default Contributor