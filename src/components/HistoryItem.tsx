import { State } from "@/models/state.model";

interface PropsType {
  data: State;
}

const HistoryItem = ({ data }: PropsType) => {
  var color;
  if (data.state === "비상") {
    color = "text-[#ff0000]";
  } else if (data.state === "경고") {
    color = "text-yellow-400";
  } else {
    color = "text-[#6a9850]";
  }
  return (
    <div className="flex justify-between w-[546px] h-[57px] border border-[#d9d9d9] rounded-[10px] bg-white items-center px-6 mb-2">
      <div className="flex">
        <div className={`font-bold ${color}`}>[{data.state}]</div>
        <div className="font-bold ml-1">{data.content}</div>
      </div>
      <div className="text-sm text-[#b9b9b9]">{data.time}</div>
    </div>
  );
};

export default HistoryItem;
