import type { NextPage } from "next";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import StageBunnerLargeWrapper from "src/components/Stage/BunnerLargeWrapper";
import ContentsBase from "src/components/ContentsBase";
import StageMovie from "src/components/Stage/Movie";
import Back from "src/components/Back";

import { CastType } from "src/types/stage";

import { MOCK_CASTS, MOCK_STAGES } from "src/constants/mock";

import { imageWithDirectoryPath } from "src/libs/convert";

type Props = {
  cast: CastType;
};

const CastId: NextPage<Props> = ({ cast }) => {
  const stages = MOCK_STAGES.filter((stage) => stage.casts.includes(cast.id));

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
        gap="32px"
        p="80px 0 64px"
        pos="relative"
        textStyle="bodyW"
      >
        <Back />
        <Flex alignItems="center" flexDir="column" gap="8px" m="auto">
          <Box
            w="120px"
            h="120px"
            bg="black600"
            rounded="full"
            overflow="hidden"
            pos="relative"
            border="5px solid white"
            textStyle="lightShadow"
          >
            <Image
              src={imageWithDirectoryPath(`cast_${cast.id}.jpg`)}
              w="100%"
              h="100%"
              pos="absolute"
              inset="0 0 auto auto"
            />
          </Box>
          <Heading as="h1" w="fit-content" fontSize="2.2rem">
            {cast.name}
          </Heading>
          <Text color="black600" fontSize="1.2rem">
            {cast.description}
          </Text>
        </Flex>
        <ContentsBase data={castObjects} fontSize="1.6rem" />
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
