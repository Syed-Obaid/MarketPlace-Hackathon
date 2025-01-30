import React from "react";

interface PageControllerProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const PageController: React.FC<PageControllerProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex flex-wrap justify-center items-center my-6">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`px-4 py-2 mx-1 border rounded-lg text-gray-800 ${
            currentPage === index + 1
              ? "bg-[#FBEBB5] text-white"
              : "bg-gray-200"
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default PageController;
