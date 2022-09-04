import {DayFlex} from "../organisms/DayFlex";
import { UrlList } from "../organisms/UrlList";
import { LinkList } from "../type/type";

export const SecondDay = () => {
  return (
    <>
    <DayFlex 
      time={"6:00～"}
      title={"函館市場"}
      list={Array<string>("朝食もここで", "・海鮮丼", "・イカ釣り", "・他にもいろいろある")}
      type=""/>
    <DayFlex 
      time={"9:00～12:49"}
      title={"函館⇒札幌"}
      list={Array<string>("駅弁", "函館市場で買った弁当でも")}
      type="shinkansen"/>
    <DayFlex 
      time={"12:49～"}
      title={"札幌観光"}
      list={Array<string>("中央卸売市場場外市場")}
      type=""/>
    <DayFlex 
      time={"12:49～"}
      title={"札幌観光"}
      list={Array<string>("ロイズ", "ロイズタウン駅", "札幌から30分（学園都市線）")}
      type=""/>
    <DayFlex 
      time={"12:49～"}
      title={"札幌観光"}
      list={Array<string>("支笏湖", "札幌から往復で3時間かかるけど・・・")}
      type=""/>
    <DayFlex 
      time={"19:00～"}
      title={"夕食"}
      list={Array<string>("ラーメン", "桑名ラーメン")}
      type=""/>
    <DayFlex 
      time={"20:00～"}
      title={"ホテル"}
      list={Array<string>("JRイン　札幌駅前")}
      type="hotel"/>
    <UrlList
      urlList={
        Array<LinkList>(
          {"url":"https://uu-hokkaido.jp/corporate/buy/hakodate/hakodate-asaichi.shtml", "disp":"函館朝市"},
          {"url":"https://www.jyogaishijyo.com/", "disp":"中央卸売市場場外市場"},
          {"url":"https://www.royce.com/brand/shop/detail/?no=108", "disp":"ロイズ"},
          {"url":"https://lake-shikotsu.jp/", "disp":"支笏湖"},
          {"url":"https://www.jr-inn.jp/sapporo/", "disp":"JRイン 札幌駅前"})
      }/>
    </>
    
  )
  
}