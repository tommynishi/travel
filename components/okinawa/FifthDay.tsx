import {DayFlex} from "../organisms/DayFlex";

export const FifthDay = () => {
  return (
    <>
    <DayFlex 
      time={"8:30～"}
      title={"西表島（大原港）⇒波照間島"}
      list={Array<string>("80分くらい")}
      type="ship"/>
    <DayFlex 
      time={"12:00～16:00"}
      title={"波照間島観光"}
      list={Array<string>("")}
      type="ship"/>
    <DayFlex 
      time={"16:30～18:00"}
      title={"波照間島⇒石垣島"}
      list={Array<string>("フェリー")}
      type="ship"/>
    <DayFlex 
      time={"18:30～"}
      title={"ホテル"}
      list={Array<string>("アートホテル")}
      type="hotel"/>
   </>
  )
}