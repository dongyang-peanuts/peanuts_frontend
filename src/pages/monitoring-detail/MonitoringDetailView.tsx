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
          <div>
            <div></div>
            {data.map((item) => (
              <HistoryItem data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitoringDetailView;
