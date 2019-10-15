import * as React from 'react';
import cn from 'classnames';

import * as styles from './styles.scss';
import Icon from '../../atoms/icon';

export interface IPaginationProps {
  initialPage: number;
  pageSize: number;
  recordCount?: number;
  onPagePrev: any;
  onPageNext: any;
}

const Pagination: React.FC<IPaginationProps> = ({
  initialPage,
  pageSize,
  recordCount,
  onPageNext,
  onPagePrev,
}) => {
  const [currentPage, setCurrentPage] = React.useState<number>(initialPage);
  const [totalPages, setTotalPages] = React.useState<number>();

  React.useEffect(() => {
    setTotalPages(Math.ceil(recordCount / pageSize));
  }, [recordCount]);
  return (
    <div className={cn(styles.pagination)}>
      <button className={cn(styles.arrowButton)} onClick={onPagePrev} disabled={currentPage === 1}>
        <Icon variant="leftArrow" />
      </button>
      <div className={cn(styles.pageNumbers)}>
        <span className={cn(styles.currentPage)}>{`${currentPage} `}</span>
        <span className={cn(styles.totalPages)}>{`/ ${totalPages}`}</span>
      </div>
      <button
        className={cn(styles.arrowButton)}
        onClick={onPageNext}
        disabled={currentPage === totalPages}
      >
        <Icon variant="rightArrow" />
      </button>
    </div>
  );
};

export default Pagination;
