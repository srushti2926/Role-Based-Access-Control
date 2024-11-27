import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: 1, name: "Charlie", role: "Editor", status: "Inactive" },
    { id: 2, name: "Jake", role: "Editor", status: "Active" },
    { id: 3, name: "Yara", role: "Admin", status: "Inactive" },
    { id: 4, name: "Mia", role: "Admin", status: "Inactive" },
    { id: 5, name: "Jack", role: "Admin", status: "Inactive" },
    { id: 6, name: "Sophia", role: "Editor", status: "Inactive" },
    { id: 7, name: "Thomas", role: "Admin", status: "Active" },
    { id: 8, name: "Henry", role: "Admin", status: "Inactive" },
  ],
  loading: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push({ ...action.payload, id: Date.now() });
    },
    editUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = { ...state.users[index], ...action.payload };
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    toggleUserStatus: (state, action) => {
      const user = state.users.find((user) => user.id === action.payload);
      if (user) {
        user.status = user.status === "Active" ? "Inactive" : "Active";
      }
    },
  },
});

export const { addUser, editUser, deleteUser, toggleUserStatus } =
  userSlice.actions;
export default userSlice.reducer;
