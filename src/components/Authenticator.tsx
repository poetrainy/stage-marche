import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import {
  getLocalStorageAuthenticated,
  isLocalStorageAuthenticated,
  onLocalStorageAuthenticate,
} from "src/libs/authenticate";

type Props = {
  children: JSX.Element;
};

const Authenticator: FC<Props> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (!isLocalStorageAuthenticated()) {
      onLocalStorageAuthenticate("false");
    }
    if (!router.query.authenticated) {
      router.push(
        `${router.pathname}?authenticated=${
          isLocalStorageAuthenticated() ? getLocalStorageAuthenticated() : "false"
        }`
      );
    }
  }, []);

  return children;
};

export default Authenticator;
