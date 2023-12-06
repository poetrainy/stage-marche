import { FC } from "react";
import { Center } from "@chakra-ui/react";
import {
  SEAT_STATUS_OK,
  SEAT_STATUS_FEW,
  SEAT_STATUS_NO,
} from "src/constants/stage";
import { imageWithDirectoryPath } from "src/libs/imageWithDirectoryPath";

type Props = {
  status:
    | typeof SEAT_STATUS_OK
    | typeof SEAT_STATUS_FEW
    | typeof SEAT_STATUS_NO;
};

const SEAT_STATUS_OBJECT: Record<
  typeof SEAT_STATUS_OK | typeof SEAT_STATUS_FEW | typeof SEAT_STATUS_NO,
  { text: string; background: string }
> = {
  ok: {
    text: "残席あり",
    background: "pink",
  },
  few: {
    text: "残席わずか",
    background: "yellow",
  },
  no: {
    text: "残席なし",
    background: "black300",
  },
};

const StageSeat: FC<Props> = ({ status }) => {
  return (
    <Center
      w="72px"
      h="72px"
      bg={SEAT_STATUS_OBJECT[status].background}
      rounded="16px"
    >
      <Center
        as="p"
        fontSize="1.1rem"
        fontWeight="bold"
        mb="40px"
        pos="relative"
        sx={{
          ...(status === SEAT_STATUS_OK && {
            color: "white",
            "&::before": {
              content: '""',
              display: "block",
              w: "36px",
              h: "36px",
              border: "#ffffff 3px solid",
              rounded: "full",
              position: "absolute",
              inset: "auto auto -40px auto",
            },
            "&::after": {
              content: '""',
              display: "block",
              w: "24px",
              h: "24px",
              border: "#ffffff 3px solid",
              rounded: "full",
              position: "absolute",
              inset: "auto auto -34px auto",
            },
          }),
          ...(status === SEAT_STATUS_FEW && {
            color: "white",
            "&::before": {
              content: '""',
              display: "block",
              w: "36px",
              h: "36px",
              bg: `url(${imageWithDirectoryPath(
                "stage_seat_icon_triangle.svg"
              )}) no-repeat`,
              backgroundSize: "contain",
              backgroundPosition: "center bottom",
              position: "absolute",
              inset: "auto auto -38px auto",
            },
          }),
          ...(status === SEAT_STATUS_NO && {
            color: "black400",
            "&::before": {
              content: '""',
              display: "block",
              w: "40px",
              h: "5px",
              bg: "black400",
              rounded: "full",
              position: "absolute",
              inset: "auto auto -24px auto",
              transform: "rotateZ(45deg)",
            },
            "&::after": {
              content: '""',
              display: "block",
              w: "40px",
              h: "5px",
              bg: "black400",
              rounded: "full",
              position: "absolute",
              inset: "auto auto -24px auto",
              transform: "rotateZ(-45deg)",
            },
          }),
        }}
      >
        {SEAT_STATUS_OBJECT[status].text}
      </Center>
    </Center>
  );
};

export default StageSeat;
