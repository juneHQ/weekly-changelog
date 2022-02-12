import { Heading, StackProps, Text, TextProps, VStack } from "@chakra-ui/react";
import React from "react";

export interface SectionHeaderProps {
  title: string | React.ReactNode;
  subtitle?: string;
  description?: string | React.ReactNode;
  _wrapper?: StackProps;
  _headingsWrapper?: StackProps;
  _subtitle?: TextProps;
  _title?: TextProps;
  _description?: TextProps;
}

export function SectionHeader(props: SectionHeaderProps) {
  return (
    <VStack align="start" spacing={[4, 4, 8]} {...props._wrapper}>
      <VStack align="start" spacing={4} {...props._headingsWrapper}>
        {props.subtitle && (
          <Text fontSize={["md", "md", "lg"]} fontWeight="bold" color="primary" {...props._subtitle}>
            {props.subtitle}
          </Text>
        )}
        <Heading
          as="h2"
          fontSize={["40px", "40px", "6xl"]}
          color="landing.almostBlack.500"
          fontFamily="landingHeading"
          lineHeight={1.25}
          {...props._title}>
          {props.title}
        </Heading>
      </VStack>
      {props.description && (
        <Text color="landing.gray" {...props._description}>
          {props.description}
        </Text>
      )}
    </VStack>
  );
}
