export type stageType = {
  name: string;
  img: string;
  type: number;
  genre: number[];
  schedule: {
    start: {
      yyyy: number;
      mm: number;
      dd: number;
    };
    end: {
      yyyy: number;
      mm: number;
      dd: number;
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
