import { useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

import './styles.scss';

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  pageSize: PropTypes.number,
  initialPage: PropTypes.number,
  onPageChange: PropTypes.func
};

export default function Pagination({ totalItems, pageSize = 24, initialPage = 1, onPageChange }) {
 
  const [itemOffset, setItemOffset] = useState(initialPage);
  const currentPage = itemOffset + pageSize;
  const pageCount = Math.ceil(totalItems/pageSize);

  
  const handlePageClick = () => {
    useEffect(() => {
      onPageChange(currentPage);
    }, [currentPage]);
  
    const newOffset = (event.selected * pageSize) % totalItems.length;
    setItemOffset(newOffset);
  };

  return (
    <>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName = "pagination"
        nextLinkClassName='page-num'
        pageLinkClassName='page-num'
        previousLinkClassName='page-num'
        activeLinkClassName='page-num'
      />
    </>
  );
}