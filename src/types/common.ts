import { FC, SVGProps } from "react";

export type UserType = {
  prefecture: string;
  doneStamps: number;
  tickets: {
    stageId: string;
    place: string;
    date: string;
    time: string;
  }[];
  favoriteStages: string[];
  recentCasts: string[];
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
