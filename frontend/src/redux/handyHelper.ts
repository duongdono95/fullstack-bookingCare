import {  useSelector } from "react-redux";
import { RootState } from "./store";
import { ConvertedCodeType, OriginalCode } from "../utils/types";

export const useAppTranslationAllCode =  () => useSelector((state:RootState) => state.translationCodes)
export const useAppLanguage = () => useSelector((state: RootState) => state.languages)
export const useAppAllcodes = () => useSelector((state: RootState) => state.allCodes)
const ConvertedAllCode = (codeArray : OriginalCode[]) => {
  const transformedArray: ConvertedCodeType = {};
  codeArray?.forEach((obj) => {
    const { keyMap, valueEn, valueVi } = obj;
    transformedArray[keyMap] = { valueEn, valueVi };
  });
  return transformedArray
}
export default ConvertedAllCode

export const FilterCodeArray = (type: string) => {
  const allcodes = useAppAllcodes()
  const filteredArray = allcodes.filter((item) => item.type ===  type.toLocaleUpperCase())
  return filteredArray
}