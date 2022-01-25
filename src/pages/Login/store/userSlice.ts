import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "interfaces";
import { RootState } from "store/store";

const initialState: IUser = {
  firstName: "",
  secondName: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setUserData: (state, action: PayloadAction<IUser>) => {
      const { firstName, secondName, email } = action.payload;
      state.firstName = firstName;
      state.secondName = secondName;
      state.email = email;
    },
  },
});

export const { setUserData } = userSlice.actions;

export const selectName = (state: RootState) => state.user.firstName;
export const selectSurname = (state: RootState) => state.user.secondName;
export const selectEmail = (state: RootState) => state.user.email;
export const selectFullname = (state: RootState) =>
  `${state.user.firstName} ${state.user.secondName}`;

export default userSlice.reducer;
