import {DayFlex} from "../organisms/DayFlex";

export const FourthDay = () => {
  return (
    <>
    <DayFlex 
      time={"10:00～"}
      title={"ユアウェディング 撮影"}
      list={Array<string>("富良野", "美瑛")}
      type=""/>
    <DayFlex 
      time={"19:00～"}
      title={"夕食"}
      list={Array<string>("トリトン回転寿司")}
      type=""/>
    <DayFlex 
      time={"20:00～"}
      title={"ホテル(3泊目)"}
      list={Array<string>("JRイン　札幌駅前")}
      type="hotel"/>

    </>
  )
}