import { FC } from "react";
import { Box } from "@chakra-ui/react";

type Props = {
  onClick: () => void;
};

const IconBackArrow: FC<Props> = ({ onClick }) => (
  <Box
    as="button"
    type="button"
    w="24px"
    h="24px"
    pos="absolute"
    inset="auto auto auto 5vw"
    sx={{
      "&::before": {
        content: '""',
        display: "block",
        w: "14px",
        h: "3px",
        bg: "black800",
        position: "absolute",
        inset: "7px 0 auto -2px",
        margin: "auto",
        rounded: "2px",
        transform: "rotateZ(-45deg)",
      },
      "&::after": {
        content: '""',
        display: "block",
        w: "14px",
        h: "3px",
        bg: "black800",
        position: "absolute",
        inset: "auto 0 6px -2px",
        margin: "auto",
        rounded: "2px",
        transform: "rotateZ(45deg)",
      },
    }}
    onClick={onClick}
  />
);

export default IconBackArrow;
