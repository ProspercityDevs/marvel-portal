import { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import './styles.scss';

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  pageSize: PropTypes.number,
  initialPage: PropTypes.number,
  onPageChange: PropTypes.func
};

export default function Pagination({ totalItems, pageSize = 10, initialPage = 1, onPageChange }) {
  const totalPages = getFlooredToatalPages(totalItems, pageSize);
  const [currentPage, setCurrentPage] = useState(initialPage);

  function onNextpageClick() {
    const nextPage = getNextPage(currentPage, totalPages);
    setCurrentPage(nextPage);
  }
  function onNextNextpageClick() { 
    const nextNextPage = getNextPage(currentPage+1, totalPages);
    setCurrentPage(nextNextPage);
  }

  function onNextTriplepageClick() {
    const nextTriplePage = getNextPage(currentPage+2, totalPages);
    setCurrentPage(nextTriplePage);
  }

  function onPreviousPageClick() {
    const prevPage = getPreviousePage(currentPage);
    setCurrentPage(prevPage);
  }
  function onFinalPage(){
    setCurrentPage(totalPages);
  }
  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage]);
 
  return (
    <div className="mvl-paginator">
    
      <div className="mvl-paginator__actions">
        <button disabled={isFirstPage(currentPage)} onClick={onPreviousPageClick}>
          <BiChevronLeft />
        </button>
        <button className='page-active'>{currentPage}</button>
        <button disabled={isLastPage(currentPage, totalPages)} onClick={onNextpageClick}>{currentPage+1}</button>
        <button disabled={isLastPage(currentPage, totalPages)} onClick={ onNextNextpageClick}>{currentPage+2}</button>
        <button disabled={isLastPage(currentPage, totalPages)} onClick={ onNextTriplepageClick}>{currentPage+3}</button>
        <button>...</button>
        <button disabled={isLastPage(currentPage, totalPages)} onClick={onFinalPage}>{totalPages}</button>
       
        <button disabled={isLastPage(currentPage, totalPages)} onClick={onNextpageClick}>
          <BiChevronRight />
        </button>
      </div>
    </div>
  );
}

function isFirstPage(currentPage) {
  return currentPage === 1;
}

function isLastPage(currentPage, maxPage) {
  return currentPage === maxPage;
}

function getPreviousePage(currentPage) {
  return currentPage > 1 ? currentPage - 1 : currentPage;
}

function getNextPage(currentPage, maxPage) {
  return currentPage < maxPage ? currentPage + 1 : maxPage;
}

function getFlooredToatalPages(totalItems, pageSize) {
  return Math.floor(getToatalPages(totalItems, pageSize));
}

function getToatalPages(totalItems, pageSize) {
  return totalItems / pageSize;
}
