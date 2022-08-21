import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = configureStore({
  reducer: {
    auth:authSlice,
   
  },
});
