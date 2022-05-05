export type userType = {
  account?: string;
  password?: string;
};

export type dataType = {
  users: userType;
};

export type actionType = {
  type: string;
  [name: string]: any;
};
