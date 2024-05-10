import { createSlice } from '@reduxjs/toolkit';

export const isLoggedIn = createSlice({
  name: 'isLoggedIn',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload ?? false;
    },
  },
});

export const { setIsLoggedIn } = isLoggedIn.actions;

export const getIsLoggedIn = (state) => state.isLoggedIn.isLoggedIn;

export const auth = createSlice({
  name: 'auth',
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload ;
    },
  },
});

export const { setToken } = auth.actions;

export const getToken = (state) => state.auth.token;