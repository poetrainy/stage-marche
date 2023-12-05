import { SignInGuidancePageType } from "src/types/signIn";

import SvgImageColumn from "src/assets/svg/guidance_column.svg";
import SvgImageTicket from "src/assets/svg/guidance_ticket.svg";
import SvgImageFav from "src/assets/svg/guidance_fav.svg";

export const SIGN_IN_GUIDANCE_PAGES: SignInGuidancePageType = {
  column: {
    path: SvgImageColumn,
    heading: "演劇のコラムやニュースは\nログインして手軽にチェック！",
    text: "コラムやニュースをサクサク読んで、作品のアウトラインを掴んでみましょう。観劇が100倍楽しいものになること間違いなし！",
  },
  ticket: {
    path: SvgImageTicket,
    heading: "ログインして、興味がある公演の\nチケットを購入してみよう！",
    text: "あなたと演劇は一期一会。「面白そう！」の気持ちに任せて、思い切って飛び込んでみましょう。さらなる作品に出会えるかも！",
  },
  fav: {
    path: SvgImageFav,
    heading: "興味がある公演は、ログインして\n『気になる』しておこう！",
    text: "興味はあるけど、他の公演とも迷う…そんな時は『気になる』機能を使って作品をピンしましょう。目移りも楽しいものですね！",
  },
};
