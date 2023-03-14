import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import NextLink from 'next/link';

import MainContents from 'src/components/MainContents';
import StageInfomation from 'src/components/Stage/Infomation';

import { stageArray } from 'src/libs/stage';

const Ticket: NextPage = () => {
  const Component = () => (
    <Flex
      flexDir={'column'}
      gap={'16px'}
      sx={{
        '>a': {
          display: 'flex',
          minHeight: '168px',
          background: 'white',
          padding: '16px',
          borderRadius: '16px',
          textStyle: 'shadow',
        },
      }}
    >
      {stageArray.map((item, i) => (
        <NextLink href={`/stage/${item.path}`} passHref key={item.name + i}>
          <Flex
            flexDir={'column'}
            justifyContent={'space-between'}
            w={'78%'}
            pr={'3%'}
            borderRightColor={'black600'}
            borderRightStyle={'dotted'}
            borderRightWidth={'3px'}
          >
            <Box>
              <Text
                as={'h3'}
                color={'primary'}
                fontSize={'2rem'}
                fontWeight={'bold'}
              >
                {item.name}
              </Text>
            </Box>
            <StageInfomation data={item} />
          </Flex>
          <Box w={'22%'}></Box>
        </NextLink>
      ))}
    </Flex>
  );

  return <MainContents component={<Component />} specialBackground />;
};

export default Ticket;
