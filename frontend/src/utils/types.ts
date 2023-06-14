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
  id?: number;
  image: string;
  lastName: string;
  phoneNumber: string;
  positionId: string;
  roleId?: string;
  updatedAt?: string;
  roleData?: {
    valueEn: string;
    valueVi: string;
  };
  positionData?: {
    valueEn: string;
    valueVi: string;
  };
}

export type responseFetchedUser = {
  errCode: number;
  errMessage: string;
  users: User;
};

export type responseFetchedUsers = {
  errCode: number;
  errMessage: string;
  users: User[];
};
export type responseFetchedDoctors = {
  errCode: number;
  errMessage: string;
  data: {
    doctors: User[];
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
  createdAt: null;
  id: number;
  keyMap: string;
  type: string;
  updatedAt: null;
  valueEn: string;
  valueVi: string;
};
export type ConvertedCodeType = Record<string, { valueEn: string; valueVi: string }>;
export type responseFetchAllCode = {
  errCode: number;
  errMessage: string;
  data: OriginalCode[];
};

export type InitialDoctorDetailForm = {
  id?: number;
  doctorId: number | null;
  priceId: string | undefined;
  paymentId: string | undefined;
  provinceId: string | undefined;
  clinicName: string;
  clinicAddress: string;
  contentMarkdown: string;
  contentHTML: string;
  description: string;
  paymentTypeData?: {
    valueEn: string;
    valueVi: string;
  };
  priceTypeData?: {
    valueEn: string;
    valueVi: string;
  };
  provinceTypeData?: {
    valueEn: string;
    valueVi: string;
  };
};
export type responseSaveDoctorDetails = {
  errCode: number;
  errMessage: string;
  data: {
    doctors: InitialDoctorDetailForm;
  };
};
export type DoctorSchedule = {
  date: string;
  doctorId: number;
  timeType: string;
};
export type GeneralResponse = {
  errCode: number;
  errMessage: string;
};
export type GetAllBookedSchedule = {
  errCode: number;
  errMessage: string;
  allBookedSchedules: { timeType: string }[];
};
export type GetAllBookedScheduleParam = {
  date: string;
  doctorId: number;
};
export type GetDoctorById = {
  errCode: number;
  errMessage: string;
  data: InitialDoctorDetailForm;
};

export type SpecialtyDetails = {
  id?: number;
  specialty: string;
  contentHTML: string;
  contentMarkdown: string;
  doctorId: string;
  image: string;
  specialtyName?: {
    valueEn: string;
    valueVi: string;
  };
};
export type PostSpecialtyDetail = {
  errCode: number;
  errMessage: string;
};

export type GetSpecialties = {
  errCode: number;
  errMessage: string;
  data?: SpecialtyDetails[];
};

export type ClinicDetails = {
  id?: number;
  clinicId: string;
  contentHTML: string;
  contentMarkdown: string;
  doctorId: string;
  image: string;
  address: string;
};
