import { Box, Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import NextLink from "next/link";

import Layout from "src/components/Layout";
import StageInformation from "src/components/Stage/Information";

import { pathWithAuthenticator } from "src/libs/convert";

import { MOCK_STAGES } from "src/constants/mock";

const Tickets: NextPage = () => {
  const flag: boolean[] = [true, false, false];

  return (
    <Layout isFixedObjectsView>
      <>
        <Box
          w="100vw"
          h="100vh"
          bg="greenToBlue"
          pos="fixed"
          inset="0 0 0 0"
          zIndex={-1}
        />
        <Flex flexDir="column" gap="16px">
          {MOCK_STAGES.map((item, i) => (
            <Flex
              as={NextLink}
              href={pathWithAuthenticator(`/stages/${item.id}`)}
              passHref
              key={item.name + i}
              minH="176px"
            >
              <Flex
                flexDir="column"
                justifyContent="space-between"
                w="77%"
                bg="rgba(255, 255, 255, 0.95)"
                p="16px 12px 16px 16px"
                pos="relative"
                rounded="16px 0 0 16px"
                textStyle="deepShadow"
                sx={{
                  "&::after": {
                    content: '""',
                    display: "block",
                    w: "10px",
                    h: "100%",
                    borderRightColor: "black500",
                    borderRightStyle: "dotted",
                    borderRightw: "3px",
                    position: "absolute",
                    inset: "0 -2px auto auto",
                  },
                }}
              >
                <Box>
                  <Text
                    as="h3"
                    color="primary"
                    fontSize="2rem"
                    fontWeight="bold"
                  >
                    {item.name}
                  </Text>
                </Box>
                <StageInformation stage={item} index={0} />
              </Flex>
              {flag[i] && (
                <Box
                  w="23%"
                  bg="rgba(255, 255, 255, 0.95)"
                  rounded="0 16px 16px 0"
                  textStyle="deepShadow"
                />
              )}
            </Flex>
          ))}
        </Flex>
      </>
    </Layout>
  );
};

export default Tickets;
