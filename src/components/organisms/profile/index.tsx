import * as React from 'react';

import styles from './styles.scss';
import Icon from '../../atoms/icon';
import Box from '../../atoms/box';

interface IProfileProps {
  user: { name: string; surname: string };
}

const Profile: React.FC<IProfileProps> = ({ user }) => {
  return (
    <Box direction="row" padding="5px" width="270px" justifyContent="flex-end">
      <Box direction="column" padding="2px 15px">
        <a className={styles.accountLink} href={`/users`}>
          My Account
        </a>
        <div className={styles.username}>{`${user.name} ${user.surname}`}</div>
      </Box>
      <Box direction="row" padding="5px" justifyContent="center">
        <Icon variant="user2" className={styles.profileIcon} />
      </Box>
    </Box>
  );
};

export default Profile;
