import { Box, Flex, Heading, Text, VStack, background } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import NextLink from "next/link";

import Layout from "src/components/Layout";
import OriginalSpacer from "src/components/OriginalSpacer";
import StageTypeComponent from "src/components/Stage/Type";
import StageBunnerLargeWrapper from "src/components/Stage/BunnerLargeWrapper";

import { MOCK_STAGES_BASE } from "src/constants/stage";
import { pathWithAuthenticator } from "src/libs/pathWithAuthenticator";

const Home: NextPage = () => {
  const Component = () => {
    const [selected, setSelected] = useState<number>(0);
    const prev = () => {
      if (selected === 0) {
        setSelected(MOCK_STAGES_BASE.length - 1);
      } else {
        setSelected(selected - 1);
      }
    };
    const choice = (i: number) => {
      setSelected(i);
    };
    const next = () => {
      if (selected === MOCK_STAGES_BASE.length - 1) {
        setSelected(0);
      } else {
        setSelected(selected + 1);
      }
    };

    const contents = [
      {
        heading: "大阪公演中の作品があります",
        content: (
          <Box w="100vw" overflow="hidden" pos="relative">
            <Flex
              as="ul"
              w={`calc(100vw * ${MOCK_STAGES_BASE.length})`}
              transform={`translateX(calc(100vw * -${selected}))`}
              transition="transform 0.3s"
            >
              {MOCK_STAGES_BASE.map((item, i) => (
                <Box
                  as="li"
                  key={item.name + i}
                  w="100vw"
                  h="280px"
                  sx={{
                    ">a": {
                      display: "block",
                      w: "100%",
                      h: "100%",
                      position: "relative",
                      overflow: "hidden",
                    },
                  }}
                >
                  <NextLink
                    href={`${pathWithAuthenticator(`/stage/${item.path}`)}`}
                    passHref
                  >
                    <Box
                      w="100%"
                      bg={
                        "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)"
                      }
                      pos="absolute"
                      inset="auto auto 0 0"
                      p="0 5vw 20px"
                    >
                      <StageTypeComponent data={item} />
                      <OriginalSpacer size="4px" />
                      <Text color="white" fontWeight="bold" fontSize="2.2rem">
                        {item.name}
                      </Text>
                      <Flex
                        alignItems="center"
                        sx={{
                          "&::before": {
                            content: '""',
                            display: "block",
                            w: "16px",
                            h: "16px",
                            background:
                              'url("./img/stage_info_place.svg") no-repeat',
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            marginRight: "2px",
                          },
                        }}
                      >
                        {item.schedule.map((content, i2) => (
                          <Text
                            as="span"
                            key={content.place + i2}
                            color="black300"
                            fontSize="1.2rem"
                            sx={{
                              ...(i2 < item.schedule.length - 1 && {
                                "&::after": {
                                  content: '","',
                                  marginRight: "3px",
                                },
                              }),
                            }}
                          >
                            {content.place}
                          </Text>
                        ))}
                      </Flex>
                    </Box>
                    <Box
                      as="img"
                      src={`/img/stage_img_${item.path}_01.jpg`}
                      w="100%"
                      h="100%"
                      objectFit="contain"
                    />
                    <Box
                      bg={`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/img/stage_img_${item.path}_01.jpg')`}
                      bgSize="100%, cover"
                      bgPosition="center, center"
                      filter="blur(8px)"
                      pos="absolute"
                      inset="0 0 0 0"
                      zIndex="-1"
                      m="-20px"
                    />
                  </NextLink>
                </Box>
              ))}
            </Flex>
            <OriginalSpacer size="12px" />
            <Flex gap="8px" w="fit-content" m="0 auto">
              {MOCK_STAGES_BASE.map((item, i) => (
                <Box
                  key={item.path + i}
                  w="10px"
                  h="10px"
                  rounded="full"
                  transition="background 0.2s"
                  onClick={() => choice(i)}
                  sx={{
                    ...(selected === i
                      ? {
                          bg: "primary",
                        }
                      : {
                          bg: "black300",
                        }),
                  }}
                />
              ))}
            </Flex>
            <Box
              as="button"
              onClick={() => prev()}
              inset="0 auto 22px 16px"
              textStyle="button"
              sx={{
                "&::before": {
                  content: '""',
                  display: "block",
                  w: "4px",
                  h: "12px",
                  bg: "black200",
                  rounded: "full",
                  margin: "auto",
                  position: "absolute",
                  inset: "9px 0 auto -2px",
                  transform: "rotateZ(45deg)",
                },
                "&::after": {
                  content: '""',
                  display: "block",
                  w: "4px",
                  h: "12px",
                  bg: "black200",
                  rounded: "full",
                  margin: "auto",
                  position: "absolute",
                  inset: "auto 2px 9px 0",
                  transform: "rotateZ(-45deg)",
                },
              }}
            />
            <Box
              as="button"
              onClick={() => next()}
              inset="0 16px 22px auto"
              textStyle="button"
              sx={{
                "&::before": {
                  content: '""',
                  display: "block",
                  w: "4px",
                  h: "12px",
                  bg: "black200",
                  rounded: "full",
                  margin: "auto",
                  position: "absolute",
                  inset: "9px -2px auto 0",
                  transform: "rotateZ(-45deg)",
                },
                "&::after": {
                  content: '""',
                  display: "block",
                  w: "4px",
                  h: "12px",
                  bg: "black200",
                  rounded: "full",
                  margin: "auto",
                  position: "absolute",
                  inset: "auto 0 9px 2px",
                  transform: "rotateZ(45deg)",
                },
              }}
            />
          </Box>
        ),
      },
      {
        heading: "B席に余裕があります",
        content: <StageBunnerLargeWrapper stages={MOCK_STAGES_BASE} />,
      },
    ];

    return (
      <VStack alignItems="stretch" gap="24px" p="0">
        {contents.map((content) => (
          <VStack
            key={content.heading}
            as="section"
            alignItems="center"
            gap="16px"
            p="0"
          >
            <Heading
              as="h2"
              fontSize="2rem"
              fontWeight="bold"
              textStyle="bodyW"
            >
              {content.heading}
            </Heading>
            {content.content}
          </VStack>
        ))}
      </VStack>
    );
  };

  return <Layout component={<Component />} search index />;
};

export default Home;