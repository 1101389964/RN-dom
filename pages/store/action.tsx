import * as type from './constant';

import {userType, dataType} from './interfsce';

export const register = (users: userType) => ({
  type: type.RegisterAccount,
  users,
});

export const addData = (data: dataType) => ({
  type: type.AddData,
  data,
});

export const deleteData = (id: number) => ({
  type: type.DeleteData,
  id,
});

export const editData = (data: {id: number; grade: number}) => ({
  type: type.EditData,
  data,
});
