import { FC } from "react";
import { Text } from "@chakra-ui/react";

import { ColumnType } from "src/types/column";

type Props = {
  data: ColumnType;
};

const ColumnDate: FC<Props> = ({ data }) => (
  <Text as="span" color="black400" fontSize="1.1rem" fontWeight="bold">
    {`${data.date.y}年${data.date.m}月${data.date.d}日`}
  </Text>
);

export default ColumnDate;
