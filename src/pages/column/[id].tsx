import type { NextPage } from "next";
import { Box, Text } from "@chakra-ui/react";

import StageGenre from "src/components/Stage/Genre";
import ColumnDate from "src/components/Column/Date";

import { ColumnType } from "src/types/column";

import { MOCK_COLUMNS_BASE } from "src/constants/column";
import OriginalSpacer from "src/components/OriginalSpacer";
import Header from "src/components/Header";

type Props = {
  id: string;
};

const ColumnId: NextPage<Props> = ({ id }) => {
  const column = MOCK_COLUMNS_BASE.find((column) => String(column.id) === id)!;

  return (
    <>
      <Header path="/column" back />
      <OriginalSpacer size="88px" />
      <Box textStyle="bodyW">
        <ColumnDate data={column} />
        <OriginalSpacer size="4px" />
        <Text fontSize="2rem" fontWeight="bold">
          {column.title}
        </Text>
        <OriginalSpacer size="8px" />
        <StageGenre data={column} isColumn />
      </Box>
      <OriginalSpacer size="24px" />
      <Text as="pre" bg="white" p="24px 5vw" lineHeight="2.6rem">
        {column.text}
      </Text>
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
