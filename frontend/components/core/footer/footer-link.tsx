import { Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

type Props = {
  title: string;
  href?: string;
  type?: "internal" | "external" | "text";
};

export function FooterLink({ type = "internal", href = "", ...props }: Props) {
  const Wrapper =
    type === "internal"
      ? ({ children }: { children: React.ReactNode }) => (
          <Link href={href} passHref>
            {children}
          </Link>
        )
      : React.Fragment;

  return (
    <Wrapper>
      <Text
        as={type === "text" ? "p" : "a"}
        color="landing.gray"
        {...(type === "external" && { href })}
      >
        {props.title}
      </Text>
    </Wrapper>
  );
}
