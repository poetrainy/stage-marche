import {
  SEAT_STATUS_NO,
  SEAT_STATUS_OK,
  SEAT_STATUS_FEW,
} from "src/constants/stage";

export type StageType = {
  name: string;
  path: string;
  images: string[];
  type: "musical" | "straightPlay" | "kabuki" | "rakugo";
  genres: number[];
  description: string;
  youtube: string[];
  casts: string[];
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
            status:
              | typeof SEAT_STATUS_NO
              | typeof SEAT_STATUS_OK
              | typeof SEAT_STATUS_FEW;
          }
        | undefined;
      other: {
        class: string;
        price: string;
        status:
          | typeof SEAT_STATUS_NO
          | typeof SEAT_STATUS_OK
          | typeof SEAT_STATUS_FEW;
      }[];
    };
  }[];
};

export type CastType = {
  id: string;
  name: string;
};

export type favType = { data: number; place: number };
