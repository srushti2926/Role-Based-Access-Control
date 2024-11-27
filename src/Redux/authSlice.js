import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentRole: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentRole: (state, action) => {
      state.currentRole = action.payload;
    },
    clearCurrentRole: (state) => {
      state.currentRole = "";
    },
  },
});

export const { setCurrentRole, clearCurrentRole } = authSlice.actions;
export default authSlice.reducer;
