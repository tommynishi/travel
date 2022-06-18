import {DayFlex} from "../organisms/DayFlex";

export const FifthDay = () => {
  return (
    <>
    <DayFlex 
      time={"8:00～8:40"}
      item={Array<string>("札幌⇒女満別", "札幌⇒新千歳空港")}
      list={Array<string>("JRで40分くらい")}/>
    <DayFlex 
      time={"9:35～10:20"}
      item={Array<string>("札幌⇒女満別", "新千歳空港⇒女満別空港")}
      list={Array<string>("飛行機 45分くらい")}/>
    <DayFlex 
      time={"10:40～11:10"}
      item={Array<string>("女満別空港⇒網走監獄")}
      list={Array<string>("バス⇒天都山入口 11:00くらい", "徒歩⇒網走監獄 10分くらい")}/>
    <DayFlex 
      time={"11:10～"}
      item={Array<string>("網走観光")}
      list={Array<string>("網走監獄", "オホーツク流氷館")}/>
    <DayFlex 
      time={"15:30～"}
      item={Array<string>("網走監獄⇒ホテル")}
      list={Array<string>("天都山入口⇒網走バスタ")}/>
    <DayFlex 
      time={"19:00～"}
      item={Array<string>("夕食")}
      list={Array<string>("")}/>
    <DayFlex 
      time={"20:00～"}
      item={Array<string>("ホテル")}
      list={Array<string>("東横イン網走駅前")}/>
    </>
  )
}