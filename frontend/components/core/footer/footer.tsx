import { Box, Container, ContainerProps, Grid, GridItem, Image, VStack } from "@chakra-ui/react";
import React from "react";
import { defaultPx } from "../../../lib/utils/default-container-px";
import { FooterLink } from "./footer-link";
import { FooterTitle } from "./footer-title";

const gap = [2, 2, 8];

interface Props {
  _wrapper?: ContainerProps;
}

export function FooterV2(props: Props) {
  return (
    <Container maxW="landingMax" px={defaultPx(32)} {...props._wrapper}>
      <Grid
        gap={[6, 6, 4]}
        templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(5, 1fr)"]}
        gridTemplateAreas={[
          "'logo logo' 'solution for' 'company legal'",
          "'logo logo' 'solution for' 'company legal'",
          "'logo solution for company legal'",
        ]}>
        <GridItem gridArea="logo">
          <Box flexShrink={0}>
            <Image src="/june-logo-small.svg" alt="june" width={68} height={68} htmlWidth={68} htmlHeight={68} />
          </Box>
        </GridItem>
        <GridItem gridArea="solution">
          <VStack align="start" spacing={gap}>
            <FooterTitle>Solution</FooterTitle>
            <FooterLink title="Overview" type="external" href={process.env.NEXT_PUBLIC_MARKETING_HOST} />
            <FooterLink
              title="Templates"
              type="external"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/templates`}
            />
            <FooterLink title="Pricing" type="external" href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/pricing`} />
            <FooterLink title="Changelog" href="/" />
            <FooterLink title="Widget for iOS" />
          </VStack>
        </GridItem>
        <GridItem gridArea="for">
          <VStack align="start" spacing={gap}>
            <FooterTitle>For</FooterTitle>
            <FooterLink
              title="Founders"
              type="external"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/personas/founders`}
            />
            <FooterLink
              title="Product Managers"
              type="external"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/personas/product-managers`}
            />
            <FooterLink
              title="Engineers"
              type="external"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/personas/engineers`}
            />
            <FooterLink
              title="Marketers"
              type="external"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/personas/marketers`}
            />
            <FooterLink
              title="Customer Success"
              type="external"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/personas/customer-success`}
            />
            <FooterLink
              title="Designers"
              type="external"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/personas/designers`}
            />
          </VStack>
        </GridItem>
        <GridItem gridArea="company">
          <VStack align="start" spacing={gap}>
            <FooterTitle>Company</FooterTitle>
            <FooterLink title="Our story" />
            <FooterLink
              title="Careers"
              type="external"
              href="https://www.notion.so/projectanalytics/Work-at-June-ba2ff41d03cb4a1ba230eda21daccada"
            />
            <FooterLink title="Contact" type="external" href="mailto:enzo@june.so" />
            <FooterLink title="Twitter" type="external" href="https://twitter.com/JuneDotSo" />
          </VStack>
        </GridItem>
        <GridItem gridArea="legal">
          <VStack align="start" spacing={gap}>
            <FooterTitle>Legal</FooterTitle>
            <FooterLink
              title="Terms"
              type="external"
              href="https://www.notion.so/Privacy-Policy-a4f99393a98b4ce6aa1bacd5f48157cc"
            />
            <FooterLink
              title="Privacy"
              type="external"
              href="https://www.notion.so/Privacy-Policy-a4f99393a98b4ce6aa1bacd5f48157cc"
            />
            <FooterLink title="Copyright © 2022 June" type="text" />
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  );
}
