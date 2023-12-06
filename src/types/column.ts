export type ColumnType = {
  id: number;
  title: string;
  date: {
    y: number;
    m: number;
    d: number;
  };
  genres: ("作品解説" | "インタビュー" | "レポ")[];
  text: string;
};
