import MainButton from "@/components/buttons/MainButton";
import Input from "@/components/input/Input";

interface loginView {
  loginState: boolean;
  navigate: (address: string) => void;
}

const LoginView = ({ loginState, navigate }: loginView) => {
  return (
    <div className="flex justify-center mt-[150px] focus:border-none">
      <div className="w-[356px] h-[423px]">
        <p className="text-center text-[#6a9850] font-[700] text-[24px] mt-[0px] mb-[44px]">
          로그인
        </p>
        <div className="w-[356px] h-[3px] bg-[#6a9850]"></div>
        <div>
          <div className="text-sm text-[#707070] mt-[34px] mb-[8px]">
            아이디
          </div>
          <Input
            width="340px"
            height="44px"
            placeholder="아이디를 입력해주세요."
          />
          <div className="text-[10px] mt-[6px] text-[#EA4335] h-[10px]">
            {loginState ? "*아이디가 일치하지 않습니다." : "\u00A0"}
          </div>
        </div>
        <div>
          <div className="text-[14px] text-[#707070] mt-[11px] mb-[8px]">
            비밀번호
          </div>
          <Input
            width="340px"
            height="44px"
            placeholder="비밀번호를 입력해주세요."
          />
          <div className="text-[10px] mt-[6px] text-[#EA4335] h-[10px]">
            {loginState ? "*비밀번호가 일치하지 않습니다." : "\u00A0"}
          </div>
        </div>
        <div className="mt-[16px] mb-[13px]">
          <MainButton
            width="356px"
            height="48px"
            backgroundColor="#6a9850"
            text="로그인"
            color="white"
            borderColor="none"
            onClick={() => {
              navigate("all-monitoring");
            }}
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
            onClick={() => {
              navigate("/register");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginView;
