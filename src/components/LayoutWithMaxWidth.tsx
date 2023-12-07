import { FC } from "react";
import { Box } from "@chakra-ui/react";

import Authenticator from "src/components/Authenticator";

type Props = {
  children: JSX.Element;
};

const LayoutWithMaxWidth: FC<Props> = ({ children }) => {
  return (
    <Authenticator>
      <Box as="main" minH="100vh" textStyle="bodyW">
        {children}
      </Box>
    </Authenticator>
  );
};

export default LayoutWithMaxWidth;
