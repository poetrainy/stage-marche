import { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

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
    <Flex flexDir={'column'} gap={'16px'} sx={{ '>a': {} }}>
      {data.map((item, i) => (
        <Flex
          key={item.name + i}
          gap={'4%'}
          bg={'white'}
          p={'14px'}
          borderRadius={'24px'}
          textStyle={'shadow'}
        >
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
        </Flex>
      ))}
    </Flex>
  );
};

export default StageBunnerLarge;
