import { configureStore } from '@reduxjs/toolkit';
import { uiSlice, calendarSlice, authSlice } from './';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    calendar: calendarSlice.reducer,
    ui: uiSlice.reducer
  },
  //paara q revise que la fechas no se pueden serializar
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false 
  })
})