export type userType = {
  account?: string;
  password?: string;
};

export type dataType = {
  name: string;
  id: number;
  grade: number;
};

export type datasType = {
  users: userType;
  data: dataType[];
};

export type actionType = {
  type: string;
  [name: string]: any;
};
