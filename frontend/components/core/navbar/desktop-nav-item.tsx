import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export interface DesktopNavItemProps {
  type: "external-link" | "internal-link";
  href: string;
  title: string;
  isActive?: boolean;
}

export function DesktopNavItem(props: DesktopNavItemProps) {
  const Wrapper =
    props.type === "external-link"
      ? React.Fragment
      : (linkProps: { children: React.ReactNode }) => (
          <Link href={props.href} passHref prefetch={false} {...linkProps} />
        );

  return (
    <Wrapper>
      <Flex
        as={props.type === "external-link" ? "a" : "div"}
        fontSize="sm"
        align="center"
        style={{ textDecoration: "none" }}
        {...(props.type === "external-link" && {
          href: props.href,
          rel: "noreferrer noopener",
        })}>
        <Text
          fontFamily="landingHeading"
          fontWeight="bold"
          color={props.isActive ? "purple.500" : "landing.black"}
          textAlign="center"
          _hover={{ color: "purple.500", cursor: "pointer" }}
          _active={{ color: "purple.600" }}>
          {props.title}
        </Text>
      </Flex>
    </Wrapper>
  );
}
