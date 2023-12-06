import { FC } from "react";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

import Header from "src/components/Header";
import Navigation from "src/components/Navigation";
import Authenticator from "src/components/Authenticator";
import SignInGuidance from "src/components/SignIn/Guidance";

import { LOCAL_STORAGE_AUTHENTICATOR } from "src/constants/authenticator";
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

  const isSignInGuidance =
    !isSignIn &&
    (pathname === "/column" || pathname === "/ticket" || pathname === "/fav");

  return (
    <Authenticator>
      <>
        <Header path={pathname} search={search} />
        <Box
          as="main"
          minH="100vh"
          p="calc(64px + 32px) 0 calc(40px + 96px)"
          sx={{
            ...((isSignInGuidance ||
              (pathname !== "/" && pathname !== "/ticket")) && {
              textStyle: "bodyW",
            }),
            ...(!isSignInGuidance &&
              pathname === "/ticket" && {
                bg: "greenToBlue",
              }),
          }}
        >
          {isSignInGuidance ? (
            <SignInGuidance guidance={SIGN_IN_GUIDANCE_PAGES[pathname]} />
          ) : (
            <>{component}</>
          )}
        </Box>
        <Navigation path={pathname} />
      </>
    </Authenticator>
  );
};

export default Layout;
