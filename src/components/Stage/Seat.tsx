import { FC } from "react";
import { Center } from "@chakra-ui/react";

import { imageWithDirectoryPath } from "src/libs/imageWithDirectoryPath";

import { SEAT_STATUSES } from "src/constants/stage";

import { StageSeatStatusType } from "src/types/stage";

type Props = {
  status: StageSeatStatusType;
};

const StageSeat: FC<Props> = ({ status }) => {
  return (
    <Center
      w="72px"
      h="72px"
      bg={SEAT_STATUSES[status].background}
      rounded="16px"
    >
      <Center
        as="p"
        fontSize="1.1rem"
        fontWeight="bold"
        mb="40px"
        pos="relative"
        sx={{
          ...(status === "ok" && {
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
          ...(status === "few" && {
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
          ...(status === "no" && {
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
        {SEAT_STATUSES[status].text}
      </Center>
    </Center>
  );
};

export default StageSeat;
