import MainButton from "@/components/buttons/MainButton";
import BottomHeader from "@/components/header/BottomHeader";
import Header from "@/components/header/Header";
import Input from "@/components/input/Input";
import TableHeader from "@/components/table/TableHeader";

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
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoView;
