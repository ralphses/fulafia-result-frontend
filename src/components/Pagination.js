// Pagination.js
import React from 'react';

const Pagination = ({ crimesPerPage, totalCrimes, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCrimes / crimesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="flex justify-center space-x-2 mt-4">
      {pageNumbers.map((number) => (
        <li key={number}>
          <button
            onClick={() => paginate(number)}
            className={`px-3 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 ${
              currentPage === number ? 'bg-blue-700' : ''
            }`}
          >
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
