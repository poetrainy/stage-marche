import { FC } from "react";
import NextLink from "next/link";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import OriginalSpacer from "src/components/OriginalSpacer";
import StageGenre from "src/components/Stage/Genre";

import { ColumnType } from "src/types/column";

import {
  pathWithAuthenticator,
  imageWithDirectoryPath,
  dateConvertToJapanese,
} from "src/libs/convert";

type Props = {
  column: ColumnType[];
};

const ColumnCard: FC<Props> = ({ column }) => {
  return (
    <Flex flexDir="column" gap="12px">
      {column.map((column, i) => (
        <Flex
          as={NextLink}
          href={pathWithAuthenticator(`columns/${column.id}`)}
          passHref
          key={column.title}
          alignItems="center"
          gap="5%"
          w="100%"
          bg="white"
          padding="16px"
          rounded="16px"
          textStyle="lightShadow"
        >
          <Box w="60%">
            <Text
              as="span"
              color="black400"
              fontSize="1.1rem"
              fontWeight="bold"
            >
              {dateConvertToJapanese(column.date)}
            </Text>
            <OriginalSpacer size="2px" />
            <Text fontSize="1.5rem" fontWeight="bold">
              {column.title}
            </Text>
            <OriginalSpacer size="4px" />
            <Text
              display="-webkit-box"
              color="black500"
              fontSize="1rem"
              textOverflow="ellipsis"
              overflow="hidden"
              sx={{
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "3",
              }}
            >
              {column.text}
            </Text>
            <OriginalSpacer size="4px" />
            <StageGenre data={column} isColumn />
          </Box>
          <Box w="35%" pt="50%" pos="relative" rounded="8px" overflow="hidden">
            <Image
              src={imageWithDirectoryPath(`column_${column.path}.jpg`)}
              w="100%"
              h="100%"
              pos="absolute"
              inset="0 0 0 0"
              objectFit="cover"
            />
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};

export default ColumnCard;
