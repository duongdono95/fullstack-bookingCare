export type languageType = 'vi' | 'en';

export type languageArr = {
  VI: languageType;
  EN: languageType;
};
export type initialLoginInputsType = {
  email: string;
  password: string;
};
export type userLoginResponse = {
  errCode: number;
  errMessage: string;
  data?: any;
};

export type AdminMenu = (
  | {
      name: string;
      title: string;
      path: string;
      menus: {
        name: string;
        title: string;
        path: string;
      }[];
    }
  | {
      name: string;
      title: string;
      path: string;
      menus?: undefined;
    }
)[];

export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  phonenumber: string;
  gender: number;
  image: string;
  roleId: string;
  positionId: string;
  createAt: string;
  updateAt: string;
};

export type responseFetchedUser = {
  errCode: number;
  errMessage: string;
  users: User[];
};
// export type AllUser = User[] | []
