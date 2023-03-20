export type searchConditionArray = 'スタイル' | 'タグ' | 'こだわり';

export type searchType = {
  condition: searchConditionArray;
  item: string[];
};
