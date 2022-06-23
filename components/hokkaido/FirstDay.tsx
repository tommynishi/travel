import Image from "next/image";
import { DayFlex } from "../organisms/DayFlex";
import { UrlList } from "../organisms/UrlList";
import { LinkList } from "../type/type";

export const FirstDay = () => {
  return (
    <>
    <DayFlex 
      time={"8:00～"}
      title={"与野⇒函館"}
      list={Array<string>("駅弁")}
      type={"shinkansen"}/>
    <DayFlex 
      time={"12:00～"}
      title={"～函館観光～"}
      list={Array<string>(
              "昼食：函館市場で海鮮",
              "フード：函館牛乳アイス",
              "スポット：五稜郭")}
      type=""/>
    <DayFlex 
      time={"19:00～"}
      title={"ホテル"}
      list={Array<string>("シェラトン　函館駅前")}
      type="hotel"/>
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