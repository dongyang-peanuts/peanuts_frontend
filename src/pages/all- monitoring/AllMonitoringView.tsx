import BottomHeader from "@/components/header/BottomHeader";
import Header from "@/components/header/Header";

const AllMonitoringView = () => {
  return (
    <div className="bg-[#F6F7FB] min-h-screen">
      <Header />
      <BottomHeader page="all" />
      <div></div>
    </div>
  );
};

export default AllMonitoringView;
