import { ContentsBaseType, ContentsBaseTypeWithIcon } from "src/types/common";

import SvgNavigationIconHome from "src/assets/svg/navigation_home.svg";
import SvgNavigationIconColumn from "src/assets/svg/navigation_column.svg";
import SvgNavigationIconTicket from "src/assets/svg/navigation_ticket.svg";
import SvgNavigationIconFavorite from "src/assets/svg/navigation_favorite.svg";
import SvgNavigationIconUser from "src/assets/svg/navigation_user.svg";

export const NAVIGATION_CONTENTS: ContentsBaseTypeWithIcon[] = [
  {
    label: "ホーム",
    path: "/",
    icon: SvgNavigationIconHome,
  },
  {
    label: "コラム",
    path: "/columns",
    icon: SvgNavigationIconColumn,
  },
  {
    label: "チケット",
    path: "/tickets",
    icon: SvgNavigationIconTicket,
  },
  {
    label: "気になる",
    path: "/favorites",
    icon: SvgNavigationIconFavorite,
  },
  {
    label: "アカウント",
    path: "/user",
    icon: SvgNavigationIconUser,
  },
];

export const HEADER_LABELS: ContentsBaseType[] = [
  {
    label: "コラム",
    path: "/columns",
  },
  {
    label: "チケット",
    path: "/tickets",
  },
  {
    label: "気になる",
    path: "/favorites",
  },
  {
    label: "アカウント",
    path: "/user",
  },
  {
    label: "キャスト",
    path: "/casts",
  },
];
