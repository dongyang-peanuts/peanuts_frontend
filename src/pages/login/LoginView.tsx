import MainButton from "@/components/buttons/MainButton";
import Input from "@/components/input/Input";

const LoginView = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[356px] h-[420px]">
        <p className="text-center text-[#6a9850] font-bold text-2xl">로그인</p>
        <div className="w-[356px] h-[3px] bg-[#6a9850]"></div>
        <div>
          <div className="text-sm text-[#707070] mt-[32px] mb-[8px]">
            아이디
          </div>
          <Input
            width="348px"
            height="44px"
            placeholder="아이디를 입력해주세요."
          />
        </div>
        <div>
          <div className="text-sm text-[#707070] mt-[27px] mb-[8px]">
            비밀번호
          </div>
          <Input
            width="348px"
            height="44px"
            placeholder="비밀번호를 입력해주세요."
          />
        </div>
        <div className="mt-[34px] mb-[13px]">
          <MainButton
            width="356px"
            height="48px"
            backgroundColor="#6a9850"
            text="로그인"
            color="white"
            borderColor="none"
          />
        </div>
        <div>
          <MainButton
            width="356px"
            height="48px"
            backgroundColor="white"
            text="회원가입"
            color="#6a9850"
            borderColor="#6a9850"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginView;
