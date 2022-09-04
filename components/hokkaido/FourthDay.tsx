import {DayFlex} from "../organisms/DayFlex";
import { UrlList } from "../organisms/UrlList";
import { LinkList } from "../type/type";

export const FourthDay = () => {
  return (
    <>
    <DayFlex 
      time={"8:00～"}
      title={"朝食"}
      list={Array<string>("自由に")}
      type=""/>
    <DayFlex 
      time={"10:00～"}
      title={"ユアウェディング 撮影"}
      list={Array<string>("富良野", "美瑛")}
      type=""/>
     <DayFlex 
      time={"未定"}
      title={"～富良野観光～"}
      list={Array<string>("フェルムラ・テール美瑛　本店")}
      type=""/>
     <DayFlex 
      time={"未定"}
      title={"～富良野観光～"}
      list={Array<string>("六花亭", "徒歩圏内")}
      type=""/>
     <DayFlex 
      time={"未定"}
      title={"～富良野観光～"}
      list={Array<string>("狸小路商店街", "じゃがバター")}
      type=""/>
    <DayFlex 
      time={"19:00～"}
      title={"夕食"}
      list={Array<string>("トリトン回転寿司")}
      type=""/>
    <DayFlex 
      time={"20:00～"}
      title={"ホテル(3泊目)"}
      list={Array<string>("JRイン　札幌駅前")}
      type="hotel"/>
    <UrlList
      urlList={
        Array<LinkList>(
          {"url":"https://www.laterre.com/fermebiei/", "disp":"フェルムラ・テール美瑛　本店"},
          {"url":"https://www.rokkatei.co.jp/", "disp":"六花亭"},
          {"url":"https://tanukikoji.or.jp/", "disp":"狸小路商店街"},
          {"url":"http://toriton-kita1.jp/", "disp":"トリトン回転寿司"})
      }/>
    </>
  )
}