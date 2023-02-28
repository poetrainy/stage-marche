import { signinGuidanceTextType } from 'src/types/signin';

export const loginState: boolean = false;

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
    heading: '興味がある公演は、ログインして\n「気になる」しておこう！',
    text: '興味はあるけど、他の公演とも迷う…そんな時は「気になる」機能を使って作品をピンしましょう。目移りも楽しいものですね！',
  },
];

// export const signinEnqueteText = [
//   {
//     path: 'genre',
//     heading: '好きな映画・ドラマ・小説の\nジャンルはなんですか？',
//     text: 'コラムやニュースをサクサク読んで、作品のアウトラインを掴んでみましょう。観劇が100倍楽しいものになること間違いなし！',
//   },
//   {
//     path: 'prefecture',
//     heading: 'お住まいの都道府県は\nどこですか？',
//     text: 'あなたと演劇は一期一会。「面白そう！」の気持ちに任せて、思い切って飛び込んでみましょう。さらなる作品に出会えるかも！',
//   },
//   {
//     path: 'complete',
//     heading: 'おめでとう！🎉\n登録が完了しました！',
//     text: '興味はあるけど、他の公演とも迷う…そんな時は「気になる」機能を使って作品をピンしましょう。目移りも楽しいものですね！',
//   },
// ];
