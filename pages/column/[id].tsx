import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';

import StageGenre from 'src/components/Stage/Genre';
import ColumnDate from 'src/components/Column/Date';

import { columnType } from 'src/types/column';

import { columnArray } from 'src/libs/column';
import OriginalSpacer from 'src/components/OriginalSpacer';
import Heading from 'src/components/Heading';
import useGetPath from 'src/hooks/useGetPath';

type Props = {
  id: string;
};

const ColumnId: NextPage<Props> = ({ id }) => {
  const [data, setData] = useState<columnType>();
  const path = useGetPath()

  useEffect(() => {
    let array = columnArray.filter((item: columnType) => item.id + '' === id);
    setData(array[0]);
  }, []);

  const ColumnInfo = () => (
    <>
      {data && (
        <Box textStyle={'bodyW'}>
          <ColumnDate data={data} />
          <OriginalSpacer size={'4px'} />
          <Text fontSize={'2rem'} fontWeight={'bold'}>
            {data.title}
          </Text>
          <OriginalSpacer size={'8px'} />
          <StageGenre data={data} column />
        </Box>
      )}
    </>
  );

  const ColumnText = () => (
    <>
      {data && (
        <Text as={'pre'} bg={'white'} p={'24px 5vw'} lineHeight={'2.6rem'}>
          {data.text}
        </Text>
      )}
    </>
  );

  return (
    <>
      <Heading path={'/column'} back />
      <OriginalSpacer size={'88px'} />
      <ColumnInfo />
      <OriginalSpacer size={'24px'} />
      <ColumnText />
      <OriginalSpacer size={'64px'} />
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
