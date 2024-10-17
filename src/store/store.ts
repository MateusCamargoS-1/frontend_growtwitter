import { configureStore } from '@reduxjs/toolkit';
import authReducer from './models/authSlice';
import tweetReducer from './models/tweetSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    tweets: tweetReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
