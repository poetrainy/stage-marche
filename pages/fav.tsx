import { Box, Center, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

import Contents from 'src/components/Contents';
import Headline from 'src/components/Headline';
import OriginalSpacer from 'src/components/OriginalSpacer';
import SigninGuidance from 'src/components/SigninGuidance';
import StageBunnerLarge from 'src/components/Stage/BunnerLarge';
import StageBunnerSmall from 'src/components/Stage/BunnerSmall';

import { loginState } from 'src/libs/signin';
import { stageArray } from 'src/libs/stage';

const Fav: NextPage = () => {
  const ComponentArray = [
    {
      text: '公演予定の作品',
      component: <StageBunnerLarge data={stageArray} />,
    },
    {
      text: '公演が終了した作品',
      component: <StageBunnerSmall data={stageArray} />,
    },
  ];

  const Component = () => {
    return (
      <>
        {loginState ? (
          <Flex flexDir={'column'} gap={'28px'}>
            {ComponentArray.map((item, i) => (
              <Box key={item.text + i}>
                <Headline text={item.text} top />
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

export default Fav;
