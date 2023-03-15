import { Box, Center, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import NextLink from 'next/link';
import { FormEvent, useState } from 'react';

import OriginalSpacer from 'src/components/OriginalSpacer';
import PreText from 'src/components/PreText';

import { stageGenreArray, prefectureArray } from 'src/libs/stage';

const Enquete: NextPage = () => {
  const [genre, setGenre] = useState<number[]>([]);
  const [prefecture, setPrefecture] = useState<number>(100);
  const [isGenreLengthArray, setIsGenreLengthArray] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const [page, setPage] = useState<number>(0);

  const setPageFunc = () => {
    setPage(page + 1);
  };

  const setGenreFunc = (input: number) => {
    let keepGenre = genre;
    let keepGenreLength = genre.length;
    for (let i = 0; i < genre.length; i++) {
      if (genre[i] === input) {
        keepGenre.splice(i, 1);
        break;
      }
    }
    if (keepGenre.length === keepGenreLength) {
      if (keepGenre.length < 3) {
        keepGenre.push(input);
      }
    }
    if (keepGenre.length === 3) {
      setIsGenreLengthArray([false, false, true]);
    } else if (keepGenre.length === 2) {
      setIsGenreLengthArray([false, true, false]);
    } else if (keepGenre.length === 1) {
      setIsGenreLengthArray([true, false, false]);
    } else {
      setIsGenreLengthArray([false, false, false]);
    }
    setGenre(keepGenre);
  };

  const setPrefectureFunc = (e: FormEvent<HTMLDivElement>) => {
    // @ts-ignore
    setPrefecture(e.currentTarget.value);
  };

  const SigninEnquetePrefecture = () => {
    return (
      <Center h={'210px'} textStyle={'bodyW'}>
        <Box
          w={'80%'}
          h={'72px'}
          borderRadius={'9999px'}
          overflow={'hidden'}
          pos={'relative'}
          sx={{
            '&::before': {
              content: '""',
              display: 'flex',
              width: '64px',
              height: '72px',
              background: 'skyblue',
              position: 'absolute',
              inset: '0 0 auto auto',
            },
          }}
        >
          <Box
            as={'select'}
            name={'prefecture'}
            value={prefecture}
            w={'100%'}
            h={'100%'}
            fontSize={'1.4rem'}
            fontWeight={'bold'}
            p={'0 32px'}
            appearance={'none'}
            // @ts-ignore
            onChange={(e) => setPrefectureFunc(e)}
          >
            <Box as={'option'} value={100}>
              都道府県を選択
            </Box>
            {prefectureArray.map((item, i) => (
              <Box as={'option'} value={i} key={item + i}>
                {item}
              </Box>
            ))}
          </Box>
        </Box>
      </Center>
    );
  };

  const SigninEnqueteComplete = () => {
    return (
      <Center
        as={'p'}
        color={'black600'}
        fontSize={'1.2rem'}
        lineHeight={'2.2rem'}
        textAlign={'center'}
      >
        会員登録をしていただき、ありがとうございます！
        <br />
        さまざまな作品があなたを待っていますよ！
      </Center>
    );
  };

  const signinEnqueteText: {
    path: string;
    heading: string;
    component: JSX.Element;
  }[] = [
    {
      path: 'genre',
      heading: '好きな映画・ドラマ・小説・漫画の\nジャンルはなんですか？',
      component: (
        <Center
          gap={'4px 8px'}
          flexWrap={'wrap'}
          h={'210px'}
          px={'8px'}
          textStyle={'bodyW'}
        >
          {stageGenreArray.map((item: string, i) => (
            <Box
              key={0 + item + i}
              bg={'white'}
              textStyle={'tagItem'}
              onClick={() => setGenreFunc(i)}
              sx={{
                ...(isGenreLengthArray[2]
                  ? {
                      color: '#bdbdbd',
                    }
                  : {
                      color: 'skyblue',
                    }),
                ...(isGenreLengthArray[0] &&
                  genre[0] === i && {
                    background: 'skyblue',
                    color: 'white',
                  }),
                ...(isGenreLengthArray[1] &&
                  (genre[0] === i || genre[1] === i) && {
                    background: 'skyblue',
                    color: 'white',
                  }),
                ...(isGenreLengthArray[2] &&
                  (genre[0] === i || genre[1] === i || genre[2] === i) && {
                    background: 'skyblue',
                    color: 'white',
                  }),
              }}
            >
              {item}
            </Box>
          ))}
        </Center>
      ),
    },
    {
      path: 'prefecture',
      heading: 'お住まいの都道府県は\nどこですか？',
      component: <SigninEnquetePrefecture />,
    },
    {
      path: 'complete',
      heading: 'おめでとう！🎉\n登録が完了しました！',
      component: <SigninEnqueteComplete />,
    },
  ];

  return (
    <>
      <Box w={'100vw'} overflow={'hidden'}>
        <Box
          w={'100vw'}
          h={'16px'}
          bg={'black300'}
          pos={'fixed'}
          inset={'0 0 auto auto'}
          sx={{
            '&::before': {
              content: '""',
              display: 'block',
              width: '100%',
              height: '100%',
              background: 'skyblue',
              transform: 'translateX(-100%)',
              transition: 'transform 0.4s',
              ...(page === 1 && {
                transform: 'translateX(-50%)',
              }),
              ...(page === 2 && {
                transform: 'translateX(0)',
              }),
            },
          }}
        />
        <Flex flexWrap={'wrap'} w={`calc(${signinEnqueteText.length} * 100vw)`}>
          {signinEnqueteText.map((item, i) => (
            <Center
              key={item.path + i}
              flexDir={'column'}
              w={'100vw'}
              minH={'100vh'}
              transform={`translateX(calc(${page} * -100vw))`}
              transition={'transform 0.3s'}
              pb={'16px'}
              sx={{
                '&:nth-of-type(1)': {
                  '>button': {
                    ...(isGenreLengthArray[0] && {
                      '&::before': {
                        width: '33%',
                      },
                    }),
                    ...(isGenreLengthArray[1] && {
                      '&::before': {
                        width: '66%',
                      },
                    }),
                    ...(isGenreLengthArray[2]
                      ? {
                          pointerEvents: 'auto',
                          '&::before': {
                            width: '100%',
                          },
                        }
                      : {
                          pointerEvents: 'none',
                        }),
                  },
                },
                '&:nth-of-type(2)': {
                  '>button': {
                    ...(Number(prefecture) !== 100
                      ? {
                          pointerEvents: 'auto',
                          '&::before': {
                            width: '100%',
                          },
                        }
                      : {
                          pointerEvents: 'none',
                        }),
                  },
                },
                '>a': {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '240px',
                  height: '72px',
                  color: 'white',
                  background: 'skyblue',
                  fontWeight: 'bold',
                  fontSize: '1.6rem',
                  borderRadius: '9999px',
                },
              }}
            >
              <PreText text={item.heading} />
              <OriginalSpacer size={'24px'} />
              <Box as={'img'} src={`/img/enquete_${i + 1}_${item.path}.svg`} />
              <OriginalSpacer size={'32px'} />
              <>{item.component}</>
              <OriginalSpacer size={'40px'} />
              {i < 2 ? (
                <Center
                  as={'button'}
                  w={'232px'}
                  h={'64px'}
                  bg={'black300'}
                  borderRadius={'9999px'}
                  overflow={'hidden'}
                  pos={'relative'}
                  onClick={() => setPageFunc()}
                  sx={{
                    '&::before': {
                      content: '""',
                      display: 'block',
                      width: 0,
                      height: '100%',
                      background: 'skyblue',
                      position: 'absolute',
                      inset: '0 auto auto 0',
                      transition: 'width 0.4s',
                    },
                    '&::after': {
                      content: '""',
                      display: 'block',
                      width: '28px',
                      height: '28px',
                      background:
                        'url("./img/enquete_icon_check.svg") no-repeat',
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      position: 'absolute',
                    },
                  }}
                />
              ) : (
                <NextLink href={'/'} passHref>
                  舞台を探しに行く！
                </NextLink>
              )}
            </Center>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default Enquete;
