import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roles: [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
    { id: 3, name: "Viewer", permissions: ["Read"] },
  ],
  loading: false,
};

const roleSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {
    addRole: (state, action) => {
      const existingRole = state.roles.find(
        (role) => role.name === action.payload.name
      );
      if (!existingRole) {
        state.roles.push({ ...action.payload, id: Date.now() });
      }
    },
    editRole: (state, action) => {
      const index = state.roles.findIndex(
        (role) => role.id === action.payload.id
      );
      if (index !== -1) {
        state.roles[index] = { ...state.roles[index], ...action.payload };
      }
    },
    deleteRole: (state, action) => {
      state.roles = state.roles.filter((role) => role.id !== action.payload);
    },
    modifyPermissions: (state, action) => {
      const role = state.roles.find((role) => role.id === action.payload.id);
      if (role) {
        role.permissions = action.payload.permissions;
      }
    },
  },
});
export const { addRole, editRole, deleteRole, modifyPermissions } =
  roleSlice.actions;
export default roleSlice.reducer;
