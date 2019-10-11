import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './pages/app';
import './assets/images/favicon.ico';

import * as styles from './index.scss';

const root = document.getElementById('root');

ReactDOM.render(
  <div className={styles.global}>
    <App />
  </div>,
  root,
);
