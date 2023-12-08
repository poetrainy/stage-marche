import { FC, Fragment, SVGProps } from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

import { dateConvert } from "src/libs/convert";

import IconSchedule from "src/assets/svg/stage_info_schedule.svg";
import IconPlace from "src/assets/svg/stage_info_place.svg";
import IconTime from "src/assets/svg/stage_info_time.svg";

type Props = {
  places?: string[];
  date?: {
    from?: string;
    to: string;
  };
  time?: {
    matinee?: string;
    soiree?: string;
  };
};

const StageInformation: FC<Props> = ({ places, date, time }) => {
  const stageInformation: {
    id: string;
    isView: boolean;
    icon: FC<SVGProps<SVGElement>>;
    text: string;
  }[] = [
    {
      id: "place",
      isView: !!places,
      icon: IconPlace,
      text: places!.join("、"),
    },
    {
      id: "schedule",
      isView: !!date,
      icon: IconSchedule,
      text: `${date?.from ? `${dateConvert(date.from)}-` : ""}${dateConvert(
        date?.to ?? ""
      )}`,
    },
    {
      id: "time",
      isView: !!time,
      icon: IconTime,
      text: `${time?.matinee ? time.matinee : ""}${
        time?.matinee && time?.soiree ? "、" : ""
      }${time?.soiree ? time.soiree : ""}`,
    },
  ];

  return (
    <Flex flexDir="column" gap="6px" color="black500" fontSize="1.2rem">
      {stageInformation.map((information) => (
        <Fragment key={information.id}>
          {information.isView && (
            <Flex gap="4px">
              <Image
                as={information.icon}
                w="15px"
                h="15px"
                m="1.5px"
                flex="none"
              />
              <Text as="span">{information.text}</Text>
            </Flex>
          )}
        </Fragment>
      ))}
    </Flex>
  );
};

export default StageInformation;
