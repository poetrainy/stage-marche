import { FC } from "react";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

import Header from "src/components/Header";
import Navigation from "src/components/Navigation";
import Authenticator from "src/components/Authenticator";
import SignInGuidance from "src/components/SignIn/Guidance";

import { SIGN_IN_GUIDANCE_PAGES } from "src/constants/signIn";

import { isLocalStorageSignIn } from "src/libs/authenticate";

type Props = {
  component: JSX.Element;
  isSearch?: boolean;
  index?: boolean;
};

const Layout: FC<Props> = ({ component, isSearch }) => {
  const { pathname } = useRouter();

  const isSignInGuidance =
    !isLocalStorageSignIn() &&
    (pathname === "/column" || pathname === "/ticket" || pathname === "/fav");

  return (
    <Authenticator>
      <>
        <Header
          path={pathname}
          isSearch={!!isLocalStorageSignIn() && isSearch}
        />
        <Box
          as="main"
          minH="100vh"
          p="calc(64px + 32px) 0 calc(40px + 96px)"
          textStyle="bodyW"
        >
          <>
            {isSignInGuidance ? (
              <SignInGuidance guidance={SIGN_IN_GUIDANCE_PAGES[pathname]} />
            ) : (
              <>{component}</>
            )}
          </>
        </Box>
        <Navigation path={pathname} />
      </>
    </Authenticator>
  );
};

export default Layout;
