import * as React from 'react';

interface IProps {
  totalRecords: number;
  pageLimit: number;
  onPageChanged: () => void;
}

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const Pagination: React.FC<IProps> = ({ totalRecords = 0, pageLimit = 30 }) => {
  const [totalPages, setTotalPages] = React.useState<number>(1);
  const [pageNeighbours, setPageNeighbours] = React.useState<number>(0);
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  React.useEffect(() => {
    setTotalPages(Math.ceil(totalRecords / pageLimit));
    setPageNeighbours(Math.max(0, Math.min(pageNeighbours, 2)));
    setCurrentPage(1);
  }, [currentPage]);

  const getRange = (from: number, to: number, step: number = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += step;
    }

    return range;
  };

  const fetchPageNumbers = () => {
    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

      let pages = getRange(startPage, endPage);

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = getRange(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = getRange(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return getRange(1, totalPages);
  };
  return <div />;
};

export default Pagination;
