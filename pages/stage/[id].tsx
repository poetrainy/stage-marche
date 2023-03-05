import { Box, Center, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import Contents from 'src/components/Contents';
import StageType from 'src/components/StageType';

import { stageArray } from 'src/libs/stage';

import { stageType } from 'src/types/stage';

type Props = {
  id: string;
};

const StageId: NextPage<Props> = ({ id }) => {
  const [data, setData] = useState<stageType>();
  const [img, setImg] = useState<number[]>();

  useEffect(() => {
    if (data) {
      let imgArray = [];
      for (let i = 0; i < data.imgLength; i++) {
        imgArray.push(i);
      }
      setImg(imgArray);
    } else {
      let array = stageArray.filter((item: stageType) => item.path === id);
      setData(array[0]);
    }
  }, [data]);

  return (
    <>
      {
        data && img && (
          <>
            <Box as={'ul'}>
              {img.map((item, i) => (
                <Center
                  as={'li'}
                  key={`img${i}`}
                  w={'100vw'}
                  h={'240px'}
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
                    w={'110%'}
                    h={'110%'}
                    bg={`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/img/stage_img_${
                      data.path
                    }_0${i + 1}.jpg')`}
                    bgSize={'100%, cover'}
                    bgPosition={'center center, center center'}
                    filter={'blur(8px)'}
                    pos={'absolute'}
                    inset={'auto 0 auto 0'}
                    zIndex={'-1'}
                  />
                </Center>
              ))}
            </Box>
            <StageType data={data} />
            <Text>{data.name}</Text>
            <Text>{data.description}</Text>
            <Box>チケット詳細</Box>
          </>
        )
        // <Contents />
      }
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
  // let data = stageArray.filter((item: stageType) => item.path === params.id);
  // console.log(data);
  // console.log(params.id);

  return {
    props: {
      // data: data,
      id: params.id,
    },
  };
};
