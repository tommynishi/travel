import {DayFlex} from "../organisms/DayFlex";

export const FirstDay = () => {
  return (
    <>
    <DayFlex 
      time={"8:00～"}
      item={Array<string>("与野⇒函館","12:00着予定")}
      list={Array<string>("駅弁", " 写真")}
      type={"shinkansen"}/>
    <DayFlex 
      time={"12:00～"}
      item={Array<string>("函館観光")}
      list={Array<string>("昼食：函館市場で海鮮", "函館牛乳アイス", "五稜郭")}
      type=""/>
    <DayFlex 
      time={"19:00～"}
      item={Array<string>("ホテル")}
      list={Array<string>("シェラトン　函館駅前")}
      type="hotel"/>
    </>
  )
}