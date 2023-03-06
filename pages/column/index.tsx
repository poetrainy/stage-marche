import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import ColumnBunner from 'src/components/Column/Bunner';

import Contents from 'src/components/Contents';
import OriginalSpacer from 'src/components/OriginalSpacer';
import SigninGuidance from 'src/components/SigninGuidance';
import { columnArray } from 'src/libs/column';

import { loginState } from 'src/libs/signin';

const Column: NextPage = () => {
  const ComponentArray = [
    {
      text: '気になる公演に関するコラムがあります',
      component: <ColumnBunner data={columnArray} />,
    },
    {
      text: '最近読まれています',
      component: <ColumnBunner data={columnArray} />,
    },
  ];

  const Component = () => {
    return (
      <>
        {loginState ? (
          <Flex flexDir={'column'} gap={'24px'}>
            {ComponentArray.map((item, i) => (
              <Box key={item.text + i}>
                <Text fontSize={'1.8rem'} fontWeight={'bold'}>
                  {item.text}
                </Text>
                <OriginalSpacer size={'16px'} />
                {item.component}
              </Box>
            ))}
          </Flex>
        ) : (
          <SigninGuidance />
        )}
      </>
    );
  };

  return <Contents component={<Component />} />;
};

export default Column;
