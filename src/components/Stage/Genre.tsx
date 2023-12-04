import { FC } from "react";
import { Flex, Text } from "@chakra-ui/react";

import { STAGE_GENRES } from "src/constants/stage";
import { COLUMN_GENRES } from "src/constants/column";

import { StageType } from "src/types/stage";
import { ColumnType } from "src/types/column";

type Props = {
  data: StageType | ColumnType;
  column?: boolean;
};

const StageGenre: FC<Props> = ({ data, column }) => {
  return (
    <Flex gap="4px">
      {data.genre.map((item, i) => (
        <Text
          as="span"
          key={item + i}
          color={column ? "primary" : "black400"}
          fontSize="1.2rem"
          fontWeight="bold"
        >
          {`#${column ? COLUMN_GENRES[i] : STAGE_GENRES[item]}`}
        </Text>
      ))}
    </Flex>
  );
};

export default StageGenre;
