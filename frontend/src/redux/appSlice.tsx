import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ConvertedCodeType, User, languageType, SpecialtyDetails } from '../utils/types';
import { OriginalCode } from '../utils/types';

export interface initialState {
  languages: languageType;
  isLoggedIn: boolean;
  translationCodes: ConvertedCodeType;
  allCodes: OriginalCode[];
  allDoctors: User[];
  allSpecialtiesDetail: SpecialtyDetails[];
}

const initialState: initialState = {
  languages: 'en',
  isLoggedIn: false,
  translationCodes: {},
  allCodes: [],
  allDoctors: [],
  allSpecialtiesDetail: [],
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
} = appSlice.actions;
