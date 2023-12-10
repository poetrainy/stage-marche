import { FC } from "react";
import NextLink from "next/link";
import { Flex, Image, Text } from "@chakra-ui/react";

import { NAVIGATION_CONTENTS } from "src/constants/nav";
import { isLocalStorageSignIn } from "src/libs/authenticate";

import { pathWithAuthenticator } from "src/libs/convert";

type Props = {
  path: string;
};

const Navigation: FC<Props> = ({ path }) => {
  return (
    <Flex
      as="nav"
      alignItems="flex-start"
      justifyContent="center"
      w="100vw"
      h="96px"
      bg="white"
      m="auto"
      pos="fixed"
      inset="auto 0 -1px 0"
      rounded="28px 28px 0px 0px"
      zIndex="10"
      textStyle="deepShadow"
    >
      {NAVIGATION_CONTENTS.filter((content) =>
        isLocalStorageSignIn() ? true : content.path !== "/user"
      ).map((item) => (
        <Flex
          as={NextLink}
          href={pathWithAuthenticator(item.path)}
          passHref
          key={item.path}
          flexDir="column"
          alignItems="center"
          gap="4px"
          position="relative"
          w={isLocalStorageSignIn() ? "19vw" : "22vw"}
          h="100%"
          padding="16px 0"
          sx={{
            "&::before": {
              content: '""',
              display: item.path === path ? "block" : "none",
              w: "24px",
              h: "4px",
              bg: "primary",
              rounded: "0px 0px 4px 4px",
              position: "absolute",
              inset: "0 auto auto auto",
            },
          }}
        >
          <Image
            as={item.icon}
            sx={{
              path: {
                fill: item.path === path ? "primary" : "black400",
              },
            }}
          />
          <Text
            as="span"
            color={item.path === path ? "primary" : "black400"}
            fontSize="1rem"
            fontWeight="bold"
          >
            {item.label}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default Navigation;
