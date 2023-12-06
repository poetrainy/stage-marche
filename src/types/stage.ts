export type StageType = {
  name: string;
  path: string;
  images: string[];
  type: "musical" | "straightPlay" | "kabuki" | "rakugo";
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
            status: "no" | "ok" | "few";
          }
        | undefined;
      other: {
        class: string;
        price: string;
        status: "no" | "ok" | "few";
      }[];
    };
  }[];
};

export type CastType = {
  id: string;
  name: string;
};

export type favType = { data: number; place: number };
