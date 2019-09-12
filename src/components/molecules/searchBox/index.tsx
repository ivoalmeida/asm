import * as React from 'react';

import * as styles from './styles.scss';
import Icon from '../../atoms/icon';
import InputText from '../../atoms/input';

const SearchBox = () => (
  <div className={styles.searchBox}>
    <InputText placeholder="Search on Venatus" styles={{ paddingLeft: '35px' }} />
    <Icon className={styles.searchIcon} variant="search" />
  </div>
);

export default SearchBox;
