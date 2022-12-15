import { createSlice } from '@reduxjs/toolkit';
import { UserData } from 'types';
import { loginAsyncBuilder } from './builder';
import { initialState } from './initialState';

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.loading = false;
      state.data = {} as UserData;
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    loginAsyncBuilder(builder);
  },
});

export default userSlice.reducer;
