import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { stageType } from 'src/types/stage';
import { prefectureArray } from 'src/libs/stage';

type Props = {
  data: stageType;
  place?: boolean;
  schedule?: boolean;
  time?: boolean;
};

const StageInfomation: FC<Props> = ({ data, schedule, place, time }) => (
  <Flex
    flexDir={'column'}
    gap={'4px'}
    w={'100%'}
    color={'black500'}
    fontSize={'1.2rem'}
    sx={{
      '>div': {
        alignItems: 'flex-start',
        gap: '3px',
        width: '100%',
        lineHeight: '1.6rem',
        paddingLeft: '19px',
        position: 'relative',
        '&::before': {
          content: '""',
          display: 'block',
          width: '16px',
          height: '16px',
          position: 'absolute',
          inset: '0 auto auto 0',
          // background: 'url("/img/stage_info_schedule.svg")',
        },
      },
    }}
  >
    {!place && (
      <Flex
        sx={{
          '&::before': {
            background: 'url("/img/stage_info_place.svg")',
          },
        }}
      >
        {prefectureArray[data.schedule[0].prefecture]}公演{' '}
        {!time && data.schedule[0].place}
      </Flex>
    )}
    {!schedule && (
      <Flex
        sx={{
          '&::before': {
            background: 'url("/img/stage_info_schedule.svg")',
          },
        }}
      >
        {data.schedule[0].date.start.y}.{data.schedule[0].date.start.m}.
        {data.schedule[0].date.start.d}-{data.schedule[0].date.end.y}.
        {data.schedule[0].date.end.m}.{data.schedule[0].date.end.d}
      </Flex>
    )}
    {!time && (
      <Flex
        sx={{
          '&::before': {
            background: 'url("/img/stage_info_time.svg")',
          },
        }}
      >
        {data.schedule[0].time.matinee && (
          <>
            {data.schedule[0].time.matinee.start[0]}:
            {data.schedule[0].time.matinee.start[1]}〜
            {data.schedule[0].time.matinee.end[0]}:
            {data.schedule[0].time.matinee.end[1]}
            <br />
          </>
        )}
        {data.schedule[0].time.soiree && (
          <>
            {data.schedule[0].time.soiree.start[0]}:
            {data.schedule[0].time.soiree.start[1]}〜
            {data.schedule[0].time.soiree.end[0]}:
            {data.schedule[0].time.soiree.end[1]}
          </>
        )}
      </Flex>
    )}
  </Flex>
);

export default StageInfomation;
