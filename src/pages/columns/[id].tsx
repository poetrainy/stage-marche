import type { NextPage } from "next";
import { Box, Text } from "@chakra-ui/react";

import StageGenre from "src/components/Stage/Genre";
import ColumnDate from "src/components/Column/Date";

import { ColumnType } from "src/types/column";

import { MOCK_COLUMNS } from "src/constants/mock";
import OriginalSpacer from "src/components/OriginalSpacer";
import Header from "src/components/Header";

type Props = {
  column: ColumnType;
};

const ColumnId: NextPage<Props> = ({ column }) => (
  <>
    <Header path="/columns" isBack />
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

export default ColumnId;

export const getStaticPaths = async () => {
  const paths = MOCK_COLUMNS.map((item: ColumnType) => ({
    params: { id: String(item.id) },
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
      column: MOCK_COLUMNS.find(({ id }) => String(id) === params.id)!,
    },
  };
};
