import { FC } from "react";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";

import StageTypeComponent from "src/components/Stage/Type";
import StageGenre from "src/components/Stage/Genre";
import StageInformation from "src/components/Stage/Information";

import { StageType } from "src/types/stage";

type Props = {
  stage: StageType;
  number?: number[];
};

const StageBunnerLarge: FC<Props> = ({ stage, number }) => (
  <Flex
    as={NextLink}
    href={`/stage/${stage.path}`}
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
      <Box
        as="img"
        src={`/img/stage_img_${stage.path}_01.jpg`}
        w="100%"
        h="100%"
        objectFit="cover"
        pos="absolute"
        inset="0 0 0 0"
      />
    </Box>
    <Flex flexDir="column" justifyContent="space-between" w="52%" p="6px 0">
      <VStack alignItems="stretch" gap="4px" p={0}>
        <StageTypeComponent data={stage} />
        <Text as="h3" fontSize="1.7rem" fontWeight="bold">
          {stage.name}
        </Text>
        <StageGenre data={stage} />
      </VStack>
      <StageInformation data={stage} index={0} time />
    </Flex>
  </Flex>
);

export default StageBunnerLarge;
