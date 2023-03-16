import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useState } from 'react';
import NextLink from 'next/link';

import Headline from 'src/components/Headline';
import MainContents from 'src/components/MainContents';
import OriginalSpacer from 'src/components/OriginalSpacer';
import StageType from 'src/components/Stage/Type';
import StageBunnerLarge from 'src/components/Stage/BunnerLarge';

import { stageArray } from 'src/libs/stage';

const Home: NextPage = () => {
  const Component = () => {
    const [selected, setSelected] = useState<number>(0);
    const prev = () => {
      if (selected === 0) {
        setSelected(stageArray.length - 1);
      } else {
        setSelected(selected - 1);
      }
    };
    const choice = (i: number) => {
      setSelected(i);
    };
    const next = () => {
      if (selected === stageArray.length - 1) {
        setSelected(0);
      } else {
        setSelected(selected + 1);
      }
    };
    return (
      <>
        <Box textStyle={'bodyW'}>
          <Headline text={'大阪公演中の作品があります'} />
        </Box>
        <Box w={'100vw'} overflow={'hidden'}>
          <Flex
            as={'ul'}
            w={`calc(100vw * ${stageArray.length})`}
            transform={`translateX(calc(100vw * -${selected}))`}
            transition={'transform 0.3s'}
          >
            {stageArray.map((item, i) => (
              <Box
                as={'li'}
                key={item.name + i}
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
                    <Text
                      color={'white'}
                      fontWeight={'bold'}
                      fontSize={'2.2rem'}
                    >
                      {item.name}
                    </Text>
                    <Flex
                      alignItems={'center'}
                      sx={{
                        '&::before': {
                          content: '""',
                          display: 'block',
                          width: '16px',
                          height: '16px',
                          background:
                            'url("./img/stage_info_place.svg") no-repeat',
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                          marginRight: '2px',
                        },
                      }}
                    >
                      {item.schedule.map((content, i2) => (
                        <Text
                          as={'span'}
                          key={content.place + i2}
                          color={'black300'}
                          fontSize={'1.2rem'}
                          sx={{
                            ...(i2 < item.schedule.length - 1 && {
                              '&::after': {
                                content: '","',
                                marginRight: '3px',
                              },
                            }),
                          }}
                        >
                          {content.place}
                        </Text>
                      ))}
                    </Flex>
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
          <Flex gap={'8px'} w={'fit-content'} m={'0 auto'}>
            {stageArray.map((item, i) => (
              <Box
                key={item.path + i}
                w={'12px'}
                h={'12px'}
                borderRadius={'9999px'}
                transition={'background 0.2s'}
                onClick={() => choice(i)}
                sx={{
                  ...(selected === i
                    ? {
                        background: 'primary',
                      }
                    : {
                        background: 'black300',
                      }),
                }}
              />
            ))}
          </Flex>
          <Box onClick={() => prev()}>ひだり</Box>
          <Box onClick={() => next()}>みぎ</Box>
        </Box>
        <OriginalSpacer size={'24px'} />
        <Box as={'section'} textStyle={'bodyW'}>
          <Headline text={'B席に余裕があります'} />
          <StageBunnerLarge data={stageArray} />
        </Box>
      </>
    );
  };

  return <MainContents component={<Component />} search index />;
};

export default Home;
