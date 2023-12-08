import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import Layout from "src/components/Layout";

import { MOCK_USER } from "src/constants/mock";

import { pathWithAuthenticator } from "src/libs/convert";
import { onLocalStorageAuthenticate } from "src/libs/authenticate";

import ICON_USER_SETTING from "src/assets/svg/icon_user_setting.svg";

const STAMPS = [...Array(9).keys()];

const USER_FOOTER_LINKS: string[] = [
  "特定商取引法",
  "ステージマルシェ会員規約",
  "プライバシーポリシー",
  "チケット不正転売禁止法について",
];

const User: NextPage = () => {
  const router = useRouter();

  return (
    <Layout isFixedObjectsView>
      <>
        <Box
          w="100vw"
          h="336px"
          bg="greenToBlue"
          pos="absolute"
          inset="64px 0 0 0"
          zIndex={-1}
        />
        <Flex flexDir="column" gap="24px" w="95%" m="auto">
          <Flex justify="center" flexWrap="wrap" gap="16px">
            <Center
              w="full"
              gap="16px"
              bg="white"
              rounded="32px"
              p="24px 0"
              textStyle="lightShadow"
            >
              <Flex
                flexWrap="wrap"
                gap="8px"
                w={`${56 * 3 + 8 * 2}px`}
                h={`${56 * 3 + 8 * 2}px`}
              >
                {STAMPS.map((_, i) => (
                  <Box
                    w="56px"
                    h="56px"
                    border="5px dotted"
                    borderColor={
                      MOCK_USER.doneStamps > i ? "primary" : "black400"
                    }
                    rounded="full"
                  />
                ))}
              </Flex>
              <Box
                w="96px"
                h="96px"
                border="5px dotted"
                borderColor={
                  MOCK_USER.doneStamps === 10 ? "primary" : "black400"
                }
                rounded="full"
              />
            </Center>
            <Center
              w="80px"
              h="80px"
              bg="white"
              rounded="16px"
              textStyle="lightShadow"
            >
              {MOCK_USER.prefecture}
            </Center>
            <Center
              w="calc(100% - 80px - 16px)"
              h="80px"
              bg="white"
              rounded="16px"
              textStyle="lightShadow"
            >好きな出演者の一覧は？ジャンルはどこにだす？</Center>
          </Flex>
          <Flex gap="4px">
            <Image as={ICON_USER_SETTING} fill="black500" />
            <Text as="span" color="black500" fontWeight="bold">
              アカウントの編集
            </Text>
          </Flex>
          <Flex flexDir="column" gap="8px" color="black500" fontSize="1.2rem">
            {USER_FOOTER_LINKS.map((label) => (
              <Text>{label}</Text>
            ))}
          </Flex>
          <Text
            as="button"
            type="button"
            gap="8px"
            w="fit-content"
            color="black500"
            fontSize="1.2rem"
            onClick={() => {
              onLocalStorageAuthenticate("false");
              router.push(pathWithAuthenticator("/"));
            }}
          >
            ログアウト
          </Text>
        </Flex>
      </>
    </Layout>
  );
};

export default User;
