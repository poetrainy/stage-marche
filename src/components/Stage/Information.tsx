import { FC } from "react";
import { Flex, Image } from "@chakra-ui/react";

import { StageType } from "src/types/stage";
import { PREFECTURES } from "src/constants/stage";

import IconSchedule from "src/assets/svg/stage_info_schedule.svg";
import IconPlace from "src/assets/svg/stage_info_place.svg";
import IconTime from "src/assets/svg/stage_info_time.svg";

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
  <Flex flexDir="column" gap="6px" color="black500" fontSize="1.2rem">
    {(!place || !prefecture) && (
      <Flex gap="4px">
        <Image as={IconPlace} />
        {!prefecture && (
          <>
            {PREFECTURES[data.schedule[index].prefecture]}
            公演
          </>
        )}
        {!place && data.schedule[index].place}
      </Flex>
    )}
    {!schedule && (
      <Flex gap="4px">
        <Image as={IconSchedule} />
        {data.schedule[index].date.start.y}.{data.schedule[index].date.start.m}.
        {data.schedule[index].date.start.d}-{data.schedule[index].date.end.y}.
        {data.schedule[index].date.end.m}.{data.schedule[index].date.end.d}
      </Flex>
    )}
    {!time && (
      <Flex gap="4px">
        <Image as={IconTime} />
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
