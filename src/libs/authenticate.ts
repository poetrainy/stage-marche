import { LOCAL_STORAGE_AUTHENTICATOR } from "src/constants/authenticator";

export const onLocalStorageAuthenticate = (req: "true" | "false") =>
  typeof window !== "undefined" &&
  localStorage.setItem(LOCAL_STORAGE_AUTHENTICATOR, req);

export const isLocalStorageAuthenticated: () => boolean = () =>
  typeof window !== "undefined" &&
  !!localStorage.getItem(LOCAL_STORAGE_AUTHENTICATOR);

export const getLocalStorageAuthenticated: () => boolean = () =>
  JSON.parse(
    (typeof window !== "undefined" &&
      localStorage.getItem(LOCAL_STORAGE_AUTHENTICATOR)!) as "true" | "false"
  );

export const isLocalStorageSignIn: () => boolean = () =>
  isLocalStorageAuthenticated() && getLocalStorageAuthenticated();
