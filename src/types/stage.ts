export type StageSeatStatusType = "ok" | "few" | "no";
export type StageTypeType = "musical" | "straightPlay" | "kabuki" | "rakugo";

export type StageType = {
  name: string;
  path: string;
  images: string[];
  type: StageTypeType;
  genres: (
    | "歴史"
    | "現代"
    | "近未来"
    | "ミステリー"
    | "シリアス"
    | "ラブ"
    | "革命"
    | "ほのぼの"
    | "成長"
    | "スポーツ"
    | "学園"
    | "実写化"
  )[];
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
            status: StageSeatStatusType;
          }
        | undefined;
      other: {
        class: string;
        price: string;
        status: StageSeatStatusType;
      }[];
    };
  }[];
};

export type CastType = {
  id: string;
  name: string;
};

export type favType = { data: number; place: number };
