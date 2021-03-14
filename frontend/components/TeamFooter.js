import { Flex, Text } from "@chakra-ui/react";
import Teammate from "./Teammate";

function TeamFooter(pt) {
  return (
    <Flex justify="center" pt={pt}>
      <Text fontWeight={500} color="newTemplateColors.paragraph">
        Made by:
        {` `}
        <Teammate
          name="Ferruccio"
          twitter="https://twitter.com/0xferruccio"
        />, {` `}
        <Teammate name="Vinayak" twitter="https://twitter.com/vortex_ape" />
        {` `}&{` `}
        <Teammate name="Enzo" twitter="https://twitter.com/0zne" />
      </Text>
    </Flex>
  );
}

export default TeamFooter;
