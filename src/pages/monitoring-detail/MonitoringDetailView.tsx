import BottomHeader from "@/components/header/BottomHeader";
import Header from "@/components/header/Header";
import HistoryItem from "@/components/HistoryItem";
import Pagination from "@/components/PageNation";

import ArrowLeft from "@/assets/icons/ArrowLeftBlack.png";
import ArrowRight from "@/assets/icons/ArrowRightBlack.png";
import { getHistory } from "@/models/history";

interface PropsType {
  date: Date;
  data?: any;
  history?: getHistory[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const MonitoringDetailView = ({
  date,
  data,
  history,
  currentPage,
  setCurrentPage,
}: PropsType) => {
  return (
    <div className="bg-[#F6F7FB] min-h-screen pb-[152px]">
      <Header />
      <BottomHeader page="all" />
      <div className="w-[1116px] m-auto">
        <div className="flex mt-[47px]">
          <div className="w-[546px] h-[404px] bg-black"></div>
          <div className="ml-6">
            <div className="flex items-center w-[241px] h-6 mb-[21px] text-xl font-bold">
              <img className="w-6" src={ArrowLeft} />
              <div className="mx-[23px]">
                {date.getFullYear() +
                  "년 " +
                  (date.getMonth() + 1) +
                  "월 " +
                  date.getDay() +
                  "일 "}
              </div>
              <input type="date" className="hidden" />
              <img className="w-6" src={ArrowRight} />
            </div>
            {history.length > 0 ? (
              history.map((item) => <HistoryItem data={item} />)
            ) : (
              <div>히스토리 값이 존재하지 않습니다</div>
            )}
            <Pagination
              totalPages={5}
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
        <div className="mt-[37px] ">
          <div className="font-bold text-xl mb-[11px]">환자 정보</div>
          <div className="flex max-w-[1116px] bg-white h-[212px] rounded-lg border bordee-[#d9d9d9] shadow-md px-10 py-5">
            <div className="flex flex-col justify-between mr-[33px]">
              <div className="flex text-sm font-bold">
                <p className="w-[53px] text-center mr-[34px]">나이</p>
                <p className="w-[45px]">89세</p>
              </div>
              <div className="flex text-sm font-bold">
                <p className="w-[53px] text-center mr-[34px]">키</p>
                <p className="w-[45px]">168cm</p>
              </div>
              <div className="flex text-sm font-bold">
                <p className="w-[53px] text-center mr-[34px]">체중</p>
                <p className="w-[45px]">70kg</p>
              </div>
              <div className="flex text-sm font-bold">
                <p className="w-[53px] text-center mr-[34px]">낙상 횟수</p>
                <p className="w-[45px]">총 3회</p>
              </div>
              <div className="flex text-sm font-bold">
                <p className="w-[53px] text-center mr-[34px]">욕창 횟수</p>
                <p className="w-[45px]">총 0회</p>
              </div>
            </div>
            <div className="w-[1px] h-[156px] bg-[#d9d9d9] my-auto mr-[33px]"></div>
            <div className="flex flex-col justify-between mr-[33px]">
              <div className="flex text-sm font-bold">
                <p className="w-[80px] text-center mr-[34px]">질병</p>
                <p className="w-[59px]">관절염</p>
              </div>
              <div className="flex text-sm font-bold">
                <p className="w-[80px] text-center mr-[34px]">질병의 중증도</p>
                <p className="w-[59px]">중증</p>
              </div>
              <div className="flex text-sm font-bold">
                <p className="w-[80px] text-center mr-[34px]">하루 운동 시간</p>
                <p className="w-[59px]">1시간 이내</p>
              </div>
              <div className="flex text-sm font-bold">
                <p className="w-[80px] text-center mr-[34px]">현재 거동 상태</p>
                <p className="w-[59px]">지팡이</p>
              </div>
            </div>
            <div className="w-[1px] h-[156px] bg-[#d9d9d9] my-auto mr-[33px]"></div>
            <div className="flex flex-col justify-between mr-[33px]">
              <div className="flex text-sm font-bold">
                <p className="w-[88px] text-center mr-[34px]">복용중인 약</p>
                <p className="w-[400px] overflow-hidden text-ellipsis whitespace-nowrap">
                  이부프로펜(Advil), 나프록센(Aleve), 멜록시캄(Mobic),
                  셀레콕시브(Celebrex)
                </p>
              </div>
              <div className="flex text-sm font-bold">
                <p className="w-[88px] text-center mr-[34px]">거주 주소</p>
                <p>중증</p>
              </div>
              <div className="flex text-sm font-bold">
                <p className="w-[88px] text-center mr-[34px]">
                  보호자 전화번호
                </p>
                <p>010-7132-8582</p>
              </div>
              <div className="flex text-sm font-bold">
                <p className="w-[88px] text-center mr-[34px]">보호자 이메일</p>
                <p>chhari0708@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitoringDetailView;
