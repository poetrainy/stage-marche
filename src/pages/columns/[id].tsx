import type { NextPage } from "next";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import StageGenre from "src/components/Stage/Genre";
import Header from "src/components/Header";

import { ColumnType } from "src/types/column";

import { MOCK_COLUMNS } from "src/constants/mock";
import {
  dateConvertToJapanese,
  imageWithDirectoryPath,
} from "src/libs/convert";

type Props = {
  column: ColumnType;
};

const ColumnId: NextPage<Props> = ({ column }) => (
  <>
    <Header path="/columns" isBack />
    <Flex flexDir="column" gap="24px" p="88px 0 64px">
      <Box textStyle="bodyW">
        <Text as="span" color="black400" fontSize="1.1rem" fontWeight="bold">
          {dateConvertToJapanese(column.date)}
        </Text>
        <Text m="4px 0 8px" fontSize="2rem" fontWeight="bold">
          {column.title}
        </Text>
        <StageGenre data={column} isColumn />
      </Box>
      <Flex flexDir="column" gap="16px" bg="white" p="32px 0 24px">
        <Image
          src={imageWithDirectoryPath(`column_${column.id}.jpg`)}
          w="100%"
          h="240px"
          objectFit="cover"
        />
        <Text as="pre" p="0 5vw" lineHeight="2.6rem">
          {column.text}
        </Text>
      </Flex>
    </Flex>
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
