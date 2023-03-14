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
    condition: '公演地',
    item: ['大阪府'],
  },
  {
    condition: 'こだわり',
    item: ['はじめてのB席', 'コラムが読める', '動画がある', '配信公演'],
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
