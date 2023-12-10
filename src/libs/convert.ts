import { isLocalStorageSignIn } from "src/libs/authenticate";

const dateConvertToJapaneseBase = ["年", "月", "日"];

export const pathWithAuthenticator = (path: string) => {
  return {
    pathname: `${path}`,
    query: { authenticated: isLocalStorageSignIn() ? "true" : "false" },
  };
};
export const imageWithDirectoryPath = (src: string) => `/images/${src}`;

export const prefectureWithFixedText = (prefecture: string) =>
  `${prefecture === "北海道" ? prefecture : prefecture.slice(0, -1)}公演`;

export const dateConvert = (date: string) => date.replaceAll("-", ".");

export const dateConvertToJapanese = (date: string) =>
  date
    .split("-")
    .map((str, i) => `${str}${dateConvertToJapaneseBase[i]}`)
    .join("");
