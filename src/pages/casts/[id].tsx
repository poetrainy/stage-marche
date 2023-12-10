import type { NextPage } from "next";
import NextLink from "next/link";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import StageBunnerLargeWrapper from "src/components/Stage/BunnerLargeWrapper";
import ContentsBase from "src/components/ContentsBase";
import StageMovie from "src/components/Stage/Movie";
import Back from "src/components/Back";

import { CastType } from "src/types/stage";

import { MOCK_CASTS, MOCK_STAGES } from "src/constants/mock";

import {
  imageWithDirectoryPath,
  pathWithAuthenticator,
} from "src/libs/convert";
import FavoriteActorButton from "src/components/FavoriteActorButton";

type Props = {
  cast: CastType;
};

const CastId: NextPage<Props> = ({ cast }) => {
  const stages = MOCK_STAGES.filter((stage) => stage.casts.includes(cast.id));
  /**
   * 同じ舞台に出演しているキャストを掲載する
   * 上限4人
   *  */
  const recommendCasts = [...new Set(stages.map(({ casts }) => casts).flat())]
    .filter((resultCast) => resultCast !== cast.id)
    .splice(-4)
    .map((cast) => {
      return {
        cast: MOCK_CASTS.find(({ id }) => id === cast),
        stage: stages.filter((stage) => stage.casts.includes(cast)),
      };
    });

  const castObjects = [
    {
      heading: "出演している作品",
      component: <StageBunnerLargeWrapper stages={stages} />,
    },
    {
      heading: "配信中の動画",
      component: (
        <StageMovie urls={stages.map(({ youtube }) => youtube).flat()} />
      ),
    },
    {
      heading: "こんな共演者もいます",
      component: (
        <Flex as="ul" flexDir="column" gap="12px" w="100%">
          {recommendCasts.map((recommendCast) => (
            <Box as="li" key={`recommend${recommendCast.cast?.id}`}>
              <Flex
                as={NextLink}
                href={pathWithAuthenticator(`casts/${recommendCast.cast?.id}`)}
                alignItems="center"
                gap="8px"
                w="100%"
              >
                <Image
                  src={imageWithDirectoryPath(
                    `cast_${recommendCast.cast?.id}.jpg`
                  )}
                  w="56px"
                  h="56px"
                  overflow="hidden"
                  rounded="full"
                />
                <Flex flexDir="column" gap="4px" w="calc(100% - 64px - 8px)">
                  <Text
                    as="span"
                    display="block"
                    color="black500"
                    fontSize="1rem"
                  >
                    {`${recommendCast.stage[0].name}${
                      recommendCast.stage.length >= 2 ? "他" : ""
                    } 出演`}
                  </Text>
                  <Text
                    as="span"
                    display="block"
                    fontSize="1.6rem"
                    fontWeight="bold"
                  >
                    {recommendCast.cast?.name}
                  </Text>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Flex>
      ),
    },
  ];

  return (
    <>
      <Box
        w="100%"
        h="160px"
        bg="greenToBlue"
        pos="absolute"
        textStyle="lightShadow"
      />
      <Flex
        flexDir="column"
        gap="40px"
        p="80px 0 64px"
        pos="relative"
        textStyle="bodyW"
      >
        <Back />
        <Flex alignItems="center" flexDir="column" gap="8px" m="auto">
          <Box w="120px" h="120px" pos="relative">
            <Image
              src={imageWithDirectoryPath(`cast_${cast.id}.jpg`)}
              w="100%"
              h="100%"
              rounded="full"
              overflow="hidden"
              border="5px solid white"
              textStyle="lightShadow"
            />
            <FavoriteActorButton />
          </Box>
          <Heading as="h1" w="fit-content" fontSize="2.2rem">
            {cast.name}
          </Heading>
          <Text color="black600" fontSize="1.2rem">
            {cast.description}
          </Text>
        </Flex>
        <ContentsBase data={castObjects} fontSize="1.8rem" />
      </Flex>
    </>
  );
};

export default CastId;

export const getStaticPaths = async () => {
  const paths = MOCK_CASTS.map((item: CastType) => ({
    params: { id: item.id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  return {
    props: {
      cast: MOCK_CASTS.find(({ id }) => id === params.id)!,
    },
  };
};
