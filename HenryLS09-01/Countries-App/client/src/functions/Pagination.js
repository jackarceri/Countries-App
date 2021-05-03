import React from "react";

const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
  const pageNum = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNum.push(i);
  }
  return (
    <nav>
      <ul className="pagination-buttons">
        {pageNum.map((number) => (
          <li key={number} className="page-item">
            <a href="#!" className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
