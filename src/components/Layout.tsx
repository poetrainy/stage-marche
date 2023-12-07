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
  children: JSX.Element;
  isSearch?: boolean;
  isFixedObjectsView?: boolean;
};

const Layout: FC<Props> = ({ children, isSearch, isFixedObjectsView }) => {
  const { pathname } = useRouter();

  const isSignInGuidance =
    !isLocalStorageSignIn() &&
    (pathname === "/columns" ||
      pathname === "/tickets" ||
      pathname === "/favorites");

  return (
    <Authenticator>
      <>
        {isFixedObjectsView && (
          <Header
            path={pathname}
            isSearch={!!isLocalStorageSignIn() && isSearch}
          />
        )}
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
              <>{children}</>
            )}
          </>
        </Box>
        {isFixedObjectsView && <Navigation path={pathname} />}
      </>
    </Authenticator>
  );
};

export default Layout;
