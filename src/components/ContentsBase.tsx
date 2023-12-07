import { FC } from "react";
import { Flex, Heading } from "@chakra-ui/react";

type Props = {
  data: { text: string; component: JSX.Element }[];
  fontSize?: string;
};

const ContentsBase: FC<Props> = ({ data, fontSize = "2rem" }) => {
  return (
    <Flex flexDir="column" gap="32px" w="100%">
      {data.map((item) => (
        <Flex flexDir="column" gap="16px" w="100%" key={item.text}>
          <Heading as="h2" fontSize={fontSize} fontWeight="bold">
            {item.text}
          </Heading>
          {item.component}
        </Flex>
      ))}
    </Flex>
  );
};

export default ContentsBase;
