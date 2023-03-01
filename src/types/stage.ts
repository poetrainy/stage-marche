export type stageType = {
  name: string;
  img: string;
  type: number;
  genre: number[];
  schedule: {
    start: {
      y: number;
      m: number;
      d: number;
    };
    end: {
      y: number;
      m: number;
      d: number;
    };
  };
  time: {
    matinee:
      | {
          start: string[];
          end: string[];
        }
      | undefined;
    soiree:
      | {
          start: string[];
          end: string[];
        }
      | undefined;
  };
  place: string;
  prefecture: number;
};
