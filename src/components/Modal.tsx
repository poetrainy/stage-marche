import { Center, Input, Flex, Text, Box } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import IconClose from "src/components/Icon/IconClose";
import OriginalSpacer from "src/components/OriginalSpacer";
import { FilterContentsType } from "src/types/search";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  target: "チケット" | "コラム";
  filter: FilterContentsType[];
};

const Modal: FC<Props> = ({ isOpen, onClose, target, filter }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selected, setSelected] = useState<number[][]>(filter.map(() => []));

  return (
    <Box
      w="100vw"
      h="100vh"
      bg="white"
      m="auto"
      p="64px 0"
      pos="fixed"
      inset="0 0 0 0"
      zIndex="15"
      textAlign="center"
      transition="transform 0.3s"
      transform={isOpen ? "translateY(0)" : "translateY(100%)"}
    >
      <Center
        as="header"
        w="100%"
        h="64px"
        fontSize="1.7rem"
        fontWeight="bold"
        pos="fixed"
        inset="0 auto auto auto"
      >
        <Text
          as="button"
          color="primary"
          pos="absolute"
          inset="auto auto auto 5vw"
          onClick={() => {
            setInputValue("");
            setSelected([[]]);
          }}
        >
          クリア
        </Text>
        {`${target}を絞り込み`}
        <IconClose onClick={() => onClose()} />
      </Center>
      <Flex
        flexDir="column"
        gap="24px"
        h="calc(100vh - 64px - 64px)"
        overflow="scroll"
        p="0 5vw 32px"
      >
        <Input
          placeholder={`フリーワードで${target}を絞り込み`}
          value={inputValue}
          w="90%"
          h="48px"
          rounded="full"
          fontSize="1.6rem"
          px="16px"
          mt="4px"
          flex="none"
          onChange={(e) => setInputValue(e.target.value)}
          sx={{
            "&:focus-visible": {
              borderColor: "primary",
              boxShadow: "0 0 0 1px #4AB9C9",
            },
          }}
        />
        {filter.map((item: FilterContentsType, i) => (
          <Box key={item.condition}>
            <Box
              w="fit-content"
              color="primary"
              fontSize="1.8rem"
              fontWeight="bold"
            >
              {item.condition}
            </Box>
            <OriginalSpacer size="12px" />
            <Flex gap="8px" flexWrap="wrap">
              {item.item.map((tag: string, i2: number) => (
                <Box
                  key={tag}
                  as="button"
                  textStyle="tagItem"
                  onClick={() => {
                    const keepArray = selected;
                    const newArray = selected[i].includes(i2)
                      ? selected[i].filter((item) => item !== i2)
                      : [...selected[i], i2];
                    keepArray[i] = newArray;
                    setSelected(keepArray);
                  }}
                  // sx={{
                  //   ...(selected[i].includes(i2)
                  //     ? {
                  //         color: "white",
                  //         bg: "primary",
                  //       }
                  //     : {
                  //         color: "black400",
                  //         bg: "black100",
                  //       }),
                  // }}
                >
                  {tag}
                </Box>
              ))}
            </Flex>
          </Box>
        ))}
      </Flex>
      <Center
        w="100vw"
        h="64px"
        color="white"
        bg="primary"
        fontSize="1.6rem"
        fontWeight="bold"
        pos="fixed"
        inset="auto auto 0 auto"
        opacity={0.7}
      >
        3817件の{target}を見る
      </Center>
    </Box>
  );
};

export default Modal;
