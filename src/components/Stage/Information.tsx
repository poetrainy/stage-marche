import { FC, Fragment, SVGProps } from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

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
}) => {
  const stageInformations: {
    id: string;
    isView: boolean;
    icon: FC<SVGProps<SVGElement>>;
    contents: JSX.Element;
  }[] = [
    {
      id: "place",
      isView: !place || !prefecture,
      icon: IconPlace,
      contents: (
        <>
          {!prefecture && <>{`${stage.schedule[index].prefecture}公演`}</>}
          {!place && stage.schedule[index].place}
        </>
      ),
    },
    {
      id: "schedule",
      isView: !schedule,
      icon: IconSchedule,
      contents: (
        <>
          {`${stage.schedule[index].dateFrom}-${stage.schedule[index].dateTo}`}
        </>
      ),
    },
    {
      id: "time",
      isView: !time,
      icon: IconTime,
      contents: (
        <>
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
        </>
      ),
    },
  ];

  return (
    <Flex flexDir="column" gap="6px" color="black500" fontSize="1.2rem">
      {stageInformations.map((information) => (
        <Fragment key={information.id}>
          {information.isView && (
            <Flex gap="4px">
              <Image as={information.icon} w="15px" h="15px" m="1.5px" />
              <Text as="span" w="calc(100% - 16px - 4px)">
                {information.contents}
              </Text>
            </Flex>
          )}
        </Fragment>
      ))}
    </Flex>
  );
};

export default StageInformation;
