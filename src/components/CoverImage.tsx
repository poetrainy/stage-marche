import { FC } from "react";
import { Box, Image } from "@chakra-ui/react";
import { imageWithDirectoryPath } from "src/libs/imageWithDirectoryPath";

type Props = {
  path: string;
};

const CoverImage: FC<Props> = ({ path }) => (
  <Box w="100%" h="264px" overflow="hidden" pos="relative">
    <Image
      src={imageWithDirectoryPath(path)}
      w="100%"
      h="100%"
      objectFit="contain"
    />
    <Box
      bg={`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${imageWithDirectoryPath(
        path
      )}')`}
      bgSize="100%, cover"
      bgPosition="center, center"
      filter="blur(8px)"
      pos="absolute"
      inset="0 0 0 0"
      zIndex="-1"
      m="-20px"
    />
  </Box>
);

export default CoverImage;
