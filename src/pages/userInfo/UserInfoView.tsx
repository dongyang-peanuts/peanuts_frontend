import MainButton from "@/components/buttons/MainButton";
import BottomHeader from "@/components/header/BottomHeader";
import Header from "@/components/header/Header";
import TableBody from "@/components/table/TableBody";
import TableHeader from "@/components/table/TableHeader";

const data = [
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
];

const UserInfoView = () => {
  return (
    <div>
      <Header />
      <BottomHeader page="info" />
      <div>
        <div className="w-[1116px] m-auto">
          <div>전체 사용자 정보 조회</div>
          <div className="flex">
            <div className="border w-[926px] h-14 mr-6"></div>
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
          <button className="border border-[#6A9850] rounded-lg w-[95px] h-[38px] text-[#6A9850]">
            삭제
          </button>
          <div>
            <table>
              <TableHeader data={["이메일", "주소", "기기번호", "가입일"]} />
              {data.map((item) => (
                <TableBody data={item} />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoView;
