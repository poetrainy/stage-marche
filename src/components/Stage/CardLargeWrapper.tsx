import { FC } from "react";
import { Flex } from "@chakra-ui/react";

import StageCardLarge from "src/components/Stage/CardLarge";

import { StageType } from "src/types/stage";

type Props = {
  stages: StageType[];
};

const StageCardLargeWrapper: FC<Props> = ({ stages }) => (
  <Flex flexDir="column" gap="16px" w="100%">
    {stages.map((stage) => (
      <StageCardLarge key={"large" + stage.name} stage={stage} />
    ))}
  </Flex>
);

export default StageCardLargeWrapper;
