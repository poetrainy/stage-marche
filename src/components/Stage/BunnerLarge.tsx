import { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

import StageType from 'src/components/Stage/Type';
import OriginalSpacer from 'src/components/OriginalSpacer';
import StageGenre from 'src/components/Stage/Genre';
import StageInfomation from 'src/components/Stage/Infomation';

import { stageType } from 'src/types/stage';

type Props = {
  data: stageType[];
};

const StageBunnerLarge: FC<Props> = ({ data }) => {
  return (
    <Flex
      flexDir={'column'}
      gap={'16px'}
      sx={{
        '>a': {
          display: 'flex',
          gap: '4%',
          background: 'white',
          padding: '14px',
          borderRadius: '24px',
          textStyle: 'lightShadow',
        },
      }}
    >
      {data.map((item, i) => (
        <NextLink href={`/stage/${item.path}`} passHref key={item.name + i}>
          <Box
            w={'44%'}
            bg={'black600'}
            pt={'calc(45% / 3 * 4.2)'}
            borderRadius={'14px'}
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
          </Box>
          <Flex
            flexDir={'column'}
            justifyContent={'space-between'}
            w={'52%'}
            p={'6px 0'}
          >
            <Box>
              <StageType data={item} />
              <OriginalSpacer size={'4px'} />
              <Text as={'h3'} fontSize={'1.7rem'} fontWeight={'bold'}>
                {item.name}
              </Text>
              <OriginalSpacer size={'4px'} />
              <StageGenre data={item} />
            </Box>
            <StageInfomation data={item} />
          </Flex>
        </NextLink>
      ))}
    </Flex>
  );
};

export default StageBunnerLarge;
