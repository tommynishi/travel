import {DayFlex} from "../organisms/DayFlex";

export const SecondDay = () => {
  return (
    <>
    <DayFlex 
      time={"12:00～"}
      title={"函館⇒札幌"}
      list={Array<string>("駅弁", " 写真")}
      type="shinkansen"/>
    <DayFlex 
      time={"13:00～"}
      title={"札幌"}
      list={Array<string>("支笏湖（遊覧船、SUP）", "中央卸売市場場外市場", "ロイズ")}
      type=""/>
    <DayFlex 
      time={"19:00～"}
      title={"夕食"}
      list={Array<string>("ラーメン")}
      type=""/>
    <DayFlex 
      time={"20:00～"}
      title={"ホテル"}
      list={Array<string>("JRイン　札幌駅前")}
      type="hotel"/>
    </>
  )
}