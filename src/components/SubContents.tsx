import { FC } from 'react';
import { Flex, Heading, VStack } from '@chakra-ui/react';

import { contentsType } from 'src/types/contents';

type Props = {
  data: contentsType[];
};

const SubContents: FC<Props> = ({ data }) => {
  return (
    <Flex flexDir="column" gap="28px" w="100%">
      {data.map((item: contentsType, i) => (
        <VStack
          alignItems="stretch"
          gap="16px"
          p={0}
          w="100%"
          key={item.text + i}
        >
          <Heading as="h2" fontSize="2rem" fontWeight="bold">
            {item.text}
          </Heading>
          {item.component}
        </VStack>
      ))}
    </Flex>
  );
};

export default SubContents;
