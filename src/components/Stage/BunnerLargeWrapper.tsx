import { FC } from "react";
import { Flex } from "@chakra-ui/react";

import { StageType } from "src/types/stage";
import StageBunnerLarge from "src/components/Stage/BunnerLarge";

type Props = {
  stages: StageType[];
  number?: number[];
};

const StageBunnerLargeWrapper: FC<Props> = ({ stages, number }) => {
  return (
    <Flex flexDir="column" gap="16px" textStyle="bodyW">
      {stages.map((item) => (
        <StageBunnerLarge key={item.name} stage={item} />
      ))}
    </Flex>
  );
};

export default StageBunnerLargeWrapper;
