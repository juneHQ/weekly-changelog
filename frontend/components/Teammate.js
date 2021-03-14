import { Text } from "@chakra-ui/react";

function Teammate({ twitter, name }) {
  return (
    <>
      <Text as="a" href={twitter} color="#6868F7" decoration="underline">
        {name}
      </Text>
    </>
  );
}

export default Teammate;
