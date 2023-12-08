import path from "path";
import { isLocalStorageSignIn } from "src/libs/authenticate";

export const pathWithAuthenticator = (path: string) => {
  return {
    pathname: `${path}`,
    query: { authenticated: isLocalStorageSignIn() ? "true" : "false" },
  };
};
export const imageWithDirectoryPath = (src: string) => `/images/${src}`;

export const prefectureWithFixedText = (prefecture: string) =>
  `${prefecture === "北海道" ? prefecture : prefecture.slice(0, -1)}公演`;
