export type ColumnType = {
  id: number;
  path: string;
  title: string;
  date: string;
  genres: ("作品解説" | "インタビュー" | "レポ")[];
  text: string;
};
