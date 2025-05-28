interface PropsType {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ totalPages, currentPage, onPageChange }: PropsType) => {
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
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`px-2 ${
          currentPage === 1
            ? "cursor-not-allowed text-gray-300"
            : "hover:text-gray-600"
        }`}
      >
        &lt;
      </button>

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

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-2 ${
          currentPage === totalPages
            ? "cursor-not-allowed text-gray-300"
            : "hover:text-gray-600"
        }`}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
