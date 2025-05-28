import BottomHeader from "@/components/header/BottomHeader";
import Header from "@/components/header/Header";

const UserInfoDetailView = () => {
  return (
    <div className="bg-[#F6F7FB] min-h-screen">
      <Header />
      <BottomHeader page="info" />
      <div className="w-[1116px] m-auto">
        <div className="font-bold text-2xl mt-[34px] mb-[14px]">
          전체 사용자 정보 조회
        </div>
        <div>
          <div className="text-2xl text-[#5D5D5D] mt-[44px] mb-6">
            보호자 정보
          </div>
          <div className="bg-[#5d5d5d] w-[1116px] h-[1px] mb-6"></div>
          <div className="flex mb-[21px]">
            <div className="text-base text-[#5d5d5d] w-[108px]">
              보호자 이메일
            </div>
            <div className="ml-[58px]">chhari0708@naver.com</div>
          </div>
          <div className="flex mb-[21px]">
            <div className="text-base text-[#5d5d5d] w-[108px]">
              보호자 전화번호
            </div>
            <div className="ml-[58px]">010-7132-8582</div>
          </div>
          <div className="flex mb-[21px]">
            <div className="text-base text-[#5d5d5d] w-[108px]">주소</div>
            <div className="ml-[58px]">
              서울특별시 동작구 대방동 7길 31, 302호
            </div>
          </div>
          <div className="flex">
            <div className="text-base text-[#5d5d5d] w-[108px]">기기번호</div>
            <div className="ml-[58px]">F1203C4Ac</div>
          </div>
        </div>

        <div>
          <div className="text-2xl text-[#5D5D5D] mt-[44px] mb-6">
            환자 정보
          </div>
          <div className="bg-[#5d5d5d] w-[1116px] h-[1px] mb-6"></div>
          <div className="flex">
            <div className="flex">
              <div className="text-base text-[#5d5d5d] mr-[102px]">
                환자 이름
              </div>
              <div className="mr-[72px]">최혜림</div>
            </div>
            <div className="flex">
              <div className="text-base text-[#5d5d5d]  mr-[102px]">
                환자 나이
              </div>
              <div className="mr-[72px]">81세</div>
            </div>
            <div className="flex">
              <div className="text-base text-[#5d5d5d]  mr-[102px]">
                환자 키
              </div>
              <div className="mr-[72px]">165cm</div>
            </div>
            <div className="flex">
              <div className="text-base text-[#5d5d5d]  mr-[102px]">
                환자 체중
              </div>
              <div>55kg</div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-2xl text-[#5D5D5D] mt-[44px] mb-6">
            환자 활동 정보
          </div>
          <div className="bg-[#5d5d5d] w-[1116px] h-[1px] mb-6"></div>
          <div className="flex">
            <div className="flex">
              <div className="text-base text-[#5d5d5d] mr-[65px]">예상질병</div>
              <div className="mr-[33px]">
                <div className="mb-[21px]">알츠하이머</div>
                <div className="mb-[21px]">치매</div>
                <div className="mb-[21px]">우울증</div>
                <div className="mb-[21px]">신경계 질환</div>
              </div>
            </div>
            <div className="flex mr-[44px]">
              <div className="text-base text-[#5d5d5d] mr-[39px]">
                복용중인 약
              </div>
              <div>
                <div className="mb-[21px]">이부프로펜(Advil) </div>
                <div className="mb-[21px]">나프록센(Aleve)</div>
                <div className="mb-[21px]">멜록시캄(Mobic)</div>
                <div className="mb-[21px]">셀레콕시브(Celebrex)</div>
              </div>
            </div>
            <div className="mr-[72px]">
              <div className="flex mb-[21px]">
                <div className="text-base text-[#5d5d5d] w-[70px] mr-[102px]">
                  낙상 횟수
                </div>
                <div className="w-[45px]">3회</div>
              </div>
              <div className="flex mb-[21px]">
                <div className="text-base text-[#5d5d5d] w-[70px] mr-[102px]">
                  중증도
                </div>
                <div className="w-[45px]">중증</div>
              </div>
              <div className="flex mb-[21px]">
                <div className="text-base text-[#5d5d5d] w-[70px] mr-[102px]">
                  거동 상태
                </div>
                <div className="w-[50px]">휠체어</div>
              </div>
            </div>
            <div>
              <div className="flex mb-[21px]">
                <div className="text-base text-[#5d5d5d] w-[70px] mr-[102px]">
                  욕창 횟수
                </div>
                <div>3회</div>
              </div>
              <div className="flex mb-[21px]">
                <div className="text-base text-[#5d5d5d] w-[70px] mr-[102px]">
                  운동 시간
                </div>
                <div>75분</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoDetailView;
