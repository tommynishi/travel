import Image from "next/image";
import { DayFlex } from "../organisms/DayFlex";
import { UrlList } from "../organisms/UrlList";
import { LinkList } from "../type/type";

export const FirstDay = () => {
  return (
    <>
    <DayFlex 
      time={"5:30～6:45"}
      title={"与野⇒羽田"}
      list={Array<string>("")}
      type={"train"}/>
    <DayFlex 
      time={"7:30～10:10"}
      title={"羽田⇒那覇（沖縄）"}
      list={Array<string>("")}
      type="plain"/>
    <DayFlex 
      time={"10:30～10:50"}
      title={"那覇⇒県庁前"}
      list={Array<string>("バスで移動")}
      type="bus"/>
    <DayFlex 
      time={"11:00～"}
      title={"シーサー絵付け体験"}
      list={Array<string>("40分くらい")}
      type="activity"/>

    プランA
    <DayFlex 
      time={"12:23～12:52"}
      title={"県庁北口⇒第一牧港"}
      list={Array<string>("電車で移動")}
      type="train"/>
    <DayFlex 
      time={"13:00～"}
      title={"ブルーシールアイスパーク"}
      list={Array<string>("")}
      type="activity"/>
    <DayFlex 
      time={"14:30～"}
      title={"那覇⇒県庁前"}
      list={Array<string>("バスで移動")}
      type="bus"/>

OR<br/>
プランB
    <DayFlex 
      time={"12:23～12:52"}
      title={"県庁北口⇒第一牧港"}
      list={Array<string>("電車で移動")}
      type="train"/>
    <DayFlex 
      time={"13:00～"}
      title={"ブルーシールアイスパーク"}
      list={Array<string>("")}
      type="activity"/>
    <DayFlex 
      time={"14:30～"}
      title={"那覇⇒県庁前"}
      list={Array<string>("バスで移動")}
      type="bus"/>
    <UrlList
      urlList={
        Array<LinkList>(
          {"url":"https://www.marriott.co.jp/hotels/travel/hkdfp-four-points-hakodate/", "disp":"シェラトン 函館駅前"},
          {"url": "https://www.visit-hokkaido.jp/spot/detail_10034.html", "disp": "五稜郭公園"},
          {"url":"https://uu-hokkaido.jp/corporate/buy/hakodate/hakodate-asaichi.shtml", "disp":"函館朝市"})
      }/>
    </>
  )
}