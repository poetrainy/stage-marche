import { MOCK_USER } from "src/constants/mock";
import { prefectureWithFixedText } from "src/libs/convert";
import { FilterContentsType } from "src/types/search";

export const FILTER_STAGES: FilterContentsType[] = [
  {
    condition: "スタイル",
    item: ["ミュージカル", "お芝居", "歌舞伎", "落語"],
  },
  {
    condition: "タグ",
    item: [
      "歴史",
      "現代",
      "近未来",
      "ミステリー",
      "シリアス",
      "ラブ",
      "革命",
      "ほのぼの",
      "成長",
      "スポーツ",
      "学園",
      "実写化",
    ],
  },
  {
    condition: "こだわり",
    item: [
      "はじめてのB席",
      `${prefectureWithFixedText(MOCK_USER.prefecture)}がある`,
      "動画がある",
      "コラムが読める",
      "配信公演がある",
    ],
  },
];

export const FILTER_COLUMNS: FilterContentsType[] = [
  {
    condition: "スタイル",
    item: ["ミュージカル", "お芝居", "歌舞伎", "落語"],
  },
  {
    condition: "タグ",
    item: ["作品解説", "インタビュー", "レポ"],
  },
  {
    condition: "こだわり",
    item: [
      "はじめてのB席",
      `${prefectureWithFixedText(MOCK_USER.prefecture)}がある`,
      "配信公演がある",
    ],
  },
];
