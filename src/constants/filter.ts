import { STAGE_GENRES, STAGE_TYPES } from "src/constants/stage";
import { COLUMN_GENRES } from "src/constants/column";

import { FilterContentsType } from "src/types/search";

const STAGE_STYLES = [STAGE_TYPES[0].text, STAGE_TYPES[1].text];

export const FILTER_STAGES: FilterContentsType[] = [
  {
    condition: "スタイル",
    item: STAGE_STYLES,
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
    item: STAGE_STYLES,
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
