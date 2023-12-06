import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { LOCAL_STORAGE_AUTHENTICATOR } from "src/constants/authenticator";

type Props = {
  children: JSX.Element;
};

const Authenticator: FC<Props> = ({ children }) => {
  const router = useRouter();

  const isSignInInformation =
    typeof window !== "undefined" &&
    localStorage.getItem(LOCAL_STORAGE_AUTHENTICATOR);

  useEffect(() => {
    if (!isSignInInformation) {
      localStorage.setItem(LOCAL_STORAGE_AUTHENTICATOR, "false");
    }
    if (router.query.authenticated) {
      router.push(
        `${router.pathname}?authenticated=${
          isSignInInformation
            ? "false"
            : JSON.parse(
                localStorage.getItem(LOCAL_STORAGE_AUTHENTICATOR) ?? ""
              )
            ? "true"
            : "false"
        }`
      );
    }
  }, []);

  return children;
};

export default Authenticator;
