import { FC, useState } from "react";
import { Box, Text } from "@chakra-ui/react";

const SignInSuccessBunner: FC = () => {
  const [isNewUser, setIsNewUser] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isDisplay, setIsDisplay] = useState<boolean>(true);
  const VISIBLE_TIMER_FAST: number = 2000;
  const VISIBLE_TIMER_LATEST: number = 2500;

  return (
    <>
      {false && (
        <Box
          w="90vw"
          bg="white"
          p="16px 12px"
          fontWeight="bold"
          borderColor="skyblue"
          borderStyle="solid"
          borderWidth="3px"
          rounded="8px"
          pos="fixed"
          inset="52px 5vw auto 5vw"
          zIndex={20}
          transition="opacity 0.4s, transform 0.4s"
          textStyle="deepShadow"
          sx={{
            ...(isVisible
              ? {
                  opacity: 1,
                  transform: "translateY(0)",
                }
              : {
                  opacity: 0,
                  transform: "translateY(-16px)",
                }),
          }}
        >
          <Text as="span" color="primary">
            email
          </Text>
          <Text as="span" color="black500">
            さん、
            <br />
            {isNewUser ? "はじめまして" : "おかえりなさい！"}
          </Text>
        </Box>
      )}
    </>
  );
};

export default SignInSuccessBunner;
