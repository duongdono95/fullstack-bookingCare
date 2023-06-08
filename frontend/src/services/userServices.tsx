import axios from 'axios';
import {
  DoctorSchedule,
  GeneralResponse,
  InitialDoctorDetailForm,
  User,
  responseFetchedDoctors,
  responseSaveDoctorDetails,
  userLoginResponse,
  GetAllBookedScheduleParam,
  GetAllBookedSchedule,
} from '../utils/types';
import { http } from '../utils/http';
import { responseFetchedUser, responseFetchAllCode } from './../utils/types';

export const userLogin = async (email: string, password: string) => {
  const response = http.post<userLoginResponse>('/login', {
    email,
    password,
  });
  return (await response).data;
};
export const getUsers = async (id: string | number) => {
  const response = http.get<responseFetchedUser>('/admin/getUsers', {
    params: { id },
  });
  return (await response).data;
};

export const createUser = async (userData: User) => {
  const response = http.post<responseFetchedUser>('/admin/addNewUser', userData);
  return (await response).data;
};

export const editUser = async (userData: User) => {
  const response = http.post<responseFetchedUser>('/admin/editUser', userData);
  return (await response).data;
};

export const deleteUser = async (userId: string | number) => {
  const response = http.delete<responseFetchedUser>(`/admin/deleteUser?id=${userId}`);
  return (await response).data;
};

export const getDoctors = async (code: string) => {
  const response = http.get<responseFetchedDoctors>(`/homePage/getAllDoctors?id=${code}`);
  return (await response).data;
};

export const getAllCode = async (type: string) => {
  const response = http.get<responseFetchAllCode>(`/api/allcode?type=${type}`);
  return (await response).data;
};
export const postDoctorInfo = async (doctorInput: InitialDoctorDetailForm) => {
  const response = http.post<responseSaveDoctorDetails>(`/doctor/saveDoctorDetails`, doctorInput);
  return (await response).data;
};

export const saveDoctorSchedules = async (schedules: DoctorSchedule[]) => {
  const response = http.post<GeneralResponse>('/doctor/saveDoctorSchedules', schedules);
  return (await response).data;
};

// export const getAllBookedSchedules = async (aaaaaa: string, doctorId: string) => {
//   const response = http.get<AllBookedSchedule>('/doctor/getAllBookedSchedules', {
//     aaaaaa,
//     doctorId,
//   });
//   return (await response).data;
// };
export const getAllBookedSchedules = async (data: GetAllBookedScheduleParam) => {
  const response = http.get<GetAllBookedSchedule>('/doctor/getAllBookedSchedules', {
    params: data,
  });
  return (await response).data;
};
