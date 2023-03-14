import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import NextLink from 'next/link';

import MainContents from 'src/components/MainContents';
import StageInfomation from 'src/components/Stage/Infomation';

import { stageArray } from 'src/libs/stage';

const Ticket: NextPage = () => {
  const flag: boolean[] = [true, false, false];

  const Component = () => (
    <Flex
      flexDir={'column'}
      gap={'16px'}
      sx={{
        '>a': {
          display: 'flex',
          // width: 'fit-content',
          minHeight: '176px',
          // borderRadius: '16px',
          // overflow: 'hidden',
          // textStyle: 'deepShadow',
        },
      }}
    >
      {stageArray.map((item, i) => (
        <NextLink href={`/stage/${item.path}`} passHref key={item.name + i}>
          <Flex
            flexDir={'column'}
            justifyContent={'space-between'}
            w={'77%'}
            background={'rgba(255, 255, 255, 0.95)'}
            p={'16px 12px 16px 16px'}
            pos={'relative'}
            textStyle={'deepShadow'}
            borderRadius={"16px 0 0 16px"}
            sx={{
              '&::after': {
                content: '""',
                display: 'block',
                width: '1px',
                height: '100%',
                borderRightColor: 'black500',
                borderRightStyle: 'dotted',
                borderRightWidth: '3px',
                position: 'absolute',
                inset: '0 -2px auto auto',
              },
            }}
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
          {flag[i] && (
            <Box
              w={'23%'}
              background={'rgba(255, 255, 255, 0.95)'}
              borderRadius={"0 16px 16px 0"}
              textStyle={'deepShadow'}
            ></Box>
          )}
        </NextLink>
      ))}
    </Flex>
  );

  return <MainContents component={<Component />} specialBackground />;
};

export default Ticket;
