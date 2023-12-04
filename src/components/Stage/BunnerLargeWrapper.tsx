import { FC } from "react";
import { Flex, VStack } from "@chakra-ui/react";

import { StageType } from "src/types/stage";
import StageBunnerLarge from "src/components/Stage/BunnerLarge";

type Props = {
  stages: StageType[];
  number?: number[];
};

const StageBunnerLargeWrapper: FC<Props> = ({ stages, number }) => {
  return (
    <VStack alignItems="stretch" gap="16px" p={0} textStyle="bodyW">
      {stages.map((item) => (
        <StageBunnerLarge key={item.name} stage={item} />
      ))}
    </VStack>
  );
};

export default StageBunnerLargeWrapper;
