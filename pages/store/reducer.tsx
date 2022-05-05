import {RegisterAccount} from './constant';

import {dataType, actionType} from './interfsce';

const data: dataType = {
  users: {},
};

const reducer = (state = data, action: actionType) => {
  switch (action.type) {
    case RegisterAccount:
      return {...state, users: action.users} as dataType;
    default:
      return state;
  }
};

export default reducer;
