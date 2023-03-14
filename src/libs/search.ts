import { columnGenreArray } from 'src/libs/column';
import { typeArray, stageGenreArray } from 'src/libs/signin';

import { searchType } from 'src/types/search';

export const searchStageArray: searchType[] = [
  {
    condition: 'スタイル',
    item: [typeArray[0].text, typeArray[1].text],
  },
  {
    condition: 'タグ',
    item: stageGenreArray,
  },
  {
    condition: 'こだわり',
    item: [
      'はじめてのB席',
      '大阪公演がある',
      '動画がある',
      'コラムが読める',
      '配信公演がある',
    ],
  },
];

export const searchColumnArray: searchType[] = [
  {
    condition: 'スタイル',
    item: [typeArray[0].text, typeArray[1].text],
  },
  {
    condition: 'タグ',
    item: columnGenreArray,
  },
];
