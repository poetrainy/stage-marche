import { FC } from "react";
import NextLink from "next/link";
import { Center, Image, Text } from "@chakra-ui/react";

import OriginalSpacer from "src/components/OriginalSpacer";
import PreText from "src/components/PreText";

type Props = {
  guidance: {
    path: React.FC<React.SVGProps<SVGElement>>;
    heading: string;
    text: string;
  };
};

const text = "ログイン";

const SignInGuidance: FC<Props> = ({ guidance }) => {
  return (
    <Center
      flexDir="column"
      h="calc(100vh - 64px - 32px - 40px - 96px)"
      m="auto"
    >
      <Image as={guidance.path} />
      <OriginalSpacer size="32px" />
      <Center flexDir="column" gap="12px" w="fit-content">
        <PreText text={guidance.heading} />
        <Text
          color="black600"
          fontSize="1.2rem"
          lineHeight="2.2rem"
          textAlign="center"
        >
          {guidance.text}
        </Text>
      </Center>
      <OriginalSpacer size="32px" />
      <Center
        as={NextLink}
        href="enquete"
        passHref
        w="240px"
        h="64px"
        color="white"
        bg="greenToBlue"
        fontSize="1.6rem"
        fontWeight="bold"
        rounded="full"
        m="0 auto"
        _hover={{
          cursor: "pointer",
        }}
      >
        {text}
      </Center>
    </Center>
  );
};

export default SignInGuidance;
