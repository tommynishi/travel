import {DayFlex} from "../organisms/DayFlex";

export const SixthDay = () => {
  return (
    <>
    <DayFlex 
      time={"10:00～"}
      title={"石垣島観光"}
      list={Array<string>("")}
      type=""/>
    <DayFlex 
      time={"18:30～"}
      title={"ホテル"}
      list={Array<string>("グランヴィリオリゾート石垣島")}
      type="hotel"/>
    </>
  )
}