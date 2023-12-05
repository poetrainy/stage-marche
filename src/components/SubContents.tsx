import { FC } from "react";
import { Flex, Heading } from "@chakra-ui/react";

import { contentsType } from "src/types/contents";

type Props = {
  data: contentsType[];
};

const SubContents: FC<Props> = ({ data }) => {
  return (
    <Flex flexDir="column" gap="28px" w="100%">
      {data.map((item: contentsType, i) => (
        <Flex flexDir="column" gap="16px" w="100%" key={item.text + i}>
          <Heading as="h2" fontSize="2rem" fontWeight="bold">
            {item.text}
          </Heading>
          {item.component}
        </Flex>
      ))}
    </Flex>
  );
};

export default SubContents;
