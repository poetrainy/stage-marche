export type StageSeatStatusType = "ok" | "few" | "no";
export type StageTypeType = "musical" | "straightPlay" | "kabuki" | "rakugo";

export type StageType = {
  id: string;
  name: string;
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
    prefecture: string;
    dateFrom: string;
    dateTo: string;
    time: {
      matinee: string | undefined;
      soiree: string | undefined;
    };
    seat: {
      monopoly:
        | {
            class: "S" | "A" | "B";
            price: number;
            status: StageSeatStatusType;
          }
        | undefined;
      other: {
        class: "S" | "A" | "B";
        price: number;
        status: StageSeatStatusType;
      }[];
    };
  }[];
};

export type CastType = {
  id: string;
  name: string;
  description: string;
};
