import { FC } from "react";
import NextLink from "next/link";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import OriginalSpacer from "src/components/OriginalSpacer";
import StageGenre from "src/components/Stage/Genre";
import ColumnDate from "src/components/Column/Date";

import { ColumnType } from "src/types/column";

import {
  pathWithAuthenticator,
  imageWithDirectoryPath,
} from "src/libs/convert";

type Props = {
  column: ColumnType[];
};

const ColumnBunner: FC<Props> = ({ column }) => {
  return (
    <Flex flexDir="column" gap="12px">
      {column.map((item, i) => (
        <Flex
          as={NextLink}
          href={pathWithAuthenticator(`/columns/${item.id}`)}
          passHref
          key={item.title + i}
          alignItems="center"
          gap="5%"
          w="100%"
          bg="white"
          padding="16px"
          rounded="16px"
          textStyle="lightShadow"
        >
          <Box w="60%">
            <ColumnDate data={item} />
            <OriginalSpacer size="2px" />
            <Text fontSize="1.5rem" fontWeight="bold">
              {item.title}
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
              {item.text}
            </Text>
            <OriginalSpacer size="4px" />
            <StageGenre data={item} isColumn />
          </Box>
          <Box w="35%" pt="50%" pos="relative" rounded="8px" overflow="hidden">
            <Image
              src={imageWithDirectoryPath(`column_0${item.id}.jpg`)}
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

export default ColumnBunner;
