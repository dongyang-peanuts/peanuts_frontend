import ArrowRight from "@/assets/icons/arrowRight.png";
import ArrowLeft from "@/assets/icons/arrowLeft.png";

interface PropsType {
  page: number;
}

const PageNation = ({ page }: PropsType) => {
  return (
    <div className="flex justify-center mt-7">
      <img className="w-5" src={ArrowLeft} />
      <div className="flex justify-between mx-[30px]">
        <div className="font-bold text-sm">1</div>
        <div className="font-bold text-sm">2</div>
        <div className="font-bold text-sm">3</div>
        <div className="font-bold text-sm">4</div>
      </div>

      <img className="w-5" src={ArrowRight} />
    </div>
  );
};

export default PageNation;
