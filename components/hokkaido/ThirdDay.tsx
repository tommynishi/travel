import {DayFlex} from "../organisms/DayFlex";
import { UrlList } from "../organisms/UrlList";
import { LinkList } from "../type/type";

export const ThirdDay = () => {
  return (
    <>
    <DayFlex 
      time={"8:00～"}
      title={"朝食"}
      list={Array<string>("自由に")}
      type=""/>
    <DayFlex 
      time={"11:00～13:00"}
      title={"ユアウェディング"}
      list={Array<string>("手続き")}
      type=""/>
    <DayFlex 
      time={"13:00～"}
      title={"昼食"}
      list={Array<string>("自由に")}
      type=""/>
    <DayFlex 
      time={"15:00～"}
      title={"札幌観光"}
      list={Array<string>("白い恋人パーク", "15:40から体験予約")}
      type=""/>
    <DayFlex 
      time={"19:00～"}
      title={"夕食"}
      list={Array<string>("ジンギスカン")}
      type=""/>
    <DayFlex 
      time={"20:00～"}
      title={"ホテル(2泊目)"}
      list={Array<string>("JRイン　札幌駅前")}
      type="hotel"/>
    <UrlList
      urlList={
        Array<LinkList>(
          {"url":"https://www.shiroikoibitopark.jp/", "disp":"白い恋人パーク"},
          {"url":"https://www.shiroikoibitopark.jp/facility/dream-kitchen.html", "disp":"白い恋人パーク　スイーツワークショップ・ドリームキッチン"})
      }/>
    </>
  )
}