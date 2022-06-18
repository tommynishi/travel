import {DayFlex} from "../organisms/DayFlex";

export const ThirdDay = () => {
  return (
    <>
    <DayFlex 
      time={"10:00～"}
      item={Array<string>("ユアウェディング")}
      list={Array<string>("手続き")}/>
    <DayFlex 
      time={"12:00～"}
      item={Array<string>("昼食")}
      list={Array<string>("ジンギスカン")}/>
    <DayFlex 
      time={"13:00～"}
      item={Array<string>("札幌観光")}
      list={Array<string>("白い恋人パーク", "すすきの")}/>
    <DayFlex 
      time={"20:00～"}
      item={Array<string>("ホテル(2泊目)")}
      list={Array<string>("JRイン　札幌駅前")}/>
    </>
  )
}