import { configureStore } from "@reduxjs/toolkit";
import telegramReducer from "./slices/telegramSlice";

export const store = configureStore({
  reducer: {
    telegram: telegramReducer,
  },
});
