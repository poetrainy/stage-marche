import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";

import StageGenre from "src/components/Stage/Genre";
import ColumnDate from "src/components/Column/Date";

import { ColumnType } from "src/types/column";

import { MOCK_COLUMNS_BASE } from "src/constants/column";
import OriginalSpacer from "src/components/OriginalSpacer";
import Header from "src/components/Header";
import useGetPath from "src/hooks/useGetPath";

type Props = {
  id: string;
};

const ColumnId: NextPage<Props> = ({ id }) => {
  const [data, setData] = useState<ColumnType>();
  const path = useGetPath();

  useEffect(() => {
    let array = MOCK_COLUMNS_BASE.filter(
      (item: ColumnType) => item.id + "" === id
    );
    setData(array[0]);
  }, []);

  const ColumnInfo = () => (
    <>
      {data && (
        <Box textStyle="bodyW">
          <ColumnDate data={data} />
          <OriginalSpacer size="4px" />
          <Text fontSize="2rem" fontWeight="bold">
            {data.title}
          </Text>
          <OriginalSpacer size="8px" />
          <StageGenre data={data} column />
        </Box>
      )}
    </>
  );

  const ColumnText = () => (
    <>
      {data && (
        <Text as="pre" bg="white" p="24px 5vw" lineHeight="2.6rem">
          {data.text}
        </Text>
      )}
    </>
  );

  return (
    <>
      <Header path="/column" back />
      <OriginalSpacer size="88px" />
      <ColumnInfo />
      <OriginalSpacer size="24px" />
      <ColumnText />
      <OriginalSpacer size="64px" />
    </>
  );
};

export default ColumnId;

export const getStaticPaths = async () => {
  const paths = MOCK_COLUMNS_BASE.map((item: ColumnType) => ({
    params: { id: item.id + "" },
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
