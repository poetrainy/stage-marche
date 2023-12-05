import { FC } from "react";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

import Header from "src/components/Header";
import Navigation from "src/components/Navigation";
import Authenticator from "src/components/Authenticator";
import { LOCAL_STORAGE_AUTHENTICATOR } from "src/constants/authenticator";
import SignInGuidance from "src/components/SignInGuidance";
import { SIGN_IN_GUIDANCE_PAGES } from "src/constants/signIn";

type Props = {
  component: JSX.Element;
  search?: boolean;
  index?: boolean;
};

const Layout: FC<Props> = ({ component, search, index }) => {
  const { pathname } = useRouter();

  const isSignIn =
    typeof window !== "undefined" &&
    localStorage.getItem(LOCAL_STORAGE_AUTHENTICATOR) &&
    (JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_AUTHENTICATOR) ?? "false"
    ) as boolean);

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
          children={
            isSignIn ? (
              <>{component}</>
            ) : pathname === "/column" ||
              pathname === "/ticket" ||
              pathname === "/fav" ? (
              <SignInGuidance
                guidance={
                  SIGN_IN_GUIDANCE_PAGES[
                    pathname.split("/")[1] as "column" | "ticket" | "fav"
                  ]
                }
              />
            ) : (
              <>{component}</>
            )
          }
        />
        <Navigation path={pathname} />
      </>
    </Authenticator>
  );
};

export default Layout;
