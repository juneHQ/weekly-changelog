import { Box, Flex, FlexProps, HStack } from "@chakra-ui/react";
import React from "react";

interface WindowMockBoxProps {
  _wrapper?: FlexProps;
  children?: React.ReactNode;
}

export const WindowMockBox = (props: WindowMockBoxProps) => {
  return (
    <Flex
      flex={1}
      direction="column"
      shadow="0px 4px 12px rgba(0, 0, 0, 0.15)"
      borderRadius="10px"
      overflow="hidden"
      bg="white"
      {...props._wrapper}>
      <Box borderBottom="1px solid #F2F2F2" px={4} py="22px" w="full">
        <HStack spacing="6px">
          <Box borderRadius="full" boxSize={2} border="1px solid #858ADF" background="#A7ACFC" />
          <Box borderRadius="full" boxSize={2} border="1px solid #858ADF" background="#A7ACFC" />
          <Box borderRadius="full" boxSize={2} border="1px solid #858ADF" background="#A7ACFC" />
        </HStack>
      </Box>
      {props.children}
    </Flex>
  );
};
