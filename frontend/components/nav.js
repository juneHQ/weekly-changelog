import React from "react";
import Link from "next/link";
import { Box, Flex, Text } from '@chakra-ui/core';

const Nav = ({ categories }) => {
  return (
    <div>
      <nav data-uk-navbar>
        <div>
          <div>
            <Box p={4}>
              <Flex>
                <Link href="https://june.so">
                  <Text textDecoration='none' color='gray.400'>June</Text>
                </Link>  
                <Text px={2}  color='gray.400'>/</Text>
                <Link href="/">
                  <Text textDecoration='none' color='black'>Changelog</Text>
                </Link>
              </Flex>
            </Box>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
