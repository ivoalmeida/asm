import * as React from 'react';

import * as styles from './styles.scss';
import Icon from '../../atoms/icon';
import Input from '../../atoms/input';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchBox: React.FC<IProps> = props => (
  <div className={styles.searchBox}>
    <Input style={{ paddingLeft: '35px' }} {...props} />
    <Icon className={styles.searchIcon} variant="search" />
  </div>
);

export default SearchBox;
