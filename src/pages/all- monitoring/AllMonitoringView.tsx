import BottomHeader from "@/components/header/BottomHeader";
import Header from "@/components/header/Header";
import InfoModal from "@/components/modal/InfoModal";

const AllMonitoringView = () => {
  return (
    <div className="bg-[#F6F7FB] min-h-screen">
      <Header />
      <BottomHeader page="all" />
      <div></div>
      <InfoModal />
    </div>
  );
};

export default AllMonitoringView;
