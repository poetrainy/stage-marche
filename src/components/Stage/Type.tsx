import { FC } from "react";
import { Text } from "@chakra-ui/react";

import { STAGE_TYPES } from "src/constants/stage";

import { StageType } from "src/types/stage";

type Props = {
  data: StageType;
};

const StageTypeComponent: FC<Props> = ({ data }) => {
  return (
    <Text
      w="fit-content"
      color="white"
      bg={STAGE_TYPES[data.type].color}
      p="4px 12px"
      fontSize="1.1rem"
      fontWeight="bold"
      rounded="full"
    >
      {STAGE_TYPES[data.type].text}
    </Text>
  );
};

export default StageTypeComponent;
