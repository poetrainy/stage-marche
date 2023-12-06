import { FC } from "react";
import { Flex, Text } from "@chakra-ui/react";

import { StageType } from "src/types/stage";
import { ColumnType } from "src/types/column";

type Props = {
  data: StageType | ColumnType;
  isColumn?: boolean;
};

const StageGenre: FC<Props> = ({ data, isColumn }) => {
  return (
    <Flex gap="4px">
      {data.genres.map((genre) => (
        <Text
          as="span"
          key={genre}
          color={isColumn ? "primary" : "black400"}
          fontSize="1.2rem"
          fontWeight="bold"
        >
          {`#${genre}`}
        </Text>
      ))}
    </Flex>
  );
};

export default StageGenre;
