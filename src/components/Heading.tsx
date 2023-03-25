import { FC, SetStateAction, useEffect, useState } from 'react';
import { Box, Button, Center, Flex, Input, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { navContents } from 'src/libs/nav';
import { searchColumnArray, searchStageArray } from 'src/libs/search';

import { navContentsType } from 'src/types/nav';
import { searchType } from 'src/types/search';
import OriginalSpacer from 'src/components/OriginalSpacer';

type Props = {
  path: string;
  back?: boolean;
  search?: boolean;
};

const Heading: FC<Props> = ({ path, back, search }) => {
  const router = useRouter();
  const [nav, setNav] = useState<navContentsType>();
  const [navIndex, setNavIndex] = useState<number>(0);
  const [inputText, setInputText] = useState<string>();
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [selected, setSelected] = useState<boolean[][]>();
  const [array, setArray] = useState<searchType[]>();

  useEffect(() => {
    for (let i = 0; i < navContents.length; i++) {
      if (`/${navContents[i].path}` === path) {
        setNav(navContents[i]);
        setNavIndex(i);
      }
    }
    if (search) {
      if (path === '/') {
        setArray(searchStageArray);
      } else {
        setArray(searchColumnArray);
      }
    }
  }, []);

  useEffect(() => {
    if (array) {
      let keepFlagArray: boolean[][] = [];
      let keepFlag: boolean[] = [];
      array.forEach((element) => {
        element.item.forEach((content, i) => {
          keepFlag.push(false);
        });
        keepFlagArray.push(keepFlag);
        keepFlag = [];
      });
      setSelected(keepFlagArray);
    }
  }, [array]);

  const backFunc = () => {
    router.back();
  };

  const Back = () => (
    <>
      {back && (
        <Box
          w={'24px'}
          h={'24px'}
          pos={'absolute'}
          inset={'auto auto auto 5vw'}
          sx={{
            '&::before': {
              content: '""',
              display: 'block',
              width: '14px',
              height: '3px',
              background: 'black800',
              position: 'absolute',
              inset: '7px 0 auto -2px',
              margin: 'auto',
              borderRadius: '2px',
              transform: 'rotateZ(-45deg)',
            },
            '&::after': {
              content: '""',
              display: 'block',
              width: '14px',
              height: '3px',
              background: 'black800',
              position: 'absolute',
              inset: 'auto 0 6px -2px',
              margin: 'auto',
              borderRadius: '2px',
              transform: 'rotateZ(45deg)',
            },
          }}
          onClick={() => backFunc()}
        />
      )}
    </>
  );
  const HeadingText = () => (
    <>
      {nav && (
        <>
          {navIndex === 0 ? (
            <Box w={'160px'} mt={'10px'}>
              <Box as={'img'} src={'./img/logo.svg'} />
            </Box>
          ) : (
            <Text as={'span'}>{nav.name}</Text>
          )}
        </>
      )}
    </>
  );
  const Search = () => (
    <>
      {search && (
        <Box
          w={'20px'}
          h={'100%'}
          pos={'absolute'}
          inset={'auto 5vw auto auto'}
          mt={'2px'}
          sx={{
            '&::before': {
              content: '""',
              display: 'block',
              width: '20px',
              height: '20px',
              borderWidth: '3.5px',
              borderStyle: 'solid',
              borderColor: 'black800',
              position: 'absolute',
              inset: '0 0 0 0',
              margin: 'auto',
              borderRadius: '9999px',
            },
            '&::after': {
              content: '""',
              display: 'block',
              width: '7px',
              height: '3.5px',
              background: 'black800',
              position: 'absolute',
              inset: '0 0 -14px 14px',
              margin: 'auto',
              borderRadius: '2px',
              transform: 'rotateZ(45deg)',
            },
          }}
          onClick={() => isSearchFunc()}
        />
      )}
    </>
  );

  const selectedFunc = (i: number, i2: number) => {
    if (selected) {
      let keepFlagArray = selected;
      keepFlagArray[i][i2] = !keepFlagArray[i][i2];
      setSelected(keepFlagArray);
    }
  };

  const inputTextFunc = (e: {
    currentTarget: { value: SetStateAction<string | undefined> };
  }) => {
    setInputText(e.currentTarget.value);
  };

  const isSearchFunc = () => {
    setIsSearch(!isSearch);
  };

  return (
    <>
      <Center
        as={'header'}
        w={'100vw'}
        h={'64px'}
        bg={'white'}
        fontSize={'1.7rem'}
        fontWeight={'bold'}
        pos={'fixed'}
        inset={'0 0 auto auto'}
        textStyle={'lightShadow'}
        zIndex={'10'}
      >
        <Back />
        <HeadingText />
        <Search />
      </Center>
      {nav && search && selected && array && (
        <Box
          w={'100vw'}
          h={'100vh'}
          bg={'white'}
          pos={'fixed'}
          inset={'0 0 auto auto'}
          zIndex={'15'}
          textAlign={'center'}
          transition={'transform 0.3s'}
          sx={{
            ...(isSearch
              ? {
                  transform: 'translateY(0)',
                }
              : {
                  transform: 'translateY(100%)',
                }),
          }}
        >
          <Center
            w={'100vw'}
            h={'64px'}
            fontSize={'1.7rem'}
            fontWeight={'bold'}
            pos={'relative'}
          >
            <Text
              as={'button'}
              color={'primary'}
              pos={'absolute'}
              inset={'auto auto auto 5vw'}
            >
              クリア
            </Text>
            {navIndex === 0 ? 'チケット' : nav.name}を絞り込み
            <Center
              w={'20px'}
              h={'20px'}
              pos={'absolute'}
              inset={'auto 5vw auto auto'}
              sx={{
                '&::before': {
                  content: '""',
                  display: 'block',
                  width: '22px',
                  height: '3px',
                  background: 'black800',
                  position: 'absolute',
                  margin: 'auto',
                  borderRadius: '9999px',
                  transform: 'rotateZ(-45deg)',
                },
                '&::after': {
                  content: '""',
                  display: 'block',
                  width: '22px',
                  height: '3px',
                  background: 'black800',
                  position: 'absolute',
                  margin: 'auto',
                  borderRadius: '9999px',
                  transform: 'rotateZ(45deg)',
                },
              }}
              onClick={() => isSearchFunc()}
            />
          </Center>
          <OriginalSpacer size={'16px'} />
          <Input
            placeholder={`フリーワードで${
              navIndex === 0 ? 'チケット' : nav.name
            }を絞り込み`}
            value={inputText}
            w={'calc(100vw - 5vw * 2)'}
            h={'48px'}
            borderRadius={'9999px'}
            fontSize={'1.6rem'}
            px={'16px'}
            onChange={(e) => inputTextFunc(e)}
            sx={{
              '&:focus-visible': {
                borderColor: 'primary',
                boxShadow: '0 0 0 1px #4AB9C9',
              },
            }}
          />
          <OriginalSpacer size={'24px'} />
          <Flex flexDir={'column'} gap={'24px'} px={'5vw'}>
            {array.map((item: searchType, i) => (
              <Box key={item.condition + i}>
                <Box
                  w={'fit-content'}
                  color={'primary'}
                  fontSize={'1.8rem'}
                  fontWeight={'bold'}
                >
                  {item.condition}
                </Box>
                <OriginalSpacer size={'12px'} />
                <Flex gap={'8px'} flexWrap={'wrap'}>
                  {item.item.map((tag: string, i2: number) => (
                    <Box
                      key={tag + i2}
                      textStyle={'tagItem'}
                      onClick={() => selectedFunc(i, i2)}
                      sx={{
                        ...(selected[i][i2]
                          ? {
                              color: 'white',
                              background: 'primary',
                            }
                          : {
                              color: 'black400',
                              background: 'black100',
                            }),
                      }}
                    >
                      {tag}
                    </Box>
                  ))}
                </Flex>
              </Box>
            ))}
          </Flex>
          <Center
            w={'100vw'}
            h={'64px'}
            color={'white'}
            bg={'primary'}
            fontSize={'1.6rem'}
            fontWeight={'bold'}
            pos={'absolute'}
            inset={'auto auto 0 auto'}
            opacity={0.7}
          >
            3817件の{navIndex === 0 ? 'チケット' : nav.name}を見る
          </Center>
        </Box>
      )}
    </>
  );
};

export default Heading;
