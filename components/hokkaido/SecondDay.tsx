import {DayFlex} from "../organisms/DayFlex";

export const SecondDay = () => {
  return (
    <>
    <DayFlex 
      time={"12:00～"}
      item={Array<string>("函館⇒札幌","13:00着予定")}
      list={Array<string>("駅弁", " 写真")}/>
    <DayFlex 
      time={"13:00～"}
      item={Array<string>("札幌")}
      list={Array<string>("支笏湖（遊覧船、SUP）", "中央卸売市場場外市場", "ロイズ")}/>
    <DayFlex 
      time={"19:00～"}
      item={Array<string>("夕食")}
      list={Array<string>("ラーメン")}/>
    <DayFlex 
      time={"20:00～"}
      item={Array<string>("ホテル")}
      list={Array<string>("JRイン　札幌駅前")}/>
    </>
  )
}