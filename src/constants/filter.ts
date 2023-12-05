import { STAGE_GENRES } from "src/constants/stage";
import { COLUMN_GENRES } from "src/constants/column";

import { FilterContentsType } from "src/types/search";

export const FILTER_STAGES: FilterContentsType[] = [
  {
    condition: "スタイル",
    item: ["ミュージカル", "ストレートプレイ", "歌舞伎", "落語"],
  },
  {
    condition: "タグ",
    item: STAGE_GENRES,
  },
  {
    condition: "こだわり",
    item: [
      "はじめてのB席",
      "大阪公演がある",
      "動画がある",
      "コラムが読める",
      "配信公演がある",
    ],
  },
];

export const FILTER_COLUMNS: FilterContentsType[] = [
  {
    condition: "スタイル",
    item: ["ミュージカル", "ストレートプレイ", "歌舞伎", "落語"],
  },
  {
    condition: "タグ",
    item: COLUMN_GENRES,
  },
  {
    condition: "こだわり",
    item: ["はじめてのB席", "大阪公演がある", "配信公演がある"],
  },
];
