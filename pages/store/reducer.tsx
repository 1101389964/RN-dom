import * as type from './constant';

import {actionType, datasType} from './interfsce';

const data: datasType = {
  users: {
    account: '1',
    password: '1',
  },
  data: [
    {
      name: 'js',
      id: 1001,
      grade: 89,
    },
    {
      name: 'ts',
      id: 1002,
      grade: 67,
    },
    {
      name: 'babel',
      id: 1003,
      grade: 87,
    },
    {
      name: 'mac',
      id: 1004,
      grade: 74,
    },
    {
      name: 'windows',
      id: 1005,
      grade: 58,
    },
    {
      name: 'linux',
      id: 1006,
      grade: 80,
    },
    {
      name: 'harmony',
      id: 1007,
      grade: 77,
    },
    {
      name: 'ios',
      id: 1008,
      grade: 94,
    },
    {
      name: 'android',
      id: 1009,
      grade: 85,
    },
    {
      name: 'redux',
      id: 1010,
      grade: 64,
    },
    {
      name: 'react',
      id: 1011,
      grade: 89,
    },
    {
      name: 'immutable',
      id: 1012,
      grade: 74,
    },
  ],
};

const reducer = (state = data, action: actionType) => {
  switch (action.type) {
    case type.RegisterAccount:
      return {...state, users: action.users} as datasType;

    case type.AddData:
      return {...state, data: [...state.data, action.data]} as datasType;

    case type.DeleteData:
      let copyDelete = state.data;
      copyDelete = copyDelete.filter(item => {
        return item.id !== action.id;
      });
      return {...state, data: copyDelete} as datasType;

    case type.EditData:
      let copyEdit = state.data;
      copyEdit = copyEdit.map(item => {
        if (item.id === action.data.id) {
          return {...item, grade: action.data.grade};
        }
        return item;
      });
      return {...state, data: copyEdit} as datasType;

    default:
      return state;
  }
};

export default reducer;
