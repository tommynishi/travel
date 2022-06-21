import {DayFlex} from "../organisms/DayFlex";

export const FifthDay = () => {
  return (
    <>
    <DayFlex 
      time={"8:00～8:40"}
      title={"札幌⇒女満別 札幌⇒新千歳空港"}
      list={Array<string>("JRで40分くらい")}
      type="train"/>
    <DayFlex 
      time={"9:35～10:20"}
      title={"札幌⇒女満別 新千歳空港⇒女満別空港"}
      list={Array<string>("飛行機 45分くらい")}
      type="plane"/>
    <DayFlex 
      time={"10:40～11:10"}
      title={"女満別空港⇒網走監獄"}
      list={Array<string>("バス⇒天都山入口 11:00くらい", "徒歩⇒網走監獄 10分くらい")}
      type="bus"/>
    <DayFlex 
      time={"11:10～"}
      title={"網走観光"}
      list={Array<string>("網走監獄", "オホーツク流氷館")}
      type=""/>
    <DayFlex 
      time={"15:30～"}
      title={"網走監獄⇒ホテル"}
      list={Array<string>("天都山入口⇒網走バスタ")}
      type="bus"/>
    <DayFlex 
      time={"19:00～"}
      title={"夕食"}
      list={Array<string>("")}
      type=""/>
    <DayFlex 
      time={"20:00～"}
      title={"ホテル"}
      list={Array<string>("東横イン網走駅前")}
      type="hotel"/>
    </>
  )
}