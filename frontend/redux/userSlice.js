import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: "",
  sex: "",
  email: "",
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
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.sex = action.payload.sex;
      state.email = action.payload.email;
    },
    logout: (state) => {
      return initialState;
    },
  },
});

export const { loginStart, loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
