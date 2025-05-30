import BottomHeader from "@/components/header/BottomHeader";
import Header from "@/components/header/Header";
import InfoModal from "@/components/modal/InfoModal";
import img from "@/assets/img/image (2).png";
import ArrowRight from "@/assets/icons/arrowRight.png";
import ArrowLeft from "@/assets/icons/arrowLeft.png";
import { useEffect } from "react";

import { Map } from "react-kakao-maps-sdk";

interface PropsType {
  navigate: (address: string) => void;
}

const AllMonitoringView = ({ navigate }: PropsType) => {
  return (
    <div className="bg-[#F6F7FB] min-h-screen">
      <Header />
      <BottomHeader page="all" />
      <div className="relative">
        <Map
          center={{ lat: 37.450701, lng: 127.570667 }}
          style={{ width: "100%", height: "100vh" }}
          level={10}
        />
        <div className="absolute m-auto flex items-center">
          <div className="w-[37px] h-[65px] bg-[#3a3a3a] rounded-lg flex items-center">
            <img src={ArrowLeft} />
          </div>
          <div
            onClick={() => {
              navigate("/all-monitoring/detail");
            }}
            className="flex justify-between w-[974px] mx-4"
          >
            <img className="w-[311px]" src={img} />
            <img className="w-[311px]" src={img} />
            <img className="w-[311px]" src={img} />
          </div>
          <div className="w-[37px] h-[65px] bg-[#3a3a3a] rounded-lg flex items-center">
            <img src={ArrowRight} />
          </div>

          {/* <InfoModal /> */}
        </div>
      </div>
    </div>
  );
};

export default AllMonitoringView;
