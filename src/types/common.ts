import { FC, SVGProps } from "react";

export type UserType = {
  prefecture: string;
  doneStamps: number;
  tickets: {
    stageId: string;
    scheduleId: number;
    date: string;
    time: string;
    isCompleted: boolean;
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
