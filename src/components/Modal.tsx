import { Center, Input, Flex, Text, Box } from "@chakra-ui/react";
import { FC, useState } from "react";
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
  const [inputValue, setInputValue] = useState<string>();
  const [selected, setSelected] = useState<boolean[][]>(
    filter.map(({ item }) => item.map(() => false))
  );

  return (
    <Box
      w="100vw"
      h="100vh"
      bg="white"
      pos="fixed"
      inset="0 0 auto auto"
      zIndex="15"
      textAlign="center"
      transition="transform 0.3s"
      transform={isOpen ? "translateY(0)" : "translateY(100%)"}
    >
      <Center
        w="100vw"
        h="64px"
        fontSize="1.7rem"
        fontWeight="bold"
        pos="relative"
      >
        <Text
          as="button"
          color="primary"
          pos="absolute"
          inset="auto auto auto 5vw"
        >
          クリア
        </Text>
        {`${target}を絞り込み`}
        <IconClose onClick={() => onClose()} />
      </Center>
      <OriginalSpacer size="16px" />
      <Input
        placeholder={`フリーワードで${target}を絞り込み`}
        value={inputValue}
        w="calc(100vw - 5vw * 2)"
        h="48px"
        rounded="full"
        fontSize="1.6rem"
        px="16px"
        onChange={(e) => setInputValue(e.target.value)}
        sx={{
          "&:focus-visible": {
            borderColor: "primary",
            boxShadow: "0 0 0 1px #4AB9C9",
          },
        }}
      />
      <OriginalSpacer size="24px" />
      <Flex flexDir="column" gap="24px" px="5vw">
        {filter.map((item: FilterContentsType, i) => (
          <Box key={item.condition + i}>
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
                  key={tag + i2}
                  as="button"
                  textStyle="tagItem"
                  onClick={() =>
                    setSelected((p) => {
                      let keepFlagArray = p;
                      console.log(keepFlagArray);

                      keepFlagArray[i][i2] = !keepFlagArray[i][i2];
                      console.log(keepFlagArray);

                      return keepFlagArray;
                    })
                  }
                  sx={{
                    ...(selected[i][i2]
                      ? {
                          color: "white",
                          bg: "primary",
                        }
                      : {
                          color: "black400",
                          bg: "black100",
                        }),
                  }}
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
        pos="absolute"
        inset="auto auto 0 auto"
        opacity={0.7}
      >
        3817件の{target}を見る
      </Center>
    </Box>
  );
};

export default Modal;
