import { useSelector } from "react-redux";
import { RootState } from "./store";

export const useAppAllCode =  () => useSelector((state:RootState) => state.allCode)
export const helpFilterCodeType = (type: string) => {
  const
}