import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
  isLoading: false,
};

export const getEmployees = createAsyncThunk(
  //action type string
  "user/getEmployees",
  // callback function
  async (thunkAPI) => {
    const res = await fetch(
      "https://60f2479f6d44f300177885e6.mockapi.io/users?user_type=employee"
    ).then((data) => data.json());
    return res;
  }
);

export const employeeSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
  },
  extraReducers: {
    [getEmployees.pending]: (state) => {
      state.isLoading = true;
    },
    [getEmployees.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.employees = payload;
    },
    [getEmployees.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
