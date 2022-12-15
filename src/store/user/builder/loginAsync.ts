import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { loginAsync } from '../thunks';
import { UserState } from '../user.types';

export const loginAsyncBuilder = (builder: ActionReducerMapBuilder<UserState>) => {
  builder
    .addCase(loginAsync.pending, (state) => {
      state.loading = true;
      state.error = '';
    })
    .addCase(loginAsync.fulfilled, (state, { payload }) => {
      localStorage.setItem('token', payload.token);
      state.loading = false;
      state.data = payload.user;
      state.token = payload.token;
    })
    .addCase(loginAsync.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload as string;
    });
};
