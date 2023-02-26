import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  firstName: "",
  LastName: "",
  Email: "",
  Password: "",
  loading: false,
  error: false,
  isLoggedIn: false,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      return initialState;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;
export default userSlice.reducer;
