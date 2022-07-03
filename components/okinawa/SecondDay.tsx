import {DayFlex} from "../organisms/DayFlex";

export const SecondDay = () => {
  return (
    <>
    <DayFlex 
      time={"7:30～8:30"}
      title={"那覇空港⇒石垣空港"}
      list={Array<string>("")}
      type="plain"/>
    <DayFlex 
      time={"8:30～9:15"}
      title={"石垣島観光"}
      list={Array<string>("朝食とか", "フェリーまで時間つぶし")}
      type=""/>
    <DayFlex 
      time={"9:15～"}
      title={"石垣島⇒竹富島"}
      list={Array<string>("フェリー")}
      type="ship"/>
    <DayFlex 
      time={"11:00～"}
      title={"竹富島観光"}
      list={Array<string>("水牛")}
      type="ship"/>
    <DayFlex 
      time={"19：00～"}
      title={"ホテル"}
      list={Array<string>("ホテルピースアイランド")}
      type="hotel"/>
    </>
  )
}