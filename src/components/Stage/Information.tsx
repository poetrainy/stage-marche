import { FC } from "react";
import { Box, Flex } from "@chakra-ui/react";

import { StageType } from "src/types/stage";
import { prefectureArray } from "src/libs/stage";

type Props = {
  data: StageType;
  prefecture?: boolean;
  place?: boolean;
  schedule?: boolean;
  time?: boolean;
  index: number;
};

const StageInformation: FC<Props> = ({
  data,
  prefecture,
  place,
  schedule,
  time,
  index,
}) => (
  <Flex
    flexDir="column"
    gap="6px"
    w="100%"
    color="black500"
    fontSize="1.2rem"
    sx={{
      ">div": {
        alignItems: "flex-start",
        gap: "3px",
        w: "100%",
        lineHeight: "1.6rem",
        paddingLeft: "19px",
        position: "relative",
        "&::before": {
          content: '""',
          display: "block",
          w: "16px",
          h: "16px",
          position: "absolute",
          inset: "0 auto auto 0",
        },
      },
    }}
  >
    {(!place || !prefecture) && (
      <Flex
        sx={{
          "&::before": {
            bg: 'url("/img/stage_info_place.svg")',
          },
        }}
      >
        {!prefecture && (
          <>
            {prefectureArray[data.schedule[index].prefecture]}
            公演
          </>
        )}
        {!place && data.schedule[index].place}
      </Flex>
    )}
    {!schedule && (
      <Flex
        sx={{
          "&::before": {
            bg: 'url("/img/stage_info_schedule.svg")',
          },
        }}
      >
        {data.schedule[index].date.start.y}.{data.schedule[index].date.start.m}.
        {data.schedule[index].date.start.d}-{data.schedule[index].date.end.y}.
        {data.schedule[index].date.end.m}.{data.schedule[index].date.end.d}
      </Flex>
    )}
    {!time && (
      <Flex
        sx={{
          "&::before": {
            bg: 'url("/img/stage_info_time.svg")',
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

export default StageInformation;
