import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import roleReducer from "./roleSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    roles: roleReducer,
    auth: authReducer,
  },
});

export default store;
