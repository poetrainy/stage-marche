import { SignInGuidancePageType } from "src/types/signIn";

export const SIGN_IN_GUIDANCE_PAGES: SignInGuidancePageType[] = [
  {
    path: "column",
    heading: "演劇のコラムやニュースは\nログインして手軽にチェック！",
    text: "コラムやニュースをサクサク読んで、作品のアウトラインを掴んでみましょう。観劇が100倍楽しいものになること間違いなし！",
  },
  {
    path: "ticket",
    heading: "ログインして、興味がある公演の\nチケットを購入してみよう！",
    text: "あなたと演劇は一期一会。「面白そう！」の気持ちに任せて、思い切って飛び込んでみましょう。さらなる作品に出会えるかも！",
  },
  {
    path: "fav",
    heading: "興味がある公演は、ログインして\n『気になる』しておこう！",
    text: "興味はあるけど、他の公演とも迷う…そんな時は『気になる』機能を使って作品をピンしましょう。目移りも楽しいものですね！",
  },
];
