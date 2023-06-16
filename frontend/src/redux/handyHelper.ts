import { useSelector } from 'react-redux';
import { RootState } from './store';
import { ConvertedCodeType, OriginalCode } from '../utils/types';

export const useSelectorTranslationAllCode = () =>
  useSelector((state: RootState) => state.translationCodes);
export const useSelectorLanguage = () => useSelector((state: RootState) => state.languages);
export const useAppAllcodes = () => useSelector((state: RootState) => state.allCodes);
export const useSelectorDoctor = () => useSelector((state: RootState) => state.allDoctors);
export const useSelectorClinics = () => useSelector((state: RootState) => state.allClinics)
export const useSelectorSpecialties = () =>
  useSelector((state: RootState) => state.allSpecialtiesDetail);
export const ConvertedAllCode = (codeArray: OriginalCode[]) => {
  const transformedArray: ConvertedCodeType = {};
  codeArray?.forEach((obj) => {
    const { keyMap, valueEn, valueVi } = obj;
    transformedArray[keyMap] = { valueEn, valueVi };
  });
  return transformedArray;
};

export const FilterCodeArray = (type: string) => {
  const allcodes = useAppAllcodes();
  const filteredArray = allcodes.filter((item) => item.type === type.toLocaleUpperCase());
  return filteredArray;
};

export const FilterSpecialties = (specialtyId: number | number[]) => {
  const allSpecialties = useSelectorSpecialties();
  const filteredSpecialty = allSpecialties.filter((item) => {
    return item.id === specialtyId;
  });
  return filteredSpecialty[0];
};

