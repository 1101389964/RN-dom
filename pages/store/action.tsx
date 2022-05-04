import {RegisterAccount} from './constant';

import {userType} from './interfsce';

export const register = (users: userType) => ({
  type: RegisterAccount,
  users,
});
