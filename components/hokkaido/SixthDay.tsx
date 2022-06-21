import {DayFlex} from "../organisms/DayFlex";

export const SixthDay = () => {
  return (
    <>
    <DayFlex 
      time={"10:00～"}
      title={"網走観光"}
      list={Array<string>("")}
      type=""/>
    <DayFlex 
      time={"16:00～"}
      title={"網走駅⇒女満別空港"}
      list={Array<string>("")}
      type="train"/>
    <DayFlex 
      time={"19:10～21:05"}
      title={"女満別空港⇒羽田空港"}
      list={Array<string>("飛行機⇒1時間55分くらい")}
      type="plane"/>
    </>
  )
}