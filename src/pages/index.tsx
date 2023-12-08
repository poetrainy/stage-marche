import { Box, Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import NextLink from "next/link";

import Layout from "src/components/Layout";
import OriginalSpacer from "src/components/OriginalSpacer";
import StageTypeComponent from "src/components/Stage/Type";
import StageBunnerLargeWrapper from "src/components/Stage/BunnerLargeWrapper";
import CoverImage from "src/components/CoverImage";
import StageBunnerSmall from "src/components/Stage/BunnerSmall";
import ContentsBase from "src/components/ContentsBase";
import StageCasts from "src/components/Stage/Casts";

import { MOCK_CASTS, MOCK_STAGES, MOCK_USER } from "src/constants/mock";

import {
  pathWithAuthenticator,
  prefectureWithFixedText,
  imageWithDirectoryPath,
} from "src/libs/convert";

const Home: NextPage = () => {
  const [selected, setSelected] = useState<number>(0);

  const prev = () => {
    if (selected === 0) {
      setSelected(MOCK_STAGES.length - 1);
    } else {
      setSelected(selected - 1);
    }
  };
  const choice = (i: number) => {
    setSelected(i);
  };
  const next = () => {
    if (selected === MOCK_STAGES.length - 1) {
      setSelected(0);
    } else {
      setSelected(selected + 1);
    }
  };

  const contents = [
    {
      heading: `${prefectureWithFixedText(
        MOCK_USER.prefecture
      )}中の作品があります`,
      component: (
        <Box w="111.11111%" overflow="hidden" pos="relative" m="0 -5.5%">
          <Flex
            as="ul"
            w={`calc(100% * ${MOCK_STAGES.length})`}
            transform={`translateX(calc(${
              100 / MOCK_STAGES.length
            }% * ${-selected}))`}
            transition="transform 0.3s"
          >
            {MOCK_STAGES.map((item, i) => (
              <Box
                as="li"
                key={item.name + i}
                w={`${100 / MOCK_STAGES.length}%`}
                h="264px"
              >
                <Box
                  as={NextLink}
                  href={pathWithAuthenticator(`/stages/${item.id}`)}
                  passHref
                  display="block"
                  w="100%"
                  h="100%"
                  position="relative"
                  overflow="hidden"
                >
                  <CoverImage path={`stage_img_${item.id}_01.jpg`} />
                  <Box
                    w="100%"
                    bg={
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)"
                    }
                    pos="absolute"
                    inset="auto auto 0 0"
                    p="0 5vw 20px"
                  >
                    <StageTypeComponent type={item.type} />
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
                          background: `url(${imageWithDirectoryPath(
                            "stage_info_place.svg"
                          )}) no-repeat`,
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
                </Box>
              </Box>
            ))}
          </Flex>
          <OriginalSpacer size="12px" />
          <Flex gap="8px" w="fit-content" m="0 auto">
            {MOCK_STAGES.map((item, i) => (
              <Box
                key={item.id}
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
            type="button"
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
            type="button"
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
      component: <StageBunnerLargeWrapper stages={MOCK_STAGES} />,
    },
    {
      heading: "気になる公演",
      component: <StageBunnerSmall stages={MOCK_STAGES} />,
    },
    {
      heading: "最近見ている出演者",
      component: (
        <StageCasts
          casts={MOCK_USER.recentCasts.map(
            (id) => MOCK_CASTS.find((cast) => cast.id === id)!
          )}
        />
      ),
    },
  ];

  return (
    <Layout isSearch isFixedObjectsView>
      <ContentsBase data={contents} />
    </Layout>
  );
};

export default Home;
