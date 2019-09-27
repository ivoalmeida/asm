import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { users } from './data';

const APP_SECRET = 'venatus';

export const login = (root, { email, password }) => {
  const user = users.find(u => u.email === email);
  if (!user) {
    throw new Error('No such user found');
  }

  const valid = bcrypt.compare(password, user.password);
  if (!valid) {
    throw new Error('Invalid password');
  }

  return {
    token: jwt.sign({ password }, APP_SECRET),
    user,
  };
};

export const signup = (root, { email, password, firstName }) => {
  let pwd = password;
  bcrypt.hash(password, 10).then(data => (pwd = data));
  const user = {
    firstName,
    email,
    password: pwd,
  };

  users.push(user);

  const token = jwt.sign({ pwd }, APP_SECRET);

  return token;
};
