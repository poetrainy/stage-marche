import { Box, Center, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

import Contents from 'src/components/Contents';
import GradationBtn from 'src/components/GradationBtn';
import Heading from 'src/components/Heading';
import OriginalSpacer from 'src/components/OriginalSpacer';
import PreText from 'src/components/PreText';
import SigninGuidance from 'src/components/SigninGuidance';

import { loginState } from 'src/libs/signin';

const Enquete: NextPage = () => {
  const genreArray: string[][] = [
    ['ミュージカル', 'ストレートプレイ(芝居)'],
    // 'メジャー作品',
    // 'マイナー作品',
    ['歴史', '現代', '近未来'],
    [
      'シリアス',
      'ラブ',
      'ミステリー',
      '革命',
      'ほのぼの',
      '成長',
      '学園',
      'スポーツ',
      '実写化',
    ],
    // '群像劇',
    // '一人芝居',
  ];

  const SigninEnqueteGenre = () => {
    return (
      <Flex as={'ul'} gap={'8px'} flexWrap={'wrap'} w={'90vw'}>
        {genreArray.map((item, i) => (
          <Flex as={'ul'} key={item[i] + i} gap={'8px'} flexWrap={'wrap'}>
            {item.map((content, i2) => (
              <Text
                key={content + i2}
                color={'primaryBlue'}
                bg={'white'}
                p={'12px 20px'}
                fontSize={'1.5rem'}
                fontWeight={'bold'}
                borderRadius={'9999px'}
              >
                {content}
              </Text>
            ))}
          </Flex>
        ))}
      </Flex>
    );
  };

  const SigninEnqueteComplete = () => {
    return (
      <Box>
        <Text
          color={'black600'}
          fontSize={'1.2rem'}
          lineHeight={'2.2rem'}
          textAlign={'center'}
        >
          会員登録をしていただき、ありがとうございます！
          <br />
          さまざまな作品があなたを待っていますよ！
        </Text>
        <OriginalSpacer size={'24px'} />
        <GradationBtn text={'早速チケットを見る'} path={''} />
      </Box>
    );
  };

  const signinEnqueteText = [
    {
      path: 'genre',
      heading: '好きな映画・ドラマ・小説・漫画の\nジャンルはなんですか？',
      component: <SigninEnqueteGenre />,
    },
    {
      path: 'prefecture',
      heading: 'お住まいの都道府県は\nどこですか？',
      component: undefined,
    },
    {
      path: 'complete',
      heading: 'おめでとう！🎉\n登録が完了しました！',
      component: <SigninEnqueteComplete />,
    },
  ];

  // const Component = () => {
  //   return <>{!loginState && <SigninGuidance />}</>;
  // };

  return (
    <>
      <Heading />
      <Box w={'100vw'} overflow={'scroll'}>
        <Flex flexWrap={'wrap'} w={`calc(${signinEnqueteText.length} * 100vw)`}>
          {signinEnqueteText.map((item, i) => (
            <Center
              key={item.path + i}
              flexDirection={'column'}
              w={'100vw'}
              minH={'100vh'}
              p={'64px 0 96px'}
            >
              <PreText text={item.heading} />
              <OriginalSpacer size={'24px'} />
              <Box as={'img'} src={`./img/enquete_${i + 1}_${item.path}.svg`} />
              <OriginalSpacer size={'48px'} />
              <>{item.component}</>
            </Center>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default Enquete;
