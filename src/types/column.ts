export type ColumnType = {
  id: number;
  title: string;
  date: {
    y: number;
    m: number;
    d: number;
  };
  genres: number[];
  text: string;
};
