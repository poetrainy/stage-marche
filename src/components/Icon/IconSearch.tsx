import { FC } from "react";
import { Box } from "@chakra-ui/react";

type Props = {
  onClick: () => void;
};

const IconSearch: FC<Props> = ({ onClick }) => (
  <Box
    as="button"
    w="40px"
    h="40px"
    pos="absolute"
    inset="auto 5vw auto auto"
    mt="2px"
    sx={{
      "&::before": {
        content: '""',
        display: "block",
        w: "20px",
        h: "20px",
        borderw: "3.5px",
        borderStyle: "solid",
        borderColor: "black800",
        position: "absolute",
        inset: "0 0 0 0",
        margin: "auto",
        rounded: "full",
      },
      "&::after": {
        content: '""',
        display: "block",
        w: "7px",
        h: "3.5px",
        bg: "black800",
        position: "absolute",
        inset: "0 0 -14px 14px",
        margin: "auto",
        rounded: "2px",
        transform: "rotateZ(45deg)",
      },
    }}
    onClick={onClick}
  />
);

export default IconSearch;
