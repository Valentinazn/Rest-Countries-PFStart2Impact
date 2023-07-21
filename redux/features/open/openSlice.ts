import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface isOpenState {
  open: boolean;
}

const initialState: isOpenState = {
  open: false,
};

const isOpenSlice = createSlice({
  name: "open",
  initialState,
  reducers: {
    isOpen(state) {
      state.open = !state.open;
    },
  },
});

export default isOpenSlice.reducer;

export const { isOpen } = isOpenSlice.actions;
