import type { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import { Box, Center, Flex, Text } from '@chakra-ui/react';

import OriginalSpacer from 'src/components/OriginalSpacer';
import StageInfomation from 'src/components/Stage/Infomation';
import StageType from 'src/components/Stage/Type';
import StageSeat from 'src/components/Stage/Seat';
import StageGenre from 'src/components/Stage/Genre';
import ColumnBunner from 'src/components/Column/Bunner';
import Back from 'src/components/Back';

import { castType, stageType } from 'src/types/stage';

import { prefectureArray, stageArray, castArray } from 'src/libs/stage';
import { columnArray } from 'src/libs/column';

type Props = {
  id: string;
};

type RecommendType = {
  title: string;
  component: JSX.Element;
};

const StageId: NextPage<Props> = ({ id }) => {
  const [data, setData] = useState<stageType>();
  const [img, setImg] = useState<number[]>();
  const [cast, setCast] = useState<castType[]>();
  const elm = useRef<HTMLDivElement>(null);
  const [isTicketElm, setIsTicketElm] = useState<boolean>(false);
  const [ticketElmHeight, setTicketElmHeight] = useState<number>(0);
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const ticketStyle = (flag: boolean) => {
    if (flag) {
      // @ts-ignore
      elm.current.style.height = `${ticketElmHeight}px`;
      // @ts-ignore
      elm.current.style.paddingTop = 'calc(24px + 5vw)';
      // @ts-ignore
      elm.current.style.paddingBottom = '5vw';
    } else {
      // @ts-ignore
      elm.current.style.height = '0';
      // @ts-ignore
      elm.current.style.paddingTop = '0';
      // @ts-ignore
      elm.current.style.paddingBottom = '0';
    }
    setIsTicketElm(flag);
  };

  useEffect(() => {
    if (img) {
      // @ts-ignore
      setTicketElmHeight(elm.current.clientHeight);
      ticketStyle(false);
      setIsLoad(true);
    }
  }, [img]);

  useEffect(() => {
    if (data) {
      let imgArray = [];
      let castObjArray = [];
      for (let i = 0; i < data.imgLength; i++) {
        imgArray.push(i);
      }
      for (let i = 0; i < data.cast.length; i++) {
        for (let i2 = 0; i2 < castArray.length; i2++) {
          if (data.cast[i] === castArray[i2].path) {
            castObjArray.push(castArray[i2]);
          }
        }
      }
      setImg(imgArray);
      setCast(castObjArray);
    } else {
      let array = stageArray.filter((item: stageType) => item.path === id);
      setData(array[0]);
    }
  }, [data]);

  const StageInfo = () => (
    <>
      {data && (
        <Box textStyle={'bodyW'}>
          <StageType data={data} />
          <OriginalSpacer size={'4px'} />
          <Text fontSize={'2.2rem'} fontWeight={'bold'}>
            {data.name}
          </Text>
          <OriginalSpacer size={'2px'} />
          <StageGenre data={data} />
          <OriginalSpacer size={'8px'} />
          <Text color={'black500'} fontSize={'1.2rem'}>
            {data.description}
          </Text>
        </Box>
      )}
    </>
  );

  const Youtube = () => (
    <>
      {data && (
        <Flex flexDirection={'column'} gap={'12px'}>
          {data.youtube.map((item, i) => (
            <Box
              key={i + item}
              w={'100%'}
              pt={'calc(100% / 16 * 9)'}
              pos={'relative'}
              borderRadius={'20px'}
              overflow={'hidden'}
            >
              <Box
                as={'iframe'}
                w={'100%'}
                h={'100%'}
                pos={'absolute'}
                inset={'0 0 auto auto'}
                src={`https://www.youtube.com/embed/${item}`}
                title={'YouTube video player'}
                frameBorder={0}
                allow={
                  'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                }
                allowFullScreen
              />
            </Box>
          ))}
        </Flex>
      )}
    </>
  );
  const Cast = () => (
    <>
      {cast && (
        <Flex as={'ul'} gap={'14px 4%'} flexWrap={'wrap'} w={'100%'}>
          {cast.map((item, i) => (
            <Box as={'li'} key={item.path + i} w={'22%'}>
              <Box
                w={'100%'}
                pt={'100%'}
                bg={'black600'}
                borderRadius={'9999px'}
                overflow={'hidden'}
                pos={'relative'}
              >
                <Box
                  as={'img'}
                  src={`/img/cast_${item.path}.jpg`}
                  w={'100%'}
                  h={'100%'}
                  pos={'absolute'}
                  inset={'0 0 auto auto'}
                />
              </Box>
              <OriginalSpacer size={'8px'} />
              <Text
                // color={'black600'}
                fontSize={'1.2rem'}
                fontWeight={'bold'}
                textAlign={'center'}
              >
                {item.name}
              </Text>
            </Box>
          ))}
        </Flex>
        // </Box>
      )}
    </>
  );

  const recommendArray: RecommendType[] = [
    {
      title: '関連動画',
      component: <Youtube />,
    },
    {
      title: 'あわせて読みたい',
      component: <ColumnBunner data={columnArray} />,
    },
    {
      title: 'キャスト',
      component: <Cast />,
    },
  ];

  const Recommend = () => (
    <Flex flexDir={'column'} gap={'32px'} textStyle={'bodyW'}>
      {recommendArray.map((item, i) => (
        <Box as={'section'} key={item.title + i}>
          <Text as={'h2'} fontSize={'1.8rem'} fontWeight={'bold'}>
            {item.title}
          </Text>
          <OriginalSpacer size={'16px'} />
          {item.component}
        </Box>
      ))}
    </Flex>
  );

  const ticketInfo = () => {
    console.log(isTicketElm);
    if (isTicketElm) {
      ticketStyle(false);
    } else {
      ticketStyle(true);
    }
    // setIsTicketElm(!isTicketElm);
  };

  return (
    <>
      {data && img && cast && (
        <>
          <Box as={'ul'} pos={'relative'}>
            <Back />
            {img.map((item, i) => (
              <Center
                as={'li'}
                key={`img${i}`}
                w={'100vw'}
                h={'264px'}
                pos={'relative'}
                overflow={'hidden'}
              >
                <Box
                  as={'img'}
                  src={`/img/stage_img_${data.path}_0${i + 1}.jpg`}
                  w={'100%'}
                  h={'100%'}
                  objectFit={'contain'}
                />
                <Box
                  bg={`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/img/stage_img_${
                    data.path
                  }_0${i + 1}.jpg')`}
                  bgSize={'100%, cover'}
                  bgPosition={'center, center'}
                  filter={'blur(8px)'}
                  pos={'absolute'}
                  inset={'0 0 0 0'}
                  zIndex={'-1'}
                  m={'-20px'}
                />
              </Center>
            ))}
          </Box>
          <OriginalSpacer size={'24px'} />
          <StageInfo />
          <OriginalSpacer size={'20px'} />
          {!isLoad && <>チケット情報読み込み中…</>}
          <Flex
            as={'h2'}
            alignItems={'center'}
            h={'56px'}
            color={'white'}
            bg={'primary'}
            p={'0 24px'}
            fontWeight={'bold'}
            borderRadius={'9999px'}
            pos={'relative'}
            zIndex={3}
            transition={'opacity 0.1s'}
            textStyle={'bodyW'}
            onClick={() => ticketInfo()}
            sx={{
              ...(isLoad
                ? {
                    opacity: 1,
                  }
                : {
                    opacity: 0,
                  }),
              '&::before': {
                content: '""',
                display: 'block',
                background: 'white',
                width: '4px',
                height: '12px',
                position: 'absolute',
                inset: 'auto 24px auto auto',
                transform: 'rotateZ(45deg)',
              },
              '&::after': {
                content: '""',
                display: 'block',
                background: 'white',
                width: '4px',
                height: '12px',
                position: 'absolute',
                inset: 'auto 30px auto auto',
                transform: 'rotateZ(-45deg)',
              },
            }}
          >
            チケット詳細
          </Flex>
          <Flex
            flexDir={'column'}
            gap={'10vw'}
            w={'100vw'}
            bg={'white'}
            px={'5vw'}
            pt={'calc(24px + 5vw)'}
            pb={'5vw'}
            transform={'translateY(-28px)'}
            borderRadius={'5vw'}
            textStyle={'shadow'}
            overflow={'hidden'}
            transition={'height 0.15s, padding-top 0.15s, padding-bottom 0.15s'}
            ref={elm}
          >
            {data.schedule.map((item, i) => (
              <Box
                key={item.place + i}
                sx={{
                  ...(i > 0 && {
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      display: 'block',
                      width: '95%',
                      height: '1px',
                      background: 'black300',
                      margin: 'auto',
                      position: 'absolute',
                      inset: '-5vw 0 auto 0',
                    },
                  }),
                }}
              >
                <Text
                  color={'black800'}
                  fontWeight={'bold'}
                  fontSize={'1.8rem'}
                >
                  【{prefectureArray[item.prefecture]}公演】{item.place}
                </Text>
                <OriginalSpacer size={'4px'} />
                <StageInfomation data={data} place time />
                <OriginalSpacer size={'16px'} />
                <Box bg={'#F6F6F6'} p={'16px'} borderRadius={'16px'}>
                  {item.seat.monopoly && (
                    <>
                      <Text fontWeight={'bold'} fontSize={'1.5rem'}>
                        【初心者おすすめ】B席
                      </Text>
                      <OriginalSpacer size={'4px'} />
                      <Flex
                        justifyContent={'space-between'}
                        alignItems={'center'}
                      >
                        <Box w={'70%'}>
                          <Text fontSize={'1.1rem'} color={'black500'}>
                            ステージマルシェ独占販売の特別ビギナーシートです。後方座席でゆったり観劇！
                          </Text>
                          <OriginalSpacer size={'8px'} />
                          <Text
                            color={'pink'}
                            fontSize={'2rem'}
                            fontWeight={'bold'}
                          >
                            ¥{item.seat.monopoly.price}
                          </Text>
                        </Box>
                        <StageSeat status={item.seat.monopoly.status} />
                      </Flex>
                      <OriginalSpacer size={'12px'} />
                      <Box w={'95%'} h={'1px'} bg={'black300'} m={'0 auto'} />
                      <OriginalSpacer size={'12px'} />
                    </>
                  )}
                  <Flex gap={'10px'}>
                    {item.seat.other.map((content, i) => (
                      <Box w={'fit-content'} key={content.class + i}>
                        <Text
                          fontWeight={'bold'}
                          fontSize={'1.4rem'}
                          textAlign={'center'}
                        >
                          {content.class}席
                        </Text>
                        <StageSeat status={content.status} />
                        <OriginalSpacer size={'4px'} />
                        <Text
                          color={'black600'}
                          fontWeight={'bold'}
                          fontSize={'1.3rem'}
                          textAlign={'center'}
                        >
                          ¥{content.price}
                        </Text>
                      </Box>
                    ))}
                  </Flex>
                </Box>
              </Box>
            ))}
          </Flex>
          {!isTicketElm && <OriginalSpacer size={'28px'} />}
          <Recommend />
        </>
      )}
    </>
  );
};

export default StageId;

export const getStaticPaths = async () => {
  const paths = stageArray.map((item: stageType) => ({
    params: { id: item.path },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  return {
    props: {
      id: params.id,
    },
  };
};
