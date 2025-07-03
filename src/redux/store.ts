import { configureStore } from '@reduxjs/toolkit';
import gymnastReducer from './slices/gymnastSlice';
import userReducer from './slices/gymnastSlice'; // וודאי שיש לך userSlice נפרד

export const store = configureStore({
  reducer: {
    gymnast: gymnastReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
