import { CloseIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import HamburgerMenu from "../../Hamburger";
import { defaultPx } from "../../../lib/utils/default-container-px";
import { DesktopNavItem } from "./desktop-nav-item";

const MOBILE_MENU_COLOR = "#241f47";
const MOBILE_FONT_WEIGHT = 600;
const ROUTES = [
  { href: "/solution", title: "Solution", type: "internal-link" },
  { href: "/new-templates", title: "Templates", type: "internal-link" },
  { href: "/new-pricing", title: "Pricing", type: "internal-link" },
  { href: "/vision", title: "Vision", type: "internal-link" },
] as const;

interface Props {
  activeHref?: typeof ROUTES[number]["href"];
}

export function Navbar(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile navbar */}
      {isOpen ? (
        <Box w="100%" maxWidth="100vw" position="fixed" zIndex="overlay" display={["block", "block", "none"]}>
          <Flex direction="column">
            <Flex align="center" justify="space-between">
              <Flex p={4} as="a" href="/">
                <Image h={12} src="/June-logo.svg" alt="june-logo" />
              </Flex>
              <Flex p={4} onClick={toggle}>
                <Box pr={1}>
                  <CloseIcon />
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      ) : (
        <Box w="100%" zIndex="overlay" display={["block", "block", "none"]} position="absolute">
          <Flex direction="column">
            <Flex align="center" justify="space-between">
              <Flex p={4} as="a" href="/">
                <Image h={12} src="/June-logo.svg" alt="june-logo" />
              </Flex>
              <Flex p={4} onClick={toggle}>
                <Box>
                  <HamburgerMenu />
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      )}
      <Flex
        px={5}
        py="30%"
        h="100vh"
        w="100vw"
        position="fixed"
        bg="white"
        zIndex="sticky"
        direction="column"
        justify="space-between"
        overflowY="hidden"
        display={isOpen ? "block" : "none"}>
        <Flex width="100%" direction="column" h="40%" justify="space-between">
          <Link prefetch={false} href="/templates" passHref>
            <Flex align="center" style={{ textDecoration: "none" }}>
              <Text fontSize="4xl" fontWeight="bold" color={MOBILE_MENU_COLOR}>
                Templates
              </Text>
            </Flex>
          </Link>
          <Flex align="center" as="a" href="https://changelog.june.so/" style={{ textDecoration: "none" }}>
            <Text fontSize="4xl" fontWeight="bold" color={MOBILE_MENU_COLOR}>
              Changelog
            </Text>
          </Flex>
          <Link prefetch={false} href="/pricing" passHref>
            <Flex align="center" style={{ textDecoration: "none" }} _hover={{ cursor: "pointer" }}>
              <Text fontSize="4xl" fontWeight="bold" color={MOBILE_MENU_COLOR}>
                Pricing
              </Text>
            </Flex>
          </Link>
          <Link prefetch={false} href="/manifesto" passHref>
            <Flex align="center" _hover={{ cursor: "pointer" }}>
              <Flex>
                <Text fontSize="4xl" fontWeight="bold" color={MOBILE_MENU_COLOR}>
                  Manifesto{" "}
                </Text>{" "}
              </Flex>
            </Flex>
          </Link>
        </Flex>
        <Stack spacing={4} mt={16}>
          <Button
            h={50}
            size="md"
            as="a"
            href={`${process.env.JUNE_APP_HOST}/log-in`}
            borderRadius={6}
            fontWeight={MOBILE_FONT_WEIGHT}>
            Log in
          </Button>
          <Button
            colorScheme="purple"
            size="md"
            h={50}
            as="a"
            href={`${process.env.JUNE_APP_HOST}/start`}
            borderRadius={6}
            fontWeight={MOBILE_FONT_WEIGHT}>
            Sign up
          </Button>
        </Stack>
      </Flex>
      {/* Desktop Navbar */}
      <Container
        position="absolute"
        maxW="landingMax"
        left="50%"
        transform="translateX(-50%)"
        zIndex={15}
        overflowX="hidden"
        display={["none", "none", "block"]}
        px={defaultPx(32)}>
        <Flex py={6} direction="row" justify="space-between">
          {/* Logo */}
          <Link href="/" passHref prefetch={false}>
            <Flex display={["none", "none", "block"]} cursor="pointer">
              <Image h={12} src="/June-logo.svg" alt="june-logo" />
            </Flex>
          </Link>
          {/* Navigation items */}
          <HStack spacing={[0, 0, 8, 16, 100]} align="center">
            {ROUTES.map((route) => (
              <DesktopNavItem key={route.href} {...route} isActive={props.activeHref === route.href} />
            ))}
          </HStack>
          {/* CTAs */}
          <HStack spacing={4} align="center">
            <Button as="a" size="landingMd" variant="landingOutline" href="https://app.june.so/login">
              Login
            </Button>
            <Button as="a" size="landingMd" variant="landingSolid" href="https://app.june.so/start">
              Sign up
            </Button>
          </HStack>
        </Flex>
      </Container>
    </>
  );
}