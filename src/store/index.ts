import { configureStore } from '@reduxjs/toolkit';
import themeHandler from '../redux/themeHandler';

const store = configureStore({
  reducer: {
    theme: themeHandler
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
