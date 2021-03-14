import { Flex, Box, Text, Center, Button } from "@chakra-ui/react";
import React from "react";

export default function CreateAccountSection() {
  const newPColor = "rgba(36,31,71,0.8)";
  return (
    <Flex
      direction="column"
      w="100%"
      h={["xl", "auto"]}
      justify="center"
      textAlign="center"
      py={16}
      touchAction="none"
    >
      <Flex
        direction={["column", "column", "row"]}
        justify={["center", "space-between"]}
        background="radial-gradient(48.1% 66.96% at 64.92% 24.83%, rgba(255, 218, 162, 0.56) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(40.77% 96.07% at 101.48% 80.42%, rgba(255, 150, 150, 0.63) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(85.19% 200.73% at 4.21% 91.78%, rgba(168, 154, 255, 0.85) 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF;"
        width={["90%"]}
        borderRadius={["3xl"]}
        margin="0 auto"
        py={[16, 36]}
        px={[0, 12]}
        overflow="hidden"
        position="relative"
      >
        <Flex
          zIndex="9"
          margin="0 auto"
          verticalAlign="middle"
          display="column"
        >
          <Text
            fontWeight={700}
            color="#000000"
            fontSize={[32, 52]}
            lineHeight="shorter"
            px={[8, 0]}
          >
            Create an account now
          </Text>

          <Box>
            {/* heading + desc */}
            <>
              <Center>
                <Text
                  py={4}
                  color={newPColor}
                  fontSize={[16, 20]}
                  px={[8, 0]}
                  w={["auto", "450px"]}
                >
                  Get an instant and comprehensible product analytics in seconds{" "}
                  not hours.
                </Text>
              </Center>
            </>

            <Center w="100%">
              <Flex direction="column" justify="center" py={[3, 2]}>
                <Button
                  bg="#6868F7"
                  as="a"
                  href={`${process.env.JUNE_APP_HOST}/start`}
                  colorScheme="templatePurple"
                  px={[4, 6]}
                  py={7}
                  textAlign="center"
                  borderRadius="lg"
                >
                  Sign up for free
                </Button>
              </Flex>
            </Center>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
