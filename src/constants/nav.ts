import { NavigationContentsType } from "src/types/nav";

import HomeIcon from "src/assets/svg/nav_home";
import ColumnIcon from "src/assets/svg/nav_column";
import TicketIcon from "src/assets/svg/nav_ticket";
import FavIcon from "src/assets/svg/nav_fav";
import UserIcon from "src/assets/svg/nav_user";

export const NAVIGATION_CONTENTS: NavigationContentsType[] = [
  {
    name: "ホーム",
    img: HomeIcon,
    path: "",
    center: false,
    fill: "black400",
  },
  {
    name: "コラム",
    img: ColumnIcon,
    path: "column",
    center: false,
    fill: "black400",
  },
  {
    name: "チケット",
    img: TicketIcon,
    path: "ticket",
    center: true,
    fill: "black400",
  },
  {
    name: "気になる",
    img: FavIcon,
    path: "fav",
    center: false,
    fill: "black400",
  },
  {
    name: "アカウント",
    img: UserIcon,
    path: "user",
    center: false,
    fill: "black400",
  },
];
