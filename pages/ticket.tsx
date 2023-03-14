import { Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

import MainContents from 'src/components/MainContents';

import { stageArray } from 'src/libs/stage';

const Ticket: NextPage = () => {
  const Component = () => (
    <Flex flexDir={'column'} gap={'16px'}>
      {stageArray.map((item, i) => (
        <Flex key={item.name + i} bg={'white'}>
          <Text as={'h3'} fontSize={'2rem'} fontWeight={'bold'}>
            {item.name}
          </Text>
        </Flex>
      ))}
    </Flex>
  );

  return <MainContents component={<Component />} specialBackground />;
};

export default Ticket;
