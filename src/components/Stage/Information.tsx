import { FC } from "react";
import { Flex, Image } from "@chakra-ui/react";

import { StageType } from "src/types/stage";
import { PREFECTURES } from "src/constants/stage";

import IconSchedule from "src/assets/svg/stage_info_schedule.svg";
import IconPlace from "src/assets/svg/stage_info_place.svg";
import IconTime from "src/assets/svg/stage_info_time.svg";

type Props = {
  stage: StageType;
  prefecture?: boolean;
  place?: boolean;
  schedule?: boolean;
  time?: boolean;
  index: number;
};

const StageInformation: FC<Props> = ({
  stage,
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
            {PREFECTURES[stage.schedule[index].prefecture]}
            公演
          </>
        )}
        {!place && stage.schedule[index].place}
      </Flex>
    )}
    {!schedule && (
      <Flex gap="4px">
        <Image as={IconSchedule} />
        {stage.schedule[index].date.start.y}.{stage.schedule[index].date.start.m}.
        {stage.schedule[index].date.start.d}-{stage.schedule[index].date.end.y}.
        {stage.schedule[index].date.end.m}.{stage.schedule[index].date.end.d}
      </Flex>
    )}
    {!time && (
      <Flex gap="4px">
        <Image as={IconTime} />
        {stage.schedule[0].time.matinee && (
          <>
            {stage.schedule[0].time.matinee.start[0]}:
            {stage.schedule[0].time.matinee.start[1]}〜
            {stage.schedule[0].time.matinee.end[0]}:
            {stage.schedule[0].time.matinee.end[1]}
            <br />
          </>
        )}
        {stage.schedule[0].time.soiree && (
          <>
            {stage.schedule[0].time.soiree.start[0]}:
            {stage.schedule[0].time.soiree.start[1]}〜
            {stage.schedule[0].time.soiree.end[0]}:
            {stage.schedule[0].time.soiree.end[1]}
          </>
        )}
      </Flex>
    )}
  </Flex>
);

export default StageInformation;
