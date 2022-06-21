import {DayFlex} from "../organisms/DayFlex";

export const ThirdDay = () => {
  return (
    <>
    <DayFlex 
      time={"10:00～"}
      title={"ユアウェディング"}
      list={Array<string>("手続き")}
      type=""/>
    <DayFlex 
      time={"12:00～"}
      title={"昼食"}
      list={Array<string>("ジンギスカン")}
      type=""/>
    <DayFlex 
      time={"13:00～"}
      title={"札幌観光"}
      list={Array<string>("白い恋人パーク", "すすきの")}
      type=""/>
    <DayFlex 
      time={"20:00～"}
      title={"ホテル(2泊目)"}
      list={Array<string>("JRイン　札幌駅前")}
      type="hotel"/>
    </>
  )
}