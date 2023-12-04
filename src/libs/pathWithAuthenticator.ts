import { LOCAL_STORAGE_AUTHENTICATOR } from "src/constants/authenticator";

export const pathWithAuthenticator: (path: string) => string = (
  path: string
) => {
  const isAuthenticated =
    typeof window !== "undefined" &&
    localStorage.getItem(LOCAL_STORAGE_AUTHENTICATOR) === "true";

  return `${path}?authenticated=${isAuthenticated ? "true" : "false"}`;
};
