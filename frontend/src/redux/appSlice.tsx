import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  ConvertedCodeType,
  User,
  languageType,
  SpecialtyDetails,
  ClinicDetails,
} from '../utils/types';
import { OriginalCode } from '../utils/types';

export interface initialState {
  languages: languageType;
  isLoggedIn: boolean;
  translationCodes: ConvertedCodeType;
  allCodes: OriginalCode[];
  allDoctors: User[];
  allSpecialtiesDetail: SpecialtyDetails[];
  allClinics: ClinicDetails[];
}

const initialState: initialState = {
  languages: 'en',
  isLoggedIn: false,
  translationCodes: {},
  allCodes: [],
  allDoctors: [],
  allSpecialtiesDetail: [],
  allClinics: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    switchLanguage: (state, action: PayloadAction<languageType>) => {
      const language = action.payload;
      state.languages = language;
    },
    loginSuccess: (state) => {
      console.log('login success');
      return {
        ...state,
        isLoggedIn: true,
      };
    },
    logOut: (state) => {
      console.log('log out');
      return {
        ...state,
        isLoggedIn: false,
      };
    },
    saveTranslationCodes: (state, action: PayloadAction<ConvertedCodeType>) => {
      const fetchedCode = action.payload;
      state.translationCodes = fetchedCode;
    },
    saveAllCodes: (state, action: PayloadAction<OriginalCode[]>) => {
      const fetchedCode = action.payload;
      state.allCodes = fetchedCode;
    },
    saveAllDoctors: (state, action: PayloadAction<User[]>) => {
      const fetchedDoctor = action.payload;
      state.allDoctors = fetchedDoctor;
    },
    saveAllSpecialties: (state, action: PayloadAction<SpecialtyDetails[]>) => {
      const allSpecialties = action.payload;
      state.allSpecialtiesDetail = allSpecialties;
    },
    saveAllClinics: (state, action: PayloadAction<ClinicDetails[]>) => {
      const allClinics = action.payload;
      state.allClinics = allClinics;
    },
  },
});

export const {
  switchLanguage,
  loginSuccess,
  logOut,
  saveTranslationCodes,
  saveAllCodes,
  saveAllDoctors,
  saveAllSpecialties,
  saveAllClinics,
} = appSlice.actions;
