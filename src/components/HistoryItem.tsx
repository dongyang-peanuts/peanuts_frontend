import { getHistory } from "@/models/history";

interface PropsType {
  data: getHistory;
}

const HistoryItem = ({ data }: PropsType) => {
  var color;
  if (data.alertLevel === "비상") {
    color = "text-[#ff0000]";
  } else if (data.alertLevel === "경고") {
    color = "text-yellow-400";
  } else {
    color = "text-[#6a9850]";
  }
  return (
    <div className="flex justify-between w-[546px] h-[57px] border border-[#d9d9d9] rounded-[10px] bg-white items-center px-6 mb-2">
      <div className="flex">
        <div className={`font-bold ${color}`}>[{data.alertLevel}]</div>
        <div className="font-bold ml-1">{data.eventType}</div>
      </div>
      <div className="text-sm text-[#b9b9b9]">{data.detectedAt}</div>
    </div>
  );
};

export default HistoryItem;
