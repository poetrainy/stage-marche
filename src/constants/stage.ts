import { StageSeatStatusType, StageTypeType } from "src/types/stage";

export const PREFECTURES: string[] = [
  "北海道",
  "青森県",
  "岩手県",
  "宮城県",
  "秋田県",
  "山形県",
  "福島県",
  "茨城県",
  "栃木県",
  "群馬県",
  "埼玉県",
  "千葉県",
  "東京都",
  "神奈川県",
  "新潟県",
  "富山県",
  "石川県",
  "福井県",
  "山梨県",
  "長野県",
  "岐阜県",
  "静岡県",
  "愛知県",
  "三重県",
  "滋賀県",
  "京都府",
  "大阪府",
  "兵庫県",
  "奈良県",
  "和歌山県",
  "鳥取県",
  "島根県",
  "岡山県",
  "広島県",
  "山口県",
  "徳島県",
  "香川県",
  "愛媛県",
  "高知県",
  "福岡県",
  "佐賀県",
  "長崎県",
  "熊本県",
  "大分県",
  "宮崎県",
  "鹿児島県",
  "沖縄県",
];

export const STAGE_TYPES: Record<
  StageTypeType,
  { label: string; color: string }
> = {
  musical: {
    label: "ミュージカル",
    color: "pink",
  },
  straightPlay: {
    label: "お芝居",
    color: "green",
  },
  kabuki: {
    label: "歌舞伎",
    color: "lavender",
  },
  rakugo: {
    label: "落語",
    color: "orange",
  },
};

export const SEAT_STATUSES: Record<
  StageSeatStatusType,
  { text: string; background: string }
> = {
  ok: {
    text: "残席あり",
    background: "pink",
  },
  few: {
    text: "残席わずか",
    background: "yellow",
  },
  no: {
    text: "残席なし",
    background: "black300",
  },
};
