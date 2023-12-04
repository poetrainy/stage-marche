import { FC } from "react";
import { Center } from "@chakra-ui/react";

type Props = {
  onClick: () => void;
};

const IconClose: FC<Props> = ({ onClick }) => (
  <Center
    as="button"
    w="40px"
    h="40px"
    pos="absolute"
    inset="auto 5vw auto auto"
    sx={{
      "&::before": {
        content: '""',
        display: "block",
        w: "22px",
        h: "3px",
        bg: "black800",
        position: "absolute",
        margin: "auto",
        rounded: "full",
        transform: "rotateZ(-45deg)",
      },
      "&::after": {
        content: '""',
        display: "block",
        w: "22px",
        h: "3px",
        bg: "black800",
        position: "absolute",
        margin: "auto",
        rounded: "full",
        transform: "rotateZ(45deg)",
      },
    }}
    onClick={onClick}
  />
);

export default IconClose;
