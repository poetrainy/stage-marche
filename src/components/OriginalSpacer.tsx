import { FC } from "react";
import { Box } from "@chakra-ui/react";

type Props = {
  size: string;
  horizontal?: boolean;
};

const OriginalSpacer: FC<Props> = ({ size, horizontal }) => (
  <Box
    sx={{
      ...(horizontal
        ? {
            w: size,
            h: "auto",
          }
        : {
            w: "auto",
            h: size,
          }),
    }}
  />
);

export default OriginalSpacer;
