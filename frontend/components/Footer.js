import {
  Box,
  Button,
  Center,
  Flex,
  Text,
  Divider,
  FormControl,
  Input,
} from "@chakra-ui/react";
import TeamFooter from "./TeamFooter.js";

function Footer() {
  const newPColor = "rgba(36,31,71,0.8)";
  const newInputAreaBG = "rgba(36,31,71,0.05)";

  return (
    <>
      <Box
        position="absolute"
        w="100%"
        overflowX="hidden"
        display={["block", "none"]}
        maxWidth="100vw"
      >
        <Center mb={8} mt={4}>
          <svg
            width="47"
            height="46"
            viewBox="0 0 47 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.28728 11.7626C5.6178 11.1144 6.20941 10.6382 6.91326 10.4538L32.9314 3.63883C34.2829 3.28482 35.6677 4.084 36.0374 5.43133L43.3182 31.9665C43.6936 33.3347 42.8804 34.7463 41.5085 35.1079L14.0272 42.3499C12.6649 42.7089 11.2694 41.8954 10.9107 40.5329L4.24781 15.2282C4.08821 14.622 4.15738 13.9784 4.4421 13.42L5.28728 11.7626Z"
              stroke="#858ADF"
              strokeWidth="6.39952"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.28728 11.7626C5.6178 11.1144 6.20941 10.6382 6.91326 10.4538L32.9314 3.63883C34.2829 3.28482 35.6677 4.084 36.0374 5.43133L43.3182 31.9665C43.6936 33.3347 42.8804 34.7463 41.5085 35.1079L14.0272 42.3499C12.6649 42.7089 11.2694 41.8954 10.9107 40.5329L4.24781 15.2282C4.08821 14.622 4.15738 13.9784 4.4421 13.42L5.28728 11.7626Z"
              stroke="#9DA2F6"
              strokeWidth="2.84423"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.28728 11.7626C5.6178 11.1144 6.20941 10.6382 6.91326 10.4538L32.9314 3.63883C34.2829 3.28482 35.6677 4.084 36.0374 5.43133L43.3182 31.9665C43.6936 33.3347 42.8804 34.7463 41.5085 35.1079L14.0272 42.3499C12.6649 42.7089 11.2694 41.8954 10.9107 40.5329L4.24781 15.2282C4.08821 14.622 4.15738 13.9784 4.4421 13.42L5.28728 11.7626Z"
              fill="#A7ACFC"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.2466 14.4196C10.0377 13.6578 10.4913 12.8721 11.2554 12.672L31.6682 7.32519C32.4201 7.12822 33.1906 7.57299 33.3961 8.32267L38.8511 28.2238C39.0599 28.9856 38.6063 29.7713 37.8422 29.9714L17.4294 35.3182C16.6775 35.5152 15.907 35.0704 15.7015 34.3207L10.2466 14.4196Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.8871 30.5921C28.2321 29.9778 29.8533 28.9346 30.7507 27.4623C31.6481 25.9899 31.7803 24.0994 31.1475 21.7907L28.2931 11.3771L16.6258 14.4331L17.8074 18.7439L23.703 17.1996L25.4687 23.6415C25.659 24.3358 25.6418 24.9027 25.4171 25.3422C25.1925 25.7817 24.7746 26.0815 24.1636 26.2416C23.6847 26.367 23.1847 26.3509 22.6635 26.1932C22.1424 26.0356 21.5732 25.7347 20.9559 25.2908L18.8057 29.7475C19.7415 30.3849 20.8172 30.7736 22.0326 30.9138C23.2481 31.054 24.5329 30.9468 25.8871 30.5921Z"
              fill="#8588E5"
            />
          </svg>
        </Center>

        <Text
          fontWeight={600}
          color="black"
          textAlign="center"
          fontSize={22}
          mb={8}
        >
          Get actionable insights and
          <br />
          custom built reports in
          <br />
          seconds, not hours.
        </Text>
        <Flex
          direction="row"
          w="100%"
          justify="space-around"
          alignItems="flex-start"
          p={4}
          mb={8}
        >
          <Flex direction="column" justify="flex-start">
            <Text
              fontWeight={600}
              color="black"
              textAlign="left-align"
              fontSize={18}
              mb={4}
            >
              June
            </Text>
            <Text
              as="a"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/templates`}
              fontWeight={500}
              color={newPColor}
              textAlign="left-align"
              mb={4}
            >
              Templates
            </Text>
            <Text
              as="a"
              href="https://changelog.june.so"
              fontWeight={500}
              color={newPColor}
              textAlign="left-align"
              mb={4}
            >
              Changelog
            </Text>
            <Text
              as="a"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/pricing`}
              fontWeight={500}
              color={newPColor}
              textAlign="left-align"
              mb={4}
            >
              Pricing
            </Text>
            <Text
              as="a"
              href="mailto:enzo@june.so"
              fontWeight={500}
              color={newPColor}
              textAlign="left-align"
              mb={4}
            >
              Support
            </Text>
          </Flex>
          <Flex direction="column" justify="flex-start">
            <Text
              fontWeight={600}
              color="black"
              textAlign="left-align"
              fontSize={16}
              mb={4}
            >
              Company
            </Text>
            <Text
              as="a"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/manifesto`}
              fontWeight={500}
              color={newPColor}
              textAlign="left-align"
              mb={4}
            >
              Manifesto
            </Text>
            {/*             <Text
              fontWeight={500}
              color={newPColor}
              textAlign="left-align"
              mb={4}
            >
              We're hiring
            </Text> */}
            <Text
              as="a"
              href="mailto:enzo@june.so"
              fontWeight={500}
              color={newPColor}
              textAlign="left-align"
              mb={4}
            >
              Contact us
            </Text>
          </Flex>
        </Flex>
        <Text
          fontWeight={600}
          color="#000000"
          textAlign="center"
          fontSize={18}
          mb={4}
        >
          Sign up for weekly updates and tips
        </Text>
        <Text fontWeight={500} color={newPColor} textAlign="center">
          Subscribe and receive regularly our <br /> newest changelog by email
        </Text>
        <Flex
          direction="row"
          w="100%"
          justify="space-between"
          p={4}
          alignItems="center"
        >
          <Box w="60%" mr={2}>
            <FormControl id="email" py={4}>
              <Input
                type="email"
                placeholder="Email"
                variant="filled"
                h={50}
                bg={newInputAreaBG}
                fontWeight={500}
              />
            </FormControl>
          </Box>
          <Button
            w="40%"
            colorScheme="templatePurple"
            bg="#6868F7"
            h={50}
            borderRadius={6}
            ml={2}
          >
            Sign up
          </Button>
        </Flex>
        <Center>
          <Divider color="newTemplateColors.div" w="90%" pt={8} />
        </Center>

        <Flex width="100%" pt={4} pb={8} direction="column" justify="center">
          <Flex
            w="90%"
            m="0 auto"
            pb={4}
            direction="row"
            justify="space-between"
          >
            <Text as="a" href="" color={newPColor} fontWeight={500}>
              © 2021 June
            </Text>
            <Text
              as="a"
              href="https://www.notion.so/Privacy-Policy-a4f99393a98b4ce6aa1bacd5f48157cc"
              color={newPColor}
              fontWeight={500}
            >
              Privacy policy
            </Text>
            <Text
              as="a"
              href="https://www.notion.so/Privacy-Policy-a4f99393a98b4ce6aa1bacd5f48157cc"
              color={newPColor}
              fontWeight={500}
            >
              Terms of use
            </Text>
          </Flex>
          <Flex direction="column" align="center" pt={8}>
            <Box pb={4}>
              <svg role="img" fill="#241F47" width="24" height="24">
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg>
            </Box>

            <TeamFooter />
          </Flex>
        </Flex>
      </Box>

      <Box
        position="absolute"
        w="100%"
        zIndex={15}
        overflowX="hidden"
        display={["none", "block"]}
        maxWidth="100vw"
      >
        <Flex
          w="90%"
          m="0 auto"
          py={8}
          px={2}
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          {/* logo block */}
          <Flex direction="column" justify="flex-start">
            <svg
              width="47"
              height="46"
              viewBox="0 0 47 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.28728 11.7626C5.6178 11.1144 6.20941 10.6382 6.91326 10.4538L32.9314 3.63883C34.2829 3.28482 35.6677 4.084 36.0374 5.43133L43.3182 31.9665C43.6936 33.3347 42.8804 34.7463 41.5085 35.1079L14.0272 42.3499C12.6649 42.7089 11.2694 41.8954 10.9107 40.5329L4.24781 15.2282C4.08821 14.622 4.15738 13.9784 4.4421 13.42L5.28728 11.7626Z"
                stroke="#858ADF"
                strokeWidth="6.39952"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.28728 11.7626C5.6178 11.1144 6.20941 10.6382 6.91326 10.4538L32.9314 3.63883C34.2829 3.28482 35.6677 4.084 36.0374 5.43133L43.3182 31.9665C43.6936 33.3347 42.8804 34.7463 41.5085 35.1079L14.0272 42.3499C12.6649 42.7089 11.2694 41.8954 10.9107 40.5329L4.24781 15.2282C4.08821 14.622 4.15738 13.9784 4.4421 13.42L5.28728 11.7626Z"
                stroke="#9DA2F6"
                strokeWidth="2.84423"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.28728 11.7626C5.6178 11.1144 6.20941 10.6382 6.91326 10.4538L32.9314 3.63883C34.2829 3.28482 35.6677 4.084 36.0374 5.43133L43.3182 31.9665C43.6936 33.3347 42.8804 34.7463 41.5085 35.1079L14.0272 42.3499C12.6649 42.7089 11.2694 41.8954 10.9107 40.5329L4.24781 15.2282C4.08821 14.622 4.15738 13.9784 4.4421 13.42L5.28728 11.7626Z"
                fill="#A7ACFC"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.2466 14.4196C10.0377 13.6578 10.4913 12.8721 11.2554 12.672L31.6682 7.32519C32.4201 7.12822 33.1906 7.57299 33.3961 8.32267L38.8511 28.2238C39.0599 28.9856 38.6063 29.7713 37.8422 29.9714L17.4294 35.3182C16.6775 35.5152 15.907 35.0704 15.7015 34.3207L10.2466 14.4196Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.8871 30.5921C28.2321 29.9778 29.8533 28.9346 30.7507 27.4623C31.6481 25.9899 31.7803 24.0994 31.1475 21.7907L28.2931 11.3771L16.6258 14.4331L17.8074 18.7439L23.703 17.1996L25.4687 23.6415C25.659 24.3358 25.6418 24.9027 25.4171 25.3422C25.1925 25.7817 24.7746 26.0815 24.1636 26.2416C23.6847 26.367 23.1847 26.3509 22.6635 26.1932C22.1424 26.0356 21.5732 25.7347 20.9559 25.2908L18.8057 29.7475C19.7415 30.3849 20.8172 30.7736 22.0326 30.9138C23.2481 31.054 24.5329 30.9468 25.8871 30.5921Z"
                fill="#8588E5"
              />
            </svg>
            <Text
              fontWeight={600}
              color="black"
              textAlign="left"
              fontSize={22}
              mt={4}
              mb={8}
            >
              Get actionable insights and
              <br />
              custom built reports in
              <br />
              seconds, not hours.
            </Text>
          </Flex>
          {/* june block */}
          <Flex direction="column" justify="flex-start">
            <Text
              fontWeight={600}
              color="black"
              textAlign="left-align"
              fontSize={18}
              mb={4}
            >
              June
            </Text>
            <Text
              as="a"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/templates`}
              fontWeight={500}
              color={newPColor}
              textAlign="left-align"
              mb={4}
            >
              Templates
            </Text>
            <Text
              as="a"
              href="https://changelog.june.so"
              fontWeight={500}
              color={newPColor}
              textAlign="left-align"
              mb={4}
            >
              Changelog
            </Text>
            <Text
              as="a"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/pricing`}
              fontWeight={500}
              color={newPColor}
              textAlign="left-align"
              mb={4}
            >
              Pricing
            </Text>
            <Text
              as="a"
              href="mailto:enzo@june.so"
              fontWeight={500}
              color={newPColor}
              textAlign="left-align"
              mb={4}
            >
              Support
            </Text>
          </Flex>
          {/* co block */}
          <Flex direction="column" justify="flex-start">
            <Text
              fontWeight={600}
              color="black"
              textAlign="left-align"
              fontSize={18}
              mb={4}
            >
              Company
            </Text>
            <Text
              as="a"
              href={`${process.env.NEXT_PUBLIC_MARKETING_HOST}/manifesto`}
              fontWeight={500}
              color={newPColor}
              textAlign="left-align"
              mb={4}
            >
              Manifesto
            </Text>
            {/*             <Text
              fontWeight={500}
              color={newPColor}
              textAlign="left-align"
              mb={4}
            >
              We're hiring
            </Text> */}
            <Text
              as="a"
              href="mailto:enzo@june.so"
              fontWeight={500}
              color={newPColor}
              textAlign="left-align"
              mb={4}
            >
              Contact us
            </Text>
          </Flex>
          {/* cta block */}
          <Flex w="33%" direction="column" justify="flex-start">
            <Text
              fontWeight={600}
              color="black"
              textAlign="left"
              fontSize={18}
              mb={4}
            >
              Sign up for weekly updates and tips
            </Text>
            <Text fontWeight={500} color={newPColor} textAlign="left" mb={4}>
              Subscribe and receive regular updates on our <br />
              changelog and best practices
            </Text>
            <Flex
              direction="row"
              w="100%"
              justify="space-between"
              alignItems="center"
            >
              <Box w="73%" borderRadius={6}>
                <FormControl id="email" py={2}>
                  <Input
                    type="email"
                    placeholder="Email"
                    variant="filled"
                    h={50}
                    bg={newInputAreaBG}
                    fontWeight={500}
                  />
                </FormControl>
              </Box>

              <Button
                w="25%"
                colorScheme="templatePurple"
                bg="#6868F7"
                h={50}
                borderRadius="md"
                ml={2}
              >
                Sign up
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Center w="100%" mt={12}>
          <Divider color="newTemplateColors.div" w="90%" />
        </Center>
        <Center w="100%">
          <Flex
            w="90%"
            py={8}
            px={2}
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Flex direction="row" templateColumns="repeat(3, 1fr)" gap={2}>
              <Text as="a" href="" color={newPColor} fontWeight={500} pr={4}>
                © 2021 June
              </Text>
              <Text
                as="a"
                href="https://www.notion.so/Privacy-Policy-a4f99393a98b4ce6aa1bacd5f48157cc"
                color={newPColor}
                fontWeight={500}
                pr={4}
              >
                Privacy policy
              </Text>
              <Text
                as="a"
                href="https://www.notion.so/Privacy-Policy-a4f99393a98b4ce6aa1bacd5f48157cc"
                color={newPColor}
                fontWeight={500}
                pr={4}
              >
                Terms of use
              </Text>
            </Flex>
            <Flex direction="row" alignItems="center" justify="space-between">
              <TeamFooter pt={0} pr={9} />
              <Box pl={4}>
                <svg role="img" fill="#241F47" width="24" height="24">
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
              </Box>
            </Flex>
          </Flex>
        </Center>
      </Box>
    </>
  );
}

export default Footer;
