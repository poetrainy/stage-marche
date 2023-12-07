import { isLocalStorageSignIn } from "src/libs/authenticate";

export const pathWithAuthenticator: (path: string) => string = (path: string) =>
  `${path}?authenticated=${isLocalStorageSignIn() ? "true" : "false"}`;
