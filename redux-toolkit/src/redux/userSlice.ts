import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type UserSlice = {
  name: string;
}

const initialState: UserSlice = {
  name: ''
}

const userSlice =
  createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    }
  }
})

export const {setUserName} = userSlice.actions

export default userSlice.reducer