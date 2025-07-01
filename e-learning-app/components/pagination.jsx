import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  maxVisiblePages = 5,
}) => {
  const getVisiblePages = () => {
    const pages = [];
    const start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const end = Math.min(totalPages, start + maxVisiblePages - 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  const visiblePages = getVisiblePages();

  return (
    <div className='flex items-center justify-center space-x-2 py-8'>
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className='flex items-center px-3 py-2 text-sm font-medium text-[var(--gray-color)] bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-[var(--color)] disabled:opacity-50 disabled:cursor-not-allowed transition-all'
      >
        <ChevronLeft className='w-4 h-4 mr-1' />
        Previous
      </button>

      {/* First Page */}
      {showFirstLast && visiblePages[0] > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className='px-3 py-2 text-sm font-medium text-[var(--gray-color)] bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-[var(--color)] transition-all'
          >
            1
          </button>
          {visiblePages[0] > 2 && (
            <span className='px-2 py-2 text-[var(--gray-color)]'>...</span>
          )}
        </>
      )}

      {/* Visible Pages */}
      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
            page === currentPage
              ? 'bg-[var(--color)] text-white'
              : 'text-[var(--gray-color)] bg-white border border-gray-300 hover:bg-gray-50 hover:text-[var(--color)]'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Last Page */}
      {showFirstLast && visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <span className='px-2 py-2 text-[var(--gray-color)]'>...</span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className='px-3 py-2 text-sm font-medium text-[var(--gray-color)] bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-[var(--color)] transition-all'
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='flex items-center px-3 py-2 text-sm font-medium text-[var(--gray-color)] bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-[var(--color)] disabled:opacity-50 disabled:cursor-not-allowed transition-all'
      >
        Next
        <ChevronRight className='w-4 h-4 ml-1' />
      </button>
    </div>
  );
};

export default Pagination;
