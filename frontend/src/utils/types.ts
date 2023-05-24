export type languageType = 'vi' | 'en';

export type languageArr = {
  VI: languageType;
  EN: languageType;
};
export type initialLoginInputsType = {
  email: string;
  password: string;
};
export type loginResponse = {
  errCode: number;
  errMessage: string;
  data?: any;
};

export type handleLogin = {
  data: loginResponse;
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
