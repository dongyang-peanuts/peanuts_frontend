import img from "../../assets/img/image (2).png";

const InfoModal = () => {
  return (
    <div>
      <div className="bg-white w-[387px] h-[71px] rounded-xl shadow-md mb-3 text-[15px] flex items-center pl-4">
        <div>
          <p className="mb-[7px]">서울특별시 동작구 대방동 7길 31, 302호</p>
          <p>보호자 | 010-7132-8582</p>
        </div>
      </div>
      <img className="w-[387px] rounded-xl" src={img} />
    </div>
  );
};

export default InfoModal;
