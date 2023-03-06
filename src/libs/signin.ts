import { signinGuidanceTextType } from 'src/types/signin';

export const loginState: boolean = true;

export const signinGuidanceText: signinGuidanceTextType[] = [
  {
    path: 'column',
    heading: '演劇のコラムやニュースは\nログインして手軽にチェック！',
    text: 'コラムやニュースをサクサク読んで、作品のアウトラインを掴んでみましょう。観劇が100倍楽しいものになること間違いなし！',
  },
  {
    path: 'ticket',
    heading: 'ログインして、興味がある公演の\nチケットを購入してみよう！',
    text: 'あなたと演劇は一期一会。「面白そう！」の気持ちに任せて、思い切って飛び込んでみましょう。さらなる作品に出会えるかも！',
  },
  {
    path: 'fav',
    heading: '興味がある公演は、ログインして\n『気になる』しておこう！',
    text: '興味はあるけど、他の公演とも迷う…そんな時は『気になる』機能を使って作品をピンしましょう。目移りも楽しいものですね！',
  },
];

export const stageGenreArray: string[][] = [
  ['ミュージカル', 'お芝居'],
  // 'メジャー作品',
  // 'マイナー作品',
  ['歴史', '現代', '近未来'],
  [
    'シリアス',
    'ラブ',
    'ミステリー',
    '革命',
    'ほのぼの',
    '成長',
    '学園',
    'スポーツ',
    '実写化',
  ],
  // '群像劇',
  // '一人芝居',
];

let type: { text: string; color: string; index: number }[] = [];
const setTypeArray = () => {
  let colorArray = ['primary', 'pink', 'green', 'yellow'];
  for (let i = 0; i < stageGenreArray[0].length; i++) {
    type.push({ text: stageGenreArray[0][i], color: colorArray[i], index: i });
  }
};
setTypeArray();
export const typeArray = type;
