import { FC } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { CastType } from "src/types/stage";

import { imageWithDirectoryPath } from "src/libs/imageWithDirectoryPath";

type Props = {
  casts: CastType[];
};

const StageCasts: FC<Props> = ({ casts }) => (
  <Flex as="ul" gap="14px 4%" flexWrap="wrap" w="100%">
    {casts.map((cast) => (
      <Flex as="li" key={cast.id} flexDir="column" gap="8px" w="22%">
        <Box
          w="100%"
          pt="100%"
          bg="black600"
          rounded="full"
          overflow="hidden"
          pos="relative"
        >
          <Image
            src={imageWithDirectoryPath(`cast_${cast.id}.jpg`)}
            w="100%"
            h="100%"
            pos="absolute"
            inset="0 0 auto auto"
          />
        </Box>
        <Text fontSize="1.2rem" fontWeight="bold" textAlign="center">
          {cast.name}
        </Text>
      </Flex>
    ))}
  </Flex>
);

export default StageCasts;
