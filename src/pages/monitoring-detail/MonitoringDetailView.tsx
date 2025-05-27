import BottomHeader from "@/components/header/BottomHeader";
import Header from "@/components/header/Header";
import HistoryItem from "@/components/HistoryItem";

const data = [
  {
    id: 1,
    state: "비상",
    content: "사용자에게 낙상이 감지되었습니다.",
    time: "13:29:17",
  },
  {
    id: 2,
    state: "경고",
    content: "사용자에게 낙상이 감지되었습니다.",
    time: "13:29:17",
  },
  {
    id: 3,
    state: "주의",
    content: "사용자에게 낙상이 감지되었습니다.",
    time: "13:29:17",
  },
  {
    id: 4,
    state: "경고",
    content: "사용자에게 낙상이 감지되었습니다.",
    time: "13:29:17",
  },
  {
    id: 5,
    state: "경고",
    content: "사용자에게 낙상이 감지되었습니다.",
    time: "13:29:17",
  },
];

const MonitoringDetailView = () => {
  return (
    <div className="bg-[#F6F7FB] min-h-screen">
      <Header />
      <BottomHeader page="all" />
      <div className="w-[1116px] m-auto">
        <div className="flex mt-[47px]">
          <div className="w-[546px] h-[404px] bg-black"></div>
          <div className="ml-6">
            <div className="w-[241px] h-6 mb-[21px]">
              <input type="date" />
            </div>
            {data.map((item) => (
              <HistoryItem data={item} />
            ))}
          </div>
        </div>
        <div className="mt-[37px] ">
          <div className="font-bold text-xl mb-[11px]">환자 정보</div>
          <div className="max-w-[1116px] bg-white h-[212px] rounded-lg border bordee-[#d9d9d9] shadow-md"></div>
        </div>
      </div>
    </div>
  );
};

export default MonitoringDetailView;
