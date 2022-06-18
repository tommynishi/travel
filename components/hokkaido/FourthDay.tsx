import {DayFlex} from "../organisms/DayFlex";

export const FourthDay = () => {
  return (
    <>
    <DayFlex 
      time={"10:00～"}
      item={Array<string>("ユアウェディング", "撮影")}
      list={Array<string>("富良野", "美瑛")}/>
    <DayFlex 
      time={"19:00～"}
      item={Array<string>("夕食")}
      list={Array<string>("トリトン回転寿司")}/>
    <DayFlex 
      time={"20:00～"}
      item={Array<string>("ホテル(3泊目)")}
      list={Array<string>("JRイン　札幌駅前")}/>

    </>
  )
}