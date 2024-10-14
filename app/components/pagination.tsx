interface PaginationProps {
  currentPage: number;
  onPageChange: (newPage: number) => void;
}

const Pagination = ({ currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="flex justify-center mt-6 space-x-2 text-gray-900">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`px-4 py-2 bg-gray-200 rounded-lg ${
          currentPage === 1 ? 'cursor-not-allowed' : 'hover:bg-gray-300'
        }`}
      >
        Previous
      </button>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;