// src/redux/telegramSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  telegramData: null,
};

const telegramSlice = createSlice({
  name: "telegram",
  initialState,
  reducers: {
    setTelegramData: (state, action) => {
      state.telegramData = action.payload;
    },
  },
});

export const { setTelegramData } = telegramSlice.actions;
export default telegramSlice.reducer;
