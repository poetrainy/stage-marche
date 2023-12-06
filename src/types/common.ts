import { FC, SVGProps } from "react";

export type ContentsBaseType = {
  label: string;
  path: string;
};

export type ContentsBaseTypeWithIcon = ContentsBaseType & {
  icon: FC<SVGProps<SVGElement>>;
};

export type ContentsBaseTypeWithImage = ContentsBaseType & {
  image: string;
};
