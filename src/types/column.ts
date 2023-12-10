export type ColumnType = {
  id: string;
  title: string;
  date: string;
  genres: ("作品解説" | "インタビュー" | "レポ")[];
  text: string;
};
