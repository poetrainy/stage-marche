import { FC } from 'react';
import { Box, Center, Flex, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

import OriginalSpacer from 'src/components/OriginalSpacer';
import StageType from 'src/components/Stage/Type';
import StageInfomation from 'src/components/Stage/Infomation';

import { stageType } from 'src/types/stage';

type Props = {
  data: stageType[];
};

const StageBunnerSmall: FC<Props> = ({ data }) => {
  return (
    <Box w={'100%'} overflow={'scroll'}>
      <Flex
        gap={'12px'}
        w={`calc(160px * ${data.length})`}
        sx={{
          '>a': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '160px',
            background: 'white',
            padding: '10px 10px 14px',
            borderRadius: '16px',
            textStyle: 'lightShadow',
          },
        }}
      >
        {data.map((item, i) => (
          <NextLink href={`/stage/${item.path}`} passHref key={item.name + i}>
            <Box>
              <Box
                w={'100%'}
                bg={'black600'}
                pt={'calc(100% / 3 * 4.2)'}
                borderRadius={'8px'}
                overflow={'hidden'}
                pos={'relative'}
                boxShadow={'0px 0px 3px rgba(0, 0, 0, 0.1)'}
              >
                <Box
                  as={'img'}
                  src={`/img/stage_img_${item.path}_01.jpg`}
                  w={'100%'}
                  h={'100%'}
                  objectFit={'cover'}
                  pos={'absolute'}
                  inset={'0 0 0 0'}
                />
                <Center
                  w={'40px'}
                  h={'40px'}
                  bg={'primary'}
                  pos={'absolute'}
                  inset={'8px auto auto 4px'}
                  borderRadius={'9999px'}
                >
                  <Box as={'img'} src={'/img/nav_fav.svg'} />
                </Center>
              </Box>
              <OriginalSpacer size={'8px'} />
              <StageType data={item} />
              <OriginalSpacer size={'4px'} />
              <Text as={'h3'} fontSize={'1.4rem'} fontWeight={'bold'}>
                {item.name}
              </Text>
              <OriginalSpacer size={'8px'} />
            </Box>
            <StageInfomation data={item} time />
          </NextLink>
        ))}
      </Flex>
    </Box>
  );
};

export default StageBunnerSmall;
