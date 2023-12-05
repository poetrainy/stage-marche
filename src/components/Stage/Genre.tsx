import { FC } from "react";
import { Flex, Text } from "@chakra-ui/react";

import { STAGE_GENRES } from "src/constants/stage";
import { COLUMN_GENRES } from "src/constants/column";

import { StageType } from "src/types/stage";
import { ColumnType } from "src/types/column";

type Props = {
  data: StageType | ColumnType;
  isColumn?: boolean;
};

const StageGenre: FC<Props> = ({ data, isColumn }) => {
  return (
    <Flex gap="4px">
      {data.genres.map((genre, i) => (
        <Text
          as="span"
          key={genre + i}
          color={isColumn ? "primary" : "black400"}
          fontSize="1.2rem"
          fontWeight="bold"
        >
          {`#${isColumn ? COLUMN_GENRES[i] : STAGE_GENRES[genre]}`}
        </Text>
      ))}
    </Flex>
  );
};

export default StageGenre;
