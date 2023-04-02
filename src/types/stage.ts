export type stageType = {
  name: string;
  path: string;
  imgLength: 1;
  type: number;
  genre: number[];
  description: string;
  youtube: string[];
  cast: string[];
  schedule: {
    place: string;
    prefecture: number;
    date: {
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
    seat: {
      monopoly:
        | {
            class: string;
            price: string;
            status: string;
          }
        | undefined;
      other: {
        class: string;
        price: string;
        status: string;
      }[];
    };
  }[];
};

export type castType = {
  name: string;
  path: string;
};

export type favType = { data: number; place: number };
