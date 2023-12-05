import { FC } from "react";
import { Text } from "@chakra-ui/react";

import { STAGE_TYPES } from "src/constants/stage";

type Props = {
  type: "musical" | "straightPlay" | "kabuki" | "rakugo";
};

const StageTypeComponent: FC<Props> = ({ type }) => {
  return (
    <Text
      w="fit-content"
      color="white"
      bg={STAGE_TYPES[type].color}
      p="4px 12px"
      fontSize="1.1rem"
      fontWeight="bold"
      rounded="full"
    >
      {STAGE_TYPES[type].label}
    </Text>
  );
};

export default StageTypeComponent;
