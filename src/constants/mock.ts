import { ColumnType } from "src/types/column";
import { UserType } from "src/types/common";
import { StageType, CastType } from "src/types/stage";

export const MOCK_STAGES: StageType[] = [
  {
    id: 1,
    name: "ミュージカル『エリザベート』",
    path: "elisabeth",
    type: "musical",
    genres: ["歴史", "シリアス"],
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
        id: 1,
        place: "梅田芸術劇場 メインホール",
        prefecture: "大阪府",
        dateFrom: "2023-1-1",
        dateTo: "2023-4-10",
        time: {
          matinee: "17:00",
          soiree: undefined,
        },
        seat: {
          monopoly: {
            class: "B",
            price: 4000,
            status: "ok",
          },
          other: [
            {
              class: "A",
              price: 9000,
              status: "few",
            },
            {
              class: "S",
              price: 14000,
              status: "no",
            },
          ],
        },
      },
      {
        id: 2,
        place: "博多座",
        prefecture: "福岡県",
        dateFrom: "2023-1-1",
        dateTo: "2023-4-10",
        time: {
          matinee: "13:00",
          soiree: "17:00",
        },
        seat: {
          monopoly: undefined,
          other: [
            {
              class: "A",
              price: 9000,
              status: "few",
            },
            {
              class: "S",
              price: 14000,
              status: "no",
            },
          ],
        },
      },
    ],
  },
  {
    id: 2,
    name: "しびれ雲",
    path: "shibiregumo",
    type: "straightPlay",
    genres: ["現代", "ほのぼの"],
    description:
      "作品の説明が入ります。どういうおもしろさがあるのかなとかそういうこと。大体このくらいまで文章を入れられます。長ければ文末が3点リーダに置き換わらないです。",
    youtube: ["S-t0DgrnzkA", "G4xFb3r0SRs"],
    casts: ["inoueyoshio"],
    schedule: [
      {
        id: 1,
        place: "兵庫県立芸術文化センター 阪急中ホール",
        prefecture: "兵庫県",
        dateFrom: "2023-1-1",
        dateTo: "2023-4-10",
        time: {
          matinee: undefined,
          soiree: "17:00",
        },
        seat: {
          monopoly: {
            class: "B",
            price: 4000,
            status: "no",
          },
          other: [
            {
              class: "A",
              price: 8500,
              status: "ok",
            },
            {
              class: "S",
              price: 13000,
              status: "few",
            },
          ],
        },
      },
    ],
  },
  {
    id: 3,
    name: "Endless SHOCK",
    path: "endlessshock",
    type: "musical",
    genres: ["現代", "成長"],
    description:
      "作品の説明が入ります。どういうおもしろさがあるのかなとかそういうこと。大体このくらいまで文章を入れられます。長ければ文末が3点リーダに置き換わらないです。",
    youtube: ["boZsxp1aC_o", "Sl9QqiSHu7U"],
    casts: ["domotokoichi", "kitayamahiromitsu", "satoshori"],
    schedule: [
      {
        id: 1,
        place: "梅田芸術劇場 メインホール",
        prefecture: "大阪府",
        dateFrom: "2023-1-1",
        dateTo: "2023-4-10",
        time: {
          matinee: "17:00",
          soiree: undefined,
        },
        seat: {
          monopoly: undefined,
          other: [
            {
              class: "A",
              price: 8500,
              status: "few",
            },
            {
              class: "S",
              price: 13000,
              status: "no",
            },
          ],
        },
      },
    ],
  },
];

export const MOCK_CASTS: CastType[] = [
  {
    id: 1,
    name: "井上芳雄",
    path: "inoueyoshio",
    description:
      "井上 芳雄（いのうえ よしお、1979年〈昭和54年〉7月6日 - ）は、日本の俳優、歌手、声優。ミュージカルを中心に活動。身長182cm。グランアーツ所属。",
  },
  {
    id: 2,
    name: "堂本光一",
    path: "domotokoichi",
    description:
      "堂本 光一（どうもと こういち、1979年〈昭和54年〉1月1日 - ）は、日本のアイドル、シンガーソングライター、俳優、タレントであり、男性アイドルデュオ・KinKi Kpathsのメンバー。本名同じ。兵庫県芦屋市出身。SMILE-UP.（旧ジャニーズ事務所）所属。身長168cm。血液型はB型。",
  },
  {
    id: 3,
    name: "花總まり",
    path: "hanafusamari",
    description:
      "花總 まり（はなふさ まり、1973年2月28日 - ）は、日本の女優・歌手。元宝塚歌劇団宙組・雪組トップ娘役。東京都、日本女子大学附属高等学校出身。身長163㎝。血液型O型。愛称は「ハナ」。所属事務所はブルーミングエージェンシー。",
  },
  {
    id: 4,
    name: "愛希れいか",
    path: "manakireika",
    description:
      "愛希 れいか（まなき れいか、1991年8月21日 - ）は、日本の女優。元宝塚歌劇団月組トップ娘役。福井県坂井市、坂井中学校出身。身長167cm。血液型A型。愛称は「ちゃぴ」。所属事務所はアミューズ。",
  },
  {
    id: 5,
    name: "山崎育三郎",
    path: "yamazakiikusaburo",
    description:
      "山崎 育三郎（やまざき いくさぶろう、1986年〈昭和61年〉1月18日 - ）は、日本のミュージカル俳優、俳優、歌手、司会者、StarS・IMYのメンバー。愛称は「いっくん」。東京都出身。研音所属。妻は元モーニング娘。の初期メンバーで、歌手・タレントの安倍なつみ。義妹は元タレントの安倍麻美。「ミュージカル界のプリンス」と呼ばれている。",
  },
  {
    id: 6,
    name: "古川雄大",
    path: "furukawayuta",
    description:
      "古川 雄大（ふるかわ ゆうた、1987年〈昭和62年〉7月9日 - ）は、日本の俳優、歌手。長野県上高井郡高山村出身。所属事務所は研音、所属レコード会社はシンコーミュージック・レコーズ。",
  },
  {
    id: 7,
    name: "北山宏光",
    path: "kitayamahiromitsu",
    description: "カス",
  },
  {
    id: 8,
    name: "佐藤勝利",
    path: "satoshori",
    description:
      "佐藤 勝利（さとう しょうり、1996年〈平成8年〉10月30日 - ）は、日本の歌手、俳優、タレント。男性アイドルグループ・Sexy Zoneのメンバー。東京都出身。SMILE-UP.（旧ジャニーズ事務所）所属。",
  },
];

export const MOCK_COLUMNS: ColumnType[] = [
  {
    id: 1,
    path: "elisabeth",
    title: "『エリザベート』が愛される理由　4年ぶりのトート役（井上芳雄）",
    date: "2023-1-20",
    genres: ["作品解説"],
    text: "井上芳雄です。1月11日から福岡・博多座でミュージカル『エリザベート』に出演しています。黄泉（よみ）の帝王トート役を演じるのは4年ぶり。東京、名古屋、大阪、福岡と4都市での公演ですが、僕は福岡公演のみに出演。稽古期間が短くて大変でしたが、始まってみれば、これまでとまた違うトートになっているのが面白いと感じています。この役はもう何回も演じていますが、そのたびに発見があります。それは『エリザベート』という作品の大きな魅力でもあります。\n\n　『エリザベート』の公演の前、昨年末の大みそかは年越しのお笑い番組『笑って年越し！ 世代対決 昭和芸人 vs 平成・令和芸人』（日本テレビ系）に審査員として出演しました。12月31日の17時～24時30分まで7時間半の生放送です。東野幸治さんとナインティナインさんがMCで、出川哲朗さんと後藤輝基さんが率いる昭和芸人チームと、かまいたちさんが率いる平成・令和芸人チームがネタバトルを繰り広げました。\n\n　お笑いの番組の審査員をやるのは初めて。生放送で7時間半という長さに驚いたし、ずっとスタジオにいて、気がついたら年を越していたのも不思議な感じでした。なにより圧倒されたのが芸人さんたちのバイタリティー。売れている方は年末年始テレビに出ずっぱりだと思うので、そのタフさはすごいです。 \n\n　お笑いは、ライブとかは行ったことがなくて、番組で一緒になった方のネタを拝見するくらいでしたが、基本的に笑いは好きなので、楽しく見させていただきました。昭和の大御所といわれる人たちの漫才は、普段なかなか見る機会がないので、今の笑いと違う独特の面白さ。テンポもゆっくりで、頭をはたいたり、身体的な特徴をネタにしたりする点にも昭和を感じました。一方、今の芸人さんは、同じ時間でも笑いの数というかネタが多くて、息をつかせずにどんどん畳み掛けます。一口にお笑いと言っても、漫才もコントもあるし、しゃべりで笑わせるものもあれば、シュールなドラマで最後にドキッとさせるものもあって、バリエーションが豊富でしたね。\n\n　審査員としては、自分の感覚に忠実に、真剣に勝敗をつけました。結果として、勝った方への投票が多かったと思うので、そう外してなかったんじゃないかな。コメントも最初は、笑いの数が多かったとかネタの勢いが、と言っていたのですが、途中から専門家じゃないのでガチで言わなくていいんだと思い、後半は自分なりの笑いが取れるようにと心がけました。いつコメントを求められてもいいように準備していたので、長時間にわたって集中力が必要でしたけど、いい経験になりました。司会の東野さんは『行列のできる相談所』（日本テレビ系）でご一緒しているので、安心して審査できました。\n\n　その『行列～』には、MCを含めて昨年ずっと出ていたので、僕のことを知らない人の中でしゃべることには慣れてきたように思います。実は大みそかの数日前、12月27日に帝国ホテルで「イヤーエンド ランチ＆ディナーショー」がありました。お客さまは、僕のことをよく知っていて、歌とトークを聞くために来てくださった方なので、僕にとってはホームといえる場所です。そこでしゃべったときに、「あれ、どういうテイストの感じで話せばいいんだっけ」と、一瞬戸惑いました。それくらい昨年は、僕のことを知らない人の中で話す機会が多かったのです。久しぶりのホームで「ここは自分のことだけをしゃべってよくて、お客さまに甘えていいところなんだ」と思えたのは、逆に新鮮でした。\n\n　そんなアウェーでのトークが多かった昨年の締めくくりが審査員でしたが、大みそかにテレビの生放送に出たのも初めてです。年末年始は休みたいという気持ちがありつつも、メディアに出られたのは喜ばしくもありました。演劇は年越しの公演はあまりないし、元日も基本的には休みます。そういうときにテレビに出してもらうと、止まらずに仕事をやれている感じがして、芸能の世界に身を置く者としては光栄なことです。",
  },
  {
    id: 2,
    path: "shibiregumo",
    title: "KERAさん新作『しびれ雲』で感じる幸せな日々（井上芳雄）",
    date: "2023-12-9",
    genres: ["作品解説", "レポ"],
    text: "井上芳雄です。11、12月はストレートプレイ（セリフだけの演劇）の『しびれ雲』に出演しています。KERAさんことケラリーノ・サンドロヴィッチさんが作・演出の新作です。11月12日から12月4日まで東京・下北沢の本多劇場で公演して、12月は兵庫、北九州、新潟と地方公演が続きます。開幕が新型コロナウイルス感染症の影響で1週間ほど遅れて、稽古は大変ではありましたが、幕が開くとさすがKERAさんだと思わされる素晴らしい作品で、カンパニーの雰囲気もよく、お芝居をする喜びを全身で感じている日々です。\n\n　『しびれ雲』の舞台は、海に囲まれた、3つの村からなる孤島「梟（ふくろう）島」。時代は昭和10（1935）年ごろ。海辺近くにある、いくつかの家のひとつ石持家では、次男である国男の七回忌の法事を前に、未亡人の波子（緒川たまきさん）、波子の妹の千夏（ともさかりえさん）らが慌ただしくしています。そんなとき、ケガをして倒れている男が見つかります。千夏と夫の文吉（萩原聖人さん）は、男を法事が行われている波子の家に連れて行くのですが、彼は記憶を失っており、波子にある名前をつけられます…。その男を僕が演じています。\n\n　そんなふうに物語が始まり、島に住む人たちの人間模様が描かれます。派手な事件が起こるわけではなく、日常を描いているのですが、次々と場面が変わり、どうなるんだろうと思う出来事がどんどん起こって、KERAさんらしい笑いもしっかりまぶされています。\n\n　タイトルの「しびれ雲」とは不思議な形をした架空の雲で、島にはしびれ雲が浮かぶと、その日を境に潮目が変わるという言い伝えがあります。男の人生も、しびれ雲をきっかけに変わります。KERAさんから説明されたわけではないですが、僕なりに解釈すると、大きな出来事が起こっていないように見える日常の中にも大事な変化ははっきりとあって、誰にもそんな瞬間が訪れるということの象徴なのかなと。KERAさんの作劇がうまいのは、そういう大切なポイントを、いっぱい出てくる笑いの中にさりげなく潜ませていることで、そこはやっぱりすごい才能だなと感心します。\n\n　上演時間は休憩を入れて3時間半。KERAさんご自身、「この物語には、この長さが必要なのだ」とおっしゃっていました。出演者14人の群像劇で、それぞれにエピソードがあり、一人一人が舞台上でちゃんと生きているように描かれているので、KERAさんの愛情が伝わってきます。それぞれの役は、演じる役者さんを想定して書かれた「当て書き」です。KERAさんは稽古をしながら脚本をつくっていくやり方なので、KERAさんが役者さんをどう見ているのかを役柄から想像する楽しみ方もできます。\n\n　僕が演じる男は記憶喪失。本人に関する情報がないから、脚本がまだ完成していない稽古始めのころは、役作りもやりようがありませんでした。脚本が上がると、こんなに優しくて、素直で、人の言うことを信じていていいのかというくらい、まっすぐで純粋な人でした。自分の中にない要素はなかったので、無理なく演じられています。キャストは初めてご一緒する方も多いので、僕と今回の役をイコールで見ているところもあるのかなと思うくらいです。\n\n　KERAさんからは、ある場面では「状況をお客さんに分かってもらわなきゃとか、この言葉を立てないと、みたいなことは考えなくていいし、もっと小さい声でやってもいいよ。絶対伝わるから」と言われました。そこでは、今まで出したことのないくらい小さい声でセリフを言っています。客席が400に満たない本多劇場のサイズにあわせてのことではありますが、今回は表現を大きくする演技とは無縁な感じでやらせてもらっています。\n\n　公演を見た方からは、この役が僕の演劇界での立ち位置と似ていて面白かったという感想をいただきました。確かに、ミュージカル界という違う畑から小劇場に来て、最初は「誰なんだ？ この人は」とお互いに素性が分からないところから共演者と知り合い、溶け込んでいっているところがあります。少なくともKERAさんにはそう見えているのかなと思いました。だとしたら、すごくうれしいことです。僕自身、多少の異邦人感は否めませんが、決して敵だとか脅かそうともしていないし、むしろみんなと仲良くしたい、一緒にいい毎日を送りたいと思って毎回演じています。それが役を通して伝わっているのなら喜ばしいし、当て書きで新作をつくってもらう喜びでもあります。",
  },
];

export const MOCK_USER: UserType = {
  prefecture: "大阪府",
  doneStamps: 3,
  tickets: [
    {
      stageId: "elisabeth",
      scheduleId: 2,
      date: "2023-1-28",
      time: "13:00",
      isCompleted: true,
    },
    {
      stageId: "endlessshock",
      scheduleId: 1,

    date: "2023-1-28",
      time: "13:00",
      isCompleted: false,
    },
    {
      stageId: "shibiregumo",
      scheduleId: 1,
      date: "2023-1-28",
      time: "13:00",
      isCompleted: false,
    },
  ],
  favoriteStages: ["elisabeth", "endlessshock"],
  recentCasts: ["domotokoichi", "inoueyoshio"],
};
