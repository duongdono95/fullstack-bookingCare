import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import authService from './authService';
//  use a extractErrorMessage function to save some repetition
import { extractErrorMessage } from '../../utils/utils';

// Get user from localstorage
const user = JSON.parse(localStorage.getItem('user'));

// There is no need for a reset function as we can do this in our pending cases
// No need for isError or message as we can catch the AsyncThunkAction rejection
const initialState = {
  user: user ? user : null,
  isLoading: false,
};

// Register new user
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
  try {
    return await authService.register(user);
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
});

// Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
});

// Logout user

export const logout = createAction('auth/logout', () => {
  authService.logout();
  return {};
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
