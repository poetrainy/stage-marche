import { FC } from "react";
import { Box, Flex } from "@chakra-ui/react";

type Props = {
  urls: string[];
};

const StageMovie: FC<Props> = ({ urls }) => (
  <Flex flexDirection="column" gap="12px">
    {urls.map((url) => (
      <Box
        key={url}
        w="100%"
        pt="calc(100% / 16 * 9)"
        pos="relative"
        rounded="20px"
        overflow="hidden"
      >
        <Box
          as="iframe"
          w="100%"
          h="100%"
          pos="absolute"
          inset="0 0 auto auto"
          src={`https://www.youtube.com/embed/${url}`}
          title="YouTube video player"
          frameBorder={0}
          allow={
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          }
          allowFullScreen
        />
      </Box>
    ))}
  </Flex>
);

export default StageMovie;
