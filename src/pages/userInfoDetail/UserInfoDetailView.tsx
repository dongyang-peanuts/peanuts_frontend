import BottomHeader from "@/components/header/BottomHeader";
import Header from "@/components/header/Header";

interface PropsType {
  data?: any;
}

const UserInfoDetailView = ({ data }: PropsType) => {
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
            <div className="ml-[58px]">{data.userEmail}</div>
          </div>
          <div className="flex mb-[21px]">
            <div className="text-base text-[#5d5d5d] w-[108px]">
              보호자 전화번호
            </div>
            <div className="ml-[58px]">{data.userNumber}</div>
          </div>
          <div className="flex mb-[21px]">
            <div className="text-base text-[#5d5d5d] w-[108px]">주소</div>
            <div className="ml-[58px]">{data.userAddr}</div>
          </div>
          <div className="flex">
            <div className="text-base text-[#5d5d5d] w-[108px]">기기번호</div>
            <div className="ml-[58px]">
              {data.proNum ? data.proNum : "기기가 연결되지 않음"}
            </div>
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
              <div className="mr-[72px]">{data.patients[0].paName}</div>
            </div>
            <div className="flex">
              <div className="text-base text-[#5d5d5d]  mr-[102px]">
                환자 나이
              </div>
              <div className="mr-[72px]">{data.patients[0].paAge}세</div>
            </div>
            <div className="flex">
              <div className="text-base text-[#5d5d5d]  mr-[102px]">
                환자 키
              </div>
              <div className="mr-[72px]">{data.patients[0].paHei}cm</div>
            </div>
            <div className="flex">
              <div className="text-base text-[#5d5d5d]  mr-[102px]">
                환자 체중
              </div>
              <div>{data.patients[0].paWei}kg</div>
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
                <div className="mb-[21px] w-[95px]">정보 없음</div>
              </div>
            </div>
            <div className="flex mr-[44px]">
              <div className="text-base text-[#5d5d5d] mr-[39px]">
                복용중인 약
              </div>
              <div>
                <div className="mb-[21px] w-[100px]">
                  {data.patients[0].infos[0].paMedi
                    ? data.patients[0].infos[0].paMedi
                    : "없음"}
                </div>
              </div>
            </div>
            <div className="mr-[72px]">
              <div className="flex mb-[21px]">
                <div className="text-base text-[#5d5d5d] w-[70px] mr-[102px]">
                  낙상 횟수
                </div>
                <div className="w-[45px]">
                  {data.patients[0].infos[0].paFact}
                </div>
              </div>
              <div className="flex mb-[21px]">
                <div className="text-base text-[#5d5d5d] w-[70px] mr-[102px]">
                  중증도
                </div>
                <div className="w-[100px]">
                  {data.patients[0].infos[0].paDise
                    ? data.patients[0].infos[0].paDise
                    : "없음"}
                </div>
              </div>
              <div className="flex mb-[21px]">
                <div className="text-base text-[#5d5d5d] w-[70px] mr-[102px]">
                  거동 상태
                </div>
                <div className="w-[100px]">
                  {data.patients[0].infos[0].paBest}
                </div>
              </div>
            </div>
            <div>
              <div className="flex mb-[21px]">
                <div className="text-base text-[#5d5d5d] w-[70px] mr-[102px]">
                  욕창 횟수
                </div>
                <div> {data.patients[0].infos[0].paPrct}</div>
              </div>
              <div className="flex mb-[21px]">
                <div className="text-base text-[#5d5d5d] w-[70px] mr-[102px]">
                  운동 시간
                </div>
                <div>{data.patients[0].infos[0].paExti}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoDetailView;
