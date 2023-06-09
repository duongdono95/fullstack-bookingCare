import { useQuery } from '@tanstack/react-query'
import { GetAllBookedScheduleParam } from '../utils/types';

import { getAllBookedSchedules, getAllCode, getDoctors, getUser } from './userServices';
export const GetAllCodeQuery = () => {
  const allCodesQuery = useQuery({
    queryKey: ['code'],
    queryFn: () => getAllCode('ALL'),
  });
  return allCodesQuery;
};
export const GetDoctorQuery = () => {
  const doctorsQuery = useQuery({
    queryKey: ['user', 'doctor'],
    queryFn: () => getDoctors('R2'),
  });
  return doctorsQuery;
};
export const GetAllBookedScheduleQuery = (data: GetAllBookedScheduleParam) => {
  const bookedSchedules = useQuery({
    queryKey: ['schedule','doctor',  data.date, data.doctorId],
    queryFn: () => getAllBookedSchedules(data),
  });

  return bookedSchedules;
};
export const GetUserDoctor = (doctorId:string) => {
  const doctorQuery = useQuery({
    queryKey: ['user', 'doctor'],
    queryFn: () => getUser(doctorId)
  })
  return doctorQuery
}