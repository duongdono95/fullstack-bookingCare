import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { LANGUAGES } from '../utils/constants';
import { languageType } from '../utils/types';

export interface initialState {
  languages: languageType;
  isLoggedIn: boolean;
}

const initialState: initialState = {
  languages: 'en',
  isLoggedIn: false,
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
  },
});

// Action creators are generated for each case reducer function
export const { switchLanguage, loginSuccess, logOut } = appSlice.actions;
// export default appSlice.reducer;
