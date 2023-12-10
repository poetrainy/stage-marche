import { FC } from "react";
import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import NextLink from "next/link";

import StageTypeComponent from "src/components/Stage/Type";
import StageInformation from "src/components/Stage/Information";
import FavoriteStageButton from "src/components/FavoriteStageButton";

import { StageType } from "src/types/stage";

import {
  imageWithDirectoryPath,
  pathWithAuthenticator,
} from "src/libs/convert";

type Props = {
  stage: StageType;
};

const StageCardSmall: FC<Props> = ({ stage }) => (
  <Box pos="relative">
    <Flex
      as={NextLink}
      href={pathWithAuthenticator(`/stages/${stage.path}`)}
      passHref
      flexDirection="column"
      justifyContent="space-between"
      w="160px"
      h="372px"
      bg="white"
      padding="10px 10px 14px"
      rounded="16px"
      textStyle="lightShadow"
    >
      <Box
        w="100%"
        bg="black600"
        pt="calc(100% / 3 * 4.2)"
        rounded="8px"
        overflow="hidden"
        pos="relative"
        mb="8px"
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
      <StageTypeComponent type={stage.type} />
      <Text as="h3" mt="4px" fontSize="1.4rem" fontWeight="bold">
        {stage.name}
      </Text>
      <Spacer />
      <StageInformation
        places={stage.schedule.map((schedule) => schedule.prefecture)}
        date={{
          from: stage.schedule[0].dateFrom,
          to: stage.schedule[stage.schedule.length - 1].dateTo,
        }}
      />
    </Flex>
    <FavoriteStageButton getIsFavorite isFixed />
  </Box>
);

export default StageCardSmall;
