import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { stageType } from 'src/types/stage';
import { prefectureArray } from 'src/libs/stage';

type Props = {
  data: stageType;
};

const StageInfomation: FC<Props> = ({ data }) => (
  <Flex
    flexDir={'column'}
    gap={'4px'}
    w={'100%'}
    color={'black500'}
    fontSize={'1.2rem'}
    sx={{
      '>div': {
        alignItems: 'flex-start',
        gap: '4px',
        width: '100%',
        lineHeight: '1.6rem',
        paddingLeft: '20px',
        position: 'relative',
        '&::before': {
          content: '""',
          display: 'block',
          width: '16px',
          height: '16px',
          position: 'absolute',
          inset: '0 auto auto 0',
          // background: 'url("./img/stage_info_schedule.svg")',
        },
      },
    }}
  >
    <Flex
      sx={{
        '&::before': {
          background: 'url("./img/stage_info_schedule.svg")',
        },
      }}
    >
      {data.schedule.start.yyyy}.{data.schedule.start.mm}.
      {data.schedule.start.dd}〜{data.schedule.end.yyyy}.{data.schedule.end.mm}.
      {data.schedule.end.dd}
    </Flex>
    <Flex
      sx={{
        '&::before': {
          background: 'url("./img/stage_info_time.svg")',
        },
      }}
    >
      {data.time.matinee && (
        <>
          {data.time.matinee.start[0]}:{data.time.matinee.start[1]}〜
          {data.time.matinee.end[0]}:{data.time.matinee.end[1]}
          <br />
        </>
      )}
      {data.time.soiree && (
        <>
          {data.time.soiree.start[0]}:{data.time.soiree.start[1]}〜
          {data.time.soiree.end[0]}:{data.time.soiree.end[1]}
        </>
      )}
    </Flex>
    <Flex
      sx={{
        '&::before': {
          background: 'url("./img/stage_info_place.svg")',
        },
      }}
    >
      {prefectureArray[data.prefecture]} {data.place}
    </Flex>
  </Flex>
);

export default StageInfomation;
