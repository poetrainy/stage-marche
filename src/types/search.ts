export type searchConditionArray = "スタイル" | "タグ" | "こだわり";

export type FilterContentsType = {
  condition: searchConditionArray;
  item: string[];
};
