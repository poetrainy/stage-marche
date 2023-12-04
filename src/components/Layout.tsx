import { FC } from "react";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

import Header from "src/components/Header";
import Navigation from "src/components/Navigation";
import Authenticator from "src/components/Authenticator";

type Props = {
  component: JSX.Element;
  search?: boolean;
  index?: boolean;
};

const Layout: FC<Props> = ({ component, search, index }) => {
  const { pathname } = useRouter();

  return (
    <Authenticator>
      <>
        <Header path={pathname} search={search} />
        <Box
          as="main"
          minH="100vh"
          p="calc(64px + 32px) 0 calc(40px + 96px)"
          sx={{
            ...(pathname !== "/" &&
              pathname !== "/ticket" && {
                textStyle: "bodyW",
              }),
            ...(pathname === "/ticket" && {
              bg: "greenToBlue",
            }),
          }}
          children={component}
        />
        <Navigation path={pathname} />
      </>
    </Authenticator>
  );
};

export default Layout;
