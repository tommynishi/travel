import Image from "next/image";
import { DayFlex } from "../organisms/DayFlex";
import { UrlList } from "../organisms/UrlList";
import { LinkList } from "../type/type";

export const FirstDay = () => {
  return (
    <>
    <DayFlex 
      time={"8:28～12:17"}
      title={"与野⇒新函館北斗"}
      list={Array<string>("駅弁買う")}
      type={"shinkansen"}/>
    <DayFlex 
      time={"12:17～"}
      title={"～函館観光～"}
      list={Array<string>(
              "赤レンガ倉庫")}
      type=""/>
    <DayFlex 
      time={""}
      title={"～函館観光～"}
      list={Array<string>(
              "函館牛乳アイス")}
      type=""/>
    <DayFlex 
      time={"～19:00"}
      title={"～函館観光～"}
      list={Array<string>(
              "五稜郭の夜景",
              "※御朱印忘れないように")}
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
          {"url": "https://www.visit-hokkaido.jp/spot/detail_10034.html", "disp": "五稜郭公園"})
      }/>
    </>
  )
}