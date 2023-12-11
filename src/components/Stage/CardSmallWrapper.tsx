import { FC } from "react";
import { Box, Flex } from "@chakra-ui/react";

import StageCardSmall from "src/components/Stage/CardSmall";

import { StageType } from "src/types/stage";

type Props = {
  stages: StageType[];
};

const StageCardSmallWrapper: FC<Props> = ({ stages }) => (
  <Box
    w="111.11111%"
    m="-16px -5.5%"
    p="16px 0"
    overflow="scroll"
    sx={{
      "&::-webkit-scrollbar": {
        display: "none",
      },
      "-ms-overflow-style": "none",
      scrollbarWidth: "none",
    }}
  >
    <Flex
      gap="12px"
      w={`calc(160px * ${stages.length} + 12px * 2 + 5.5% * 2)`}
      p="0 5.5%"
    >
      {stages.map((stage) => (
        <StageCardSmall key={"small" + stage.name} stage={stage} />
      ))}
    </Flex>
  </Box>
);

export default StageCardSmallWrapper;
