import { FC } from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";

import OriginalSpacer from "src/components/OriginalSpacer";
import StageTypeComponent from "src/components/Stage/Type";
import StageInformation from "src/components/Stage/Information";

import { StageType } from "src/types/stage";
import { pathWithAuthenticator } from "src/libs/pathWithAuthenticator";

type Props = {
  data: StageType[];
};

const StageBunnerSmall: FC<Props> = ({ data }) => {
  return (
    <Box w="100%" overflow="scroll">
      <Flex
        gap="12px"
        w={`calc(160px * ${data.length})`}
        sx={{
          ">a": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            w: "160px",
            bg: "white",
            padding: "10px 10px 14px",
            rounded: "16px",
            textStyle: "lightShadow",
          },
        }}
      >
        {data.map((item, i) => (
          <NextLink
            href={`${pathWithAuthenticator(`/stage/${item.path}`)}`}
            passHref
            key={item.name + i}
          >
            <Box>
              <Box
                w="100%"
                bg="black600"
                pt="calc(100% / 3 * 4.2)"
                rounded="8px"
                overflow="hidden"
                pos="relative"
                boxShadow="0px 0px 3px rgba(0, 0, 0, 0.1)"
              >
                <Box
                  as="img"
                  src={`/img/stage_img_${item.path}_01.jpg`}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  pos="absolute"
                  inset="0 0 0 0"
                />
                <Center
                  w="40px"
                  h="40px"
                  bg="primary"
                  pos="absolute"
                  inset="8px auto auto 4px"
                  rounded="full"
                >
                  <Box as="img" src="/img/nav_fav.svg" />
                </Center>
              </Box>
              <OriginalSpacer size="8px" />
              <StageTypeComponent data={item} />
              <OriginalSpacer size="4px" />
              <Text as="h3" fontSize="1.4rem" fontWeight="bold">
                {item.name}
              </Text>
              <OriginalSpacer size="8px" />
            </Box>
            <StageInformation data={item} index={0} time place />
          </NextLink>
        ))}
      </Flex>
    </Box>
  );
};

export default StageBunnerSmall;
