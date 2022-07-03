import {DayFlex} from "../organisms/DayFlex";

export const FourthDay = () => {
  return (
    <>
    <DayFlex 
      time={"9:30～"}
      title={"西表島　アクティビティ"}
      list={Array<string>("SAP", "ボート")}
      type="activity"/>
    <DayFlex 
      time={"18:00～"}
      title={"ホテル（2泊目）"}
      list={Array<string>("星野リゾート 石垣島")}
      type="hotel"/>
    </>
  )
}