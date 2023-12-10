export type ColumnType = {
  id: number;
  title: string;
  date: string;
  genres: ("作品解説" | "インタビュー" | "レポ")[];
  relatedStage: string;
  text: string;
};
