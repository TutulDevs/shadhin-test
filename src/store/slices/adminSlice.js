import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  admins: [],
  
  isLoading: false,
};

export const getAdmins = createAsyncThunk(
  //action type string
  "user/getAdmins",
  // callback function
  async (thunkAPI) => {
    const res = await fetch(
      "https://60f2479f6d44f300177885e6.mockapi.io/users?user_type=admin"
    ).then((data) => data.json());
    return res;
  }
);

export const adminSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addAdmin: (state, action) => {
      state.admins.push(action.payload);
    },
   
  },
  extraReducers: {
    [getAdmins.pending]: (state) => {
      state.isLoading = true;
    },
    [getAdmins.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.admins = payload;
    },
    [getAdmins.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addAdmin,  } = adminSlice.actions;

export default adminSlice.reducer;
