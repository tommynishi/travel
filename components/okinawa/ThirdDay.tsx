import {DayFlex} from "../organisms/DayFlex";

export const ThirdDay = () => {
  return (
    <>
    <DayFlex 
      time={"10:00～"}
      title={"竹富島⇒石垣島"}
      list={Array<string>("フェリー")}
      type="ship"/>
    <DayFlex 
      time={"12:00～"}
      title={"石垣島⇒西表島（上島港）"}
      list={Array<string>("フェリー")}
      type="ship"/>
    <DayFlex 
      time={"13:00～"}
      title={"西表島観光"}
      list={Array<string>("")}
      type=""/>
    <DayFlex 
      time={"18:00～"}
      title={"ホテル"}
      list={Array<string>("星野リゾート 西表島")}
      type="hotel"/>
    </>
  )
}