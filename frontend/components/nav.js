import React, { useState } from "react";
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import HamburgerMenu from "./Hamburger";
import { motion } from "framer-motion";
import Icon from "../lib/Icon";

const MotionFlex = motion(Flex);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const newPColor = "rgba(36,31,71,0.8)";
  const mobileMenu = "rgba(36,31,71,1)";
  const fSize = 16;
  const fWeight = 600;
  return (
    <>
      {/* mobile menu */}
      <Box
        w="100vw"
        zIndex={15}
        maxWidth="100vw"
        position="absolute"
        display={["block", "block", "none"]}
      >
        <Flex direction="column">
          <Flex align="center" justify="space-between">
            <Flex p={4} as="a" href={process.env.NEXT_PUBLIC_MARKETING_HOST}>
              <Image h={12} src="/June-logo.svg" />
            </Flex>
            <Flex p={4}>
              <Box onClick={toggle}>
                {isOpen ? <Icon h={4} w={4} name="close" /> : <HamburgerMenu />}
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <MotionFlex
        px={5}
        py={"30%"}
        h="100vh"
        w="100vw"
        direction="column"
        justify="space-between"
        display={isOpen ? "block" : "none"}
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
      >
        <Flex width="100%" direction="column" h="40%" justify="space-between">
          <Flex
            align="center"
            as="a"
            href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/templates`}
            style={{ textDecoration: "none" }}
          >
            <Text fontSize="4xl" fontWeight="bold" color={mobileMenu}>
              Templates
            </Text>
          </Flex>

          <Flex
            align="center"
            as="a"
            href="https://changelog.june.so/"
            style={{ textDecoration: "none" }}
          >
            <Text fontSize="4xl" fontWeight="bold" color={mobileMenu}>
              Changelog
            </Text>
          </Flex>

          <Flex
            align="center"
            as="a"
            href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/pricing`}
            style={{ textDecoration: "none" }}
          >
            <Text fontSize="4xl" fontWeight="bold" color={mobileMenu}>
              Pricing
            </Text>
          </Flex>

          <Flex
            align="center"
            as="a"
            href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/manifesto`}
          >
            <Flex>
              <Text fontSize="4xl" fontWeight="bold" color={mobileMenu}>
                Manifesto{" "}
              </Text>{" "}
            </Flex>
          </Flex>
        </Flex>
        <Button
          as="a"
          href="https://app.june.so/start"
          mt="20%"
          colorScheme="templatePurple"
          h={50}
          borderRadius={6}
          bg="#6868F7"
        >
          Sign up for free
        </Button>
      </MotionFlex>
      {/* desktop */}
      <Box
        position="absolute"
        w="100%"
        zIndex={15}
        overflowX="hidden"
        display={["none", "none", "block"]}
        maxWidth="100vw"
        mb={8}
      >
        <Flex px="5vw" py={6} direction="row" justify="space-between">
          <Flex
            as="a"
            href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}`}
            display={["none", "none", "block"]}
          >
            <Image h={12} src="/June-logo.svg" />
          </Flex>
          <Flex justify="center" align="center">
            <Flex justify="flex-end" align="center">
              <Flex
                px={4}
                align="center"
                as="a"
                href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/templates`}
                style={{ textDecoration: "none" }}
              >
                <Text
                  fontWeight={fWeight}
                  fontSize={fSize}
                  color={newPColor}
                  textAlign="center"
                  _hover={{ color: "#000000" }}
                >
                  Templates
                </Text>
              </Flex>
              <Flex
                fontSize="sm"
                px={4}
                align="center"
                as="a"
                href="https://changelog.june.so"
                style={{ textDecoration: "none" }}
              >
                <Text
                  fontWeight={fWeight}
                  fontSize={fSize}
                  color={newPColor}
                  textAlign="center"
                  _hover={{ color: "#000000" }}
                >
                  Changelog
                </Text>
              </Flex>
              <Flex
                fontSize="sm"
                px={4}
                align="center"
                as="a"
                href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/pricing`}
                style={{ textDecoration: "none" }}
              >
                <Text
                  fontWeight={fWeight}
                  fontSize={fSize}
                  color={newPColor}
                  textAlign="center"
                  _hover={{ color: "#000000" }}
                >
                  Pricing
                </Text>
              </Flex>
              <Flex
                fontSize="sm"
                px={4}
                align="center"
                as="a"
                href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/manifesto`}
              >
                <Flex>
                  <Text
                    fontWeight={fWeight}
                    fontSize={fSize}
                    color={newPColor}
                    textAlign="center"
                    _hover={{ color: "#000000" }}
                  >
                    Manifesto
                  </Text>
                </Flex>
              </Flex>
              <Flex align="flex-end" ml={4}>
                <Button
                  ml={0}
                  as="a"
                  href="https://app.june.so/login"
                  fontWeight={fWeight}
                  fontSize={fSize}
                  color={newPColor}
                >
                  Log in
                </Button>

                <Button
                  ml={4}
                  as="a"
                  href="https://app.june.so/start"
                  fontWeight={fWeight}
                  fontSize={fSize}
                  colorScheme="templatePurple"
                  bg="#6868F7"
                >
                  Sign up
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Nav;
