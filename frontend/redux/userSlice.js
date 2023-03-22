import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: "",
  sex: "",
  email: "",
  loading: false,
  error: false,
  isLoggedIn: false,
  doctor: false, // new field
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
      state.doctor = action.payload.doctor; // set the doctor field
    },
    logout: (state) => {
      return initialState;
    },
    updateDoctor: (state) => {
      state.doctor = true;
    },
  },
});

export const { loginStart, loginSuccess, logout, updateDoctor } =
  userSlice.actions;
export default userSlice.reducer;
