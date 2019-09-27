import * as React from 'react';

import * as styles from './styles.scss';
import Icon from '../../atoms/icon';
import Input from '../../atoms/input';

const SearchBox = () => (
  <div className={styles.searchBox}>
    <Input placeholder="Search on Venatus" style={{ paddingLeft: '35px' }} />
    <Icon className={styles.searchIcon} variant="search" />
  </div>
);

export default SearchBox;
