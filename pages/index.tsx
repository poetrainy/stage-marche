import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Headline from 'src/components/Headline';

import MainContents from 'src/components/MainContents';
import { stageArray } from 'src/libs/stage';

const Home: NextPage = () => {
  const Component = () => (
    <>
      <Headline text={'大阪公演中の作品があります'} />
      {stageArray.map((item, i) => (
        <Box key={item.name + i}></Box>
      ))}
    </>
  );

  return <MainContents component={<Component />} search />;
};

export default Home;
