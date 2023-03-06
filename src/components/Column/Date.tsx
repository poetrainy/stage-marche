import { FC } from 'react';
import { Text } from '@chakra-ui/react';

import { columnType } from 'src/types/column';

type Props = {
  data: columnType;
};

const ColumnDate: FC<Props> = ({ data }) => {
  return (
    <Text color={'black400'} fontSize={'1.1rem'} fontWeight={'bold'}>
      {data.date.y}年{data.date.m}月{data.date.d}日
    </Text>
  );
};

export default ColumnDate;
