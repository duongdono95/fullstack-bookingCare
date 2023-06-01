import {  useQuery } from "@tanstack/react-query";
import { getAllCode, getDoctors } from "./userServices";



export  const GetAllCodeQuery = ( )  => {
    const allCodesQuery =  useQuery({
      queryKey: ['code'],
    queryFn: () => getAllCode('ALL'),
    })
    return allCodesQuery
  }
export const GetDoctorQuery = () => {
 const doctorsQuery = useQuery({
    queryKey: ['users', 'doctor'],
    queryFn: () => getDoctors('R2'),
  });
  return doctorsQuery
}