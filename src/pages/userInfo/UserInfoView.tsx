import MainButton from "@/components/buttons/MainButton";
import BottomHeader from "@/components/header/BottomHeader";
import Header from "@/components/header/Header";
import TableBody from "@/components/table/TableBody";
import TableHeader from "@/components/table/TableHeader";

import SearchIcon from "@/assets/icons/Search.png";
import PageNation from "@/components/PageNation";

const data = [
  [
    {
      id: 1,
      email: "chhari0708@naver.com",
      address: "서울특별시 동작구 대방동 7길 31, 302호",
      adviceNo: "F1203C4Ac",
      createdAt: "2024.04.18",
    },
    {
      id: 2,
      email: "chhari0708@naver.com",
      address: "서울특별시 동작구 대방동 7길 31, 302호",
      adviceNo: "F1203C4Ac",
      createdAt: "2024.04.18",
    },
    {
      id: 3,
      email: "chhari0708@naver.com",
      address: "서울특별시 동작구 대방동 7길 31, 302호",
      adviceNo: "F1203C4Ac",
      createdAt: "2024.04.18",
    },
    {
      id: 4,
      email: "chhari0708@naver.com",
      address: "서울특별시 동작구 대방동 7길 31, 302호",
      adviceNo: "F1203C4Ac",
      createdAt: "2024.04.18",
    },
    {
      id: 5,
      email: "chhari0708@naver.com",
      address: "서울특별시 동작구 대방동 7길 31, 302호",
      adviceNo: "F1203C4Ac",
      createdAt: "2024.04.18",
    },
    {
      id: 6,
      email: "chhari0708@naver.com",
      address: "서울특별시 동작구 대방동 7길 31, 302호",
      adviceNo: "F1203C4Ac",
      createdAt: "2024.04.18",
    },
    {
      id: 7,
      email: "chhari0708@naver.com",
      address: "서울특별시 동작구 대방동 7길 31, 302호",
      adviceNo: "F1203C4Ac",
      createdAt: "2024.04.18",
    },
    {
      id: 8,
      email: "chhari0708@naver.com",
      address: "서울특별시 동작구 대방동 7길 31, 302호",
      adviceNo: "F1203C4Ac",
      createdAt: "2024.04.18",
    },
    {
      id: 9,
      email: "chhari0708@naver.com",
      address: "서울특별시 동작구 대방동 7길 31, 302호",
      adviceNo: "F1203C4Ac",
      createdAt: "2024.04.18",
    },
    {
      id: 10,
      email: "chhari0708@naver.com",
      address: "서울특별시 동작구 대방동 7길 31, 302호",
      adviceNo: "F1203C4Ac",
      createdAt: "2024.04.18",
    },
  ],
  [
    {
      id: 1,
      email: "chhari0708@naver.com",
      address: "서울특별시 동작구 대방동 7길 31, 302호",
      adviceNo: "F1203C4Ac",
      createdAt: "2024.04.18",
    },
    {
      id: 2,
      email: "chhari0708@naver.com",
      address: "서울특별시 동작구 대방동 7길 31, 302호",
      adviceNo: "F1203C4Ac",
      createdAt: "2024.04.18",
    },
    {
      id: 3,
      email: "chhari0708@naver.com",
      address: "서울특별시 동작구 대방동 7길 31, 302호",
      adviceNo: "F1203C4Ac",
      createdAt: "2024.04.18",
    },
    {
      id: 4,
      email: "chhari0708@naver.com",
      address: "서울특별시 동작구 대방동 7길 31, 302호",
      adviceNo: "F1203C4Ac",
      createdAt: "2024.04.18",
    },
    {
      id: 5,
      email: "chhari0708@naver.com",
      address: "서울특별시 동작구 대방동 7길 31, 302호",
      adviceNo: "F1203C4Ac",
      createdAt: "2024.04.18",
    },
    {
      id: 6,
      email: "chhari0708@naver.com",
      address: "서울특별시 동작구 대방동 7길 31, 302호",
      adviceNo: "F1203C4Ac",
      createdAt: "2024.04.18",
    },
    {
      id: 7,
      email: "chhari0708@naver.com",
      address: "서울특별시 동작구 대방동 7길 31, 302호",
      adviceNo: "F1203C4Ac",
      createdAt: "2024.04.18",
    },
    {
      id: 8,
      email: "chhari0708@naver.com",
      address: "서울특별시 동작구 대방동 7길 31, 302호",
      adviceNo: "F1203C4Ac",
      createdAt: "2024.04.18",
    },
    {
      id: 9,
      email: "chhari0708@naver.com",
      address: "서울특별시 동작구 대방동 7길 31, 302호",
      adviceNo: "F1203C4Ac",
      createdAt: "2024.04.18",
    },
    {
      id: 10,
      email: "chhari0708@naver.com",
      address: "서울특별시 동작구 대방동 7길 31, 302호",
      adviceNo: "F1203C4Ac",
      createdAt: "2024.04.18",
    },
  ],
];

const UserInfoView = () => {
  return (
    <div className="bg-[#F6F7FB] min-h-screen pb-14">
      <Header />
      <BottomHeader page="info" />
      <div>
        <div className="w-[1116px] m-auto">
          <div className="font-bold text-2xl mt-[34px] mb-[14px]">
            전체 사용자 정보 조회
          </div>
          <div className="flex">
            <div className="border w-[926px] h-14 mr-6 border-[#d9d9d9] flex items-center pr-4">
              <input
                type="text"
                className="border-none w-[100%] h-[48px] outline-none bg-[#F6F7FB] border pl-2"
              />
              <img src={SearchIcon} className="w-7 h-7 " />
            </div>
            <MainButton
              text="검색"
              color="white"
              borderColor="none"
              backgroundColor="#6A9850"
              width="166px"
              height="56px"
              onClick={null}
            />
          </div>
          <button className="mt-[14px] mb-2 border border-[#6A9850] rounded-lg w-[95px] h-[38px] text-[#6A9850]">
            삭제
          </button>
          <div>
            <table className="w-[1116px] border-[#d9d9d9] rounded-lg overflow-hidden">
              <TableHeader data={["이메일", "주소", "기기번호", "가입일"]} />
              {data[0].map((item) => (
                <TableBody data={item} />
              ))}
            </table>
          </div>
          <PageNation page={3} />
        </div>
      </div>
    </div>
  );
};

export default UserInfoView;
