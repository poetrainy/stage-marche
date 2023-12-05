import { CastType, StageType } from "src/types/stage";

// import ImageStageElisabeth from "src/assets/images/stage_img_elisabeth_01.jpg";
// import ImageStageShibiregumo from "src/assets/images/stage_img_shibiregumo_01.jpg";
// import ImageStageEndlessshock from "src/assets/images/stage_img_endlessshock_01.jpg";

// import ImageCastHanafusamari from "src/assets/images/cast_hanafusamari.jpg";
// import ImageCastManakireika from "src/assets/images/cast_manakireika.jpg";
// import ImageCastInoueyoshio from "src/assets/images/cast_inoueyoshio.jpg";
// import ImageCastYamazakiikusaburo from "src/assets/images/cast_yamazakiikusaburo.jpg";
// import ImageCastFurukawayuta from "src/assets/images/cast_furukawayuta.jpg";
// import ImageCastDomotokoichi from "src/assets/images/cast_domotokoichi.jpg";
// import ImageCastKitayamahiromitsu from "src/assets/images/cast_kitayamahiromitsu.jpg";
// import ImageCastSatoshori from "src/assets/images/cast_satoshori.jpg";

export const SEAT_STATUS_OK = "ok";
export const SEAT_STATUS_FEW = "few";
export const SEAT_STATUS_NO = "no";

export const MOCK_STAGES_BASE: StageType[] = [
  {
    name: "ミュージカル『エリザベート』",
    path: "elisabeth",
    images: [],
    type: "musical",
    genres: [0, 4],
    description:
      "作品の説明が入ります。どういうおもしろさがあるのかなとかそういうこと。大体このくらいまで文章を入れられます。長ければ文末が3点リーダに置き換わらないです。",
    youtube: ["7KZxVqBX6YI", "W9721KaWPhU"],
    casts: [
      "hanafusamari",
      "manakireika",
      "inoueyoshio",
      "yamazakiikusaburo",
      "furukawayuta",
    ],
    schedule: [
      {
        place: "梅田芸術劇場 メインホール",
        prefecture: 26,
        date: {
          start: {
            y: 2023,
            m: 1,
            d: 1,
          },
          end: {
            y: 2023,
            m: 4,
            d: 10,
          },
        },
        time: {
          matinee: {
            start: ["17", "00"],
            end: ["20", "30"],
          },
          soiree: undefined,
        },
        seat: {
          monopoly: {
            class: "B",
            price: "4,000",
            status: SEAT_STATUS_OK,
          },
          other: [
            {
              class: "A",
              price: "9,000",
              status: SEAT_STATUS_FEW,
            },
            {
              class: "S",
              price: "14,000",
              status: SEAT_STATUS_NO,
            },
          ],
        },
      },
      {
        place: "博多座",
        prefecture: 39,
        date: {
          start: {
            y: 2023,
            m: 1,
            d: 1,
          },
          end: {
            y: 2023,
            m: 4,
            d: 10,
          },
        },
        time: {
          matinee: {
            start: ["13", "00"],
            end: ["15", "30"],
          },
          soiree: {
            start: ["17", "00"],
            end: ["20", "30"],
          },
        },
        seat: {
          monopoly: undefined,
          other: [
            {
              class: "A",
              price: "9,000",
              status: SEAT_STATUS_FEW,
            },
            {
              class: "S",
              price: "14,000",
              status: SEAT_STATUS_NO,
            },
          ],
        },
      },
    ],
  },
  {
    name: "しびれ雲",
    path: "shibiregumo",
    images: [],
    type: "straightPlay",
    genres: [1, 7],
    description:
      "作品の説明が入ります。どういうおもしろさがあるのかなとかそういうこと。大体このくらいまで文章を入れられます。長ければ文末が3点リーダに置き換わらないです。",
    youtube: ["S-t0DgrnzkA", "G4xFb3r0SRs"],
    casts: ["inoueyoshio"],
    schedule: [
      {
        place: "兵庫県立芸術文化センター 阪急中ホール",
        prefecture: 27,
        date: {
          start: {
            y: 2022,
            m: 1,
            d: 1,
          },
          end: {
            y: 2022,
            m: 4,
            d: 10,
          },
        },
        time: {
          matinee: undefined,
          soiree: {
            start: ["17", "00"],
            end: ["20", "30"],
          },
        },
        seat: {
          monopoly: {
            class: "B",
            price: "4,000",
            status: SEAT_STATUS_NO,
          },
          other: [
            {
              class: "A",
              price: "8,500",
              status: SEAT_STATUS_OK,
            },
            {
              class: "S",
              price: "13,000",
              status: SEAT_STATUS_FEW,
            },
          ],
        },
      },
    ],
  },
  {
    name: "Endless SHOCK",
    path: "endlessshock",
    images: [],
    type: "musical",
    genres: [1, 8],
    description:
      "作品の説明が入ります。どういうおもしろさがあるのかなとかそういうこと。大体このくらいまで文章を入れられます。長ければ文末が3点リーダに置き換わらないです。",
    youtube: ["boZsxp1aC_o", "Sl9QqiSHu7U"],
    casts: ["domotokoichi", "kitayamahiromitsu", "satoshori"],
    schedule: [
      {
        place: "梅田芸術劇場 メインホール",
        prefecture: 26,
        date: {
          start: {
            y: 2023,
            m: 1,
            d: 1,
          },
          end: {
            y: 2023,
            m: 4,
            d: 10,
          },
        },
        time: {
          matinee: {
            start: ["17", "00"],
            end: ["20", "30"],
          },
          soiree: undefined,
        },
        seat: {
          monopoly: undefined,
          other: [
            {
              class: "A",
              price: "8,500",
              status: SEAT_STATUS_FEW,
            },
            {
              class: "S",
              price: "13,000",
              status: SEAT_STATUS_NO,
            },
          ],
        },
      },
    ],
  },
];

export const prefectureArray: string[] = [
  "北海道",
  "青森",
  "岩手",
  "宮城",
  "秋田",
  "山形",
  "福島",
  "茨城",
  "栃木",
  "群馬",
  "埼玉",
  "千葉",
  "東京",
  "神奈川",
  "新潟",
  "富山",
  "石川",
  "福井",
  "山梨",
  "長野",
  "岐阜",
  "静岡",
  "愛知",
  "三重",
  "滋賀",
  "京都",
  "大阪",
  "兵庫",
  "奈良",
  "和歌山",
  "鳥取",
  "島根",
  "岡山",
  "広島",
  "山口",
  "徳島",
  "香川",
  "愛媛",
  "高知",
  "福岡",
  "佐賀",
  "長崎",
  "熊本",
  "大分",
  "宮崎",
  "鹿児島",
  "沖縄",
];

export const MOCK_CASTS_BASE: CastType[] = [
  {
    id: "inoueyoshio",
    name: "井上芳雄",
  },
  {
    id: "domotokoichi",
    name: "堂本光一",
  },
  {
    id: "hanafusamari",
    name: "花總まり",
  },
  {
    id: "manakireika",
    name: "愛希れいか",
  },
  {
    id: "yamazakiikusaburo",
    name: "山崎育三郎",
  },
  {
    id: "furukawayuta",
    name: "古川雄大",
  },
  {
    id: "kitayamahiromitsu",
    name: "北山宏光",
  },
  {
    id: "satoshori",
    name: "佐藤勝利",
  },
];

export const STAGE_GENRES: string[] = [
  "歴史",
  "現代",
  "近未来",
  "ミステリー",
  "シリアス",
  "ラブ",
  "革命",
  "ほのぼの",
  "成長",
  "スポーツ",
  "学園",
  "実写化",
];

export const STAGE_TYPES: Record<
  "musical" | "straightPlay" | "kabuki" | "rakugo",
  { label: string; color: string }
> = {
  musical: {
    label: "ミュージカル",
    color: "pink",
  },
  straightPlay: {
    label: "ストレートプレイ",
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
