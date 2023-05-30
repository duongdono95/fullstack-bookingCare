import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Code, languageType } from '../utils/types';

export interface initialState {
  languages: languageType;
  isLoggedIn: boolean;
  allCode: Code[];
}

const initialState: initialState = {
  languages: 'en',
  isLoggedIn: false,
  allCode: [],
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
    saveAllCode: (state, action: PayloadAction<Code[]>) => {
      const fetchedCode = action.payload;
      state.allCode = fetchedCode;
    },
  },
});

// Action creators are generated for each case reducer function
export const { switchLanguage, loginSuccess, logOut, saveAllCode } = appSlice.actions;
// export default appSlice.reducer;
