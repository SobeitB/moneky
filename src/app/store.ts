import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import chengedSlice from './chengedSlice'

export const store = configureStore({
  reducer: {
    chengedSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
