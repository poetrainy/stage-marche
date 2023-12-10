import { FC } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import NextLink from "next/link";

import StageTypeComponent from "src/components/Stage/Type";
import StageGenre from "src/components/Stage/Genre";
import StageInformation from "src/components/Stage/Information";
import { StageType } from "src/types/stage";

import {
  pathWithAuthenticator,
  imageWithDirectoryPath,
} from "src/libs/convert";

type Props = {
  stage: StageType;
};

const StageCardLarge: FC<Props> = ({ stage }) => (
  <Flex
    as={NextLink}
    href={pathWithAuthenticator(`stages/${stage.path}`)}
    passHref
    gap="4%"
    bg="white"
    padding="14px"
    rounded="24px"
    textStyle="lightShadow"
  >
    <Box
      w="44%"
      bg="black600"
      pt="calc(45% / 3 * 4.2)"
      rounded="14px"
      overflow="hidden"
      pos="relative"
      boxShadow="0px 0px 3px rgba(0, 0, 0, 0.1)"
    >
      <Image
        src={imageWithDirectoryPath(`stage_${stage.path}.jpg`)}
        w="100%"
        h="100%"
        objectFit="cover"
        pos="absolute"
        inset="0 0 0 0"
      />
    </Box>
    <Flex flexDir="column" justifyContent="space-between" w="52%" p="6px 0">
      <Flex flexDir="column" gap="4px">
        <StageTypeComponent type={stage.type} />
        <Text as="h3" fontSize="1.7rem" fontWeight="bold">
          {stage.name}
        </Text>
        <StageGenre data={stage} />
      </Flex>
      <StageInformation
        places={stage.schedule.map((schedule) => schedule.prefecture)}
        date={{
          from: stage.schedule[0].dateFrom,
          to: stage.schedule[stage.schedule.length - 1].dateTo,
        }}
      />
    </Flex>
  </Flex>
);

export default StageCardLarge;
