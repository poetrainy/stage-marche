export type columnType = {
  id: number;
  title: string;
  date: {
    y: number;
    m: number;
    d: number;
  };
  genre: number[];
  text: string;
};
