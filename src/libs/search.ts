import { stageGenreArray, typeArray } from 'src/libs/stage';
import { columnGenreArray } from 'src/libs/column';

import { searchType } from 'src/types/search';

const styleArray = [typeArray[0].text, typeArray[1].text];

export const searchStageArray: searchType[] = [
  {
    condition: 'スタイル',
    item: styleArray,
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
    item: styleArray,
  },
  {
    condition: 'タグ',
    item: columnGenreArray,
  },
  {
    condition: 'こだわり',
    item: ['はじめてのB席', '大阪公演がある', '配信公演がある'],
  },
];
