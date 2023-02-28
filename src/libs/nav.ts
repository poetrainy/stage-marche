import { navContentsType } from 'src/types/nav';

import HomeIcon from 'src/assets/nav_home';
import ColumnIcon from 'src/assets/nav_column';
import TicketIcon from 'src/assets/nav_ticket';
import FavIcon from 'src/assets/nav_fav';
import UserIcon from 'src/assets/nav_user';

export const navContents: navContentsType[] = [
  {
    name: 'ホーム',
    img: HomeIcon,
    path: '',
    center: false,
    fill: 'black400',
  },
  {
    name: 'コラム',
    img: ColumnIcon,
    path: 'column',
    center: false,
    fill: 'black400',
  },
  {
    name: 'チケット',
    img: TicketIcon,
    path: 'ticket',
    center: true,
    fill: 'white',
  },
  {
    name: '気になる',
    img: FavIcon,
    path: 'fav',
    center: false,
    fill: 'black400',
  },
  {
    name: 'アカウント',
    img: UserIcon,
    path: 'user',
    center: false,
    fill: 'black400',
  },
];
