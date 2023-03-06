import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';

import StageGenre from 'src/components/Stage/Genre';

import { castType, stageType } from 'src/types/stage';
import { columnType } from 'src/types/column';

import { prefectureArray, stageArray, castArray } from 'src/libs/stage';
import { columnArray } from 'src/libs/column';

type Props = {
  id: string;
};

const ColumnId: NextPage<Props> = ({ id }) => {
  const [data, setData] = useState<columnType>();

  useEffect(() => {
    let array = columnArray.filter((item: columnType) => item.id + '' === id);
    setData(array[0]);
  }, []);

  return (
    <>
      {data && (
        <Box>
          <Text>{data.title}</Text>
          <StageGenre data={data} column />
          <Text as={'pre'}>{data.text}</Text>
        </Box>
      )}
    </>
  );
};

export default ColumnId;

export const getStaticPaths = async () => {
  const paths = columnArray.map((item: columnType) => ({
    params: { id: item.id + '' },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  return {
    props: {
      id: params.id,
    },
  };
};
