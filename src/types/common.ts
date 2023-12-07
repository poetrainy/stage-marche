import { FC, SVGProps } from "react";

import { CastType } from "src/types/stage";

export type UserType = {
  prefecture: string;
  doneStamps: number;
  recentCasts: CastType[];
};

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
