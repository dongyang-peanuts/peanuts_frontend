import arrowLeft from "@/assets/icons/arrowLeft.png";
import arrowRight from "@/assets/icons/arrowRight.png";

interface PropsType {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PageNation = ({ totalPages, currentPage, onPageChange }: PropsType) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center py-4 space-x-2 text-sm text-gray-400">
      <img
        src={arrowLeft}
        onClick={handlePrevious}
        className={`px-2 h-[19px] ${
          currentPage === 1
            ? "cursor-not-allowed text-gray-300"
            : "hover:text-gray-600"
        }`}
      />

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-2 ${
            currentPage === page
              ? "text-green-600 font-semibold"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          {page}
        </button>
      ))}

      <img
        src={arrowRight}
        onClick={handleNext}
        className={`px-2 h-[19px] ${
          currentPage === totalPages
            ? "cursor-not-allowed text-gray-300"
            : "hover:text-gray-600"
        }`}
      />
    </div>
  );
};

export default PageNation;
