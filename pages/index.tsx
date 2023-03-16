import { Box, Center, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import NextLink from 'next/link';

import Headline from 'src/components/Headline';
import MainContents from 'src/components/MainContents';
import OriginalSpacer from 'src/components/OriginalSpacer';
import StageType from 'src/components/Stage/Type';
import StageBunnerLarge from 'src/components/Stage/BunnerLarge';

import { stageArray } from 'src/libs/stage';

const Home: NextPage = () => {
  const Component = () => (
    <>
      <Box textStyle={'bodyW'}>
        <Headline text={'大阪公演中の作品があります'} />
      </Box>
      <Box w={'100vw'} overflow={'hidden'}>
        <Flex
          as={'ul'}
          w={`calc(100vw * ${stageArray.length})`}
          pos={'relative'}
        >
          {stageArray.map((item, i) => (
            <Box
              as={'li'}
              key={`img${i}`}
              w={'100vw'}
              h={'280px'}
              sx={{
                '>a': {
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                },
              }}
            >
              <NextLink href={`/stage/${item.path}`} passHref>
                <Box
                  w={'100%'}
                  bg={
                    'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)'
                  }
                  pos={'absolute'}
                  inset={'auto auto 0 0'}
                  p={'0 5vw 20px'}
                >
                  <StageType data={item} />
                  <OriginalSpacer size={'4px'} />
                  <Text color={'white'} fontWeight={'bold'} fontSize={'2.2rem'}>
                    {item.name}
                  </Text>
                </Box>
                <Box
                  as={'img'}
                  src={`/img/stage_img_${item.path}_01.jpg`}
                  w={'100%'}
                  h={'100%'}
                  objectFit={'contain'}
                />
                <Box
                  bg={`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/img/stage_img_${item.path}_01.jpg')`}
                  bgSize={'100%, cover'}
                  bgPosition={'center, center'}
                  filter={'blur(8px)'}
                  pos={'absolute'}
                  inset={'0 0 0 0'}
                  zIndex={'-1'}
                  m={'-20px'}
                />
              </NextLink>
            </Box>
          ))}
        </Flex>
      </Box>
      <OriginalSpacer size={'24px'} />
      <Box as={'section'} textStyle={'bodyW'}>
        <Headline text={'B席に余裕があります'} />
        <StageBunnerLarge data={stageArray} />
      </Box>
    </>
  );

  return <MainContents component={<Component />} search index />;
};

export default Home;
