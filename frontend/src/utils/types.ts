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

export interface User {
  address: string;
  password?: string;
  createdAt?: string;
  email: string;
  firstName: string;
  gender: string;
  id?: string;
  image: string;
  lastName: string;
  phoneNumber: string;
  positionId: string;
  roleId: string;
  updatedAt?: string;
}

export type responseFetchedUser = {
  errCode: number;
  errMessage: string;
  users: User[];
};
export type responseFetchedDoctors = {
  errCode: number;
  errMessage: string;
  data: {
    doctors: User[]
  };
};

export type InitialInputForm = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  gender: string;
  roleId: string;
  positionId: string;
  image?: string;
};

export type OriginalCode = {
  createdAt: null,
  id: number,
  keyMap:string,
  type:string,
  updatedAt:null,
  valueEn:string,
  valueVi:string
}
export type ConvertedCodeType = Record<string, { valueEn: string; valueVi: string; }>
export type responseFetchAllCode = {
  errCode: number;
  errMessage: string;
  data: OriginalCode[]
}

export type InitialDoctorDetailForm = {
  doctorId: number | null,
  price: string | undefined,
  payment: string | undefined,
  province: string | undefined,
  clinicName: string,
  clinicAddress: string,
  contentMarkdown: string,
  contentHTML : string,
  description : string,
  action?: string,
};
export type responseSaveDoctorDetails = {
  errCode: number;
  errMessage: string;
  data: {
    doctors: InitialDoctorDetailForm
  };
};