import { createSlice } from "@reduxjs/toolkit";
import API from "../component/Data/API";

export default createSlice({
  name: "students",
  initialState: API,
  reducers: {
    addStudent: (state, action) => {
      state.push(action.payload);
    },
    deleteStudent: (state, action) => {
      console.log(action.payload)
      state.filter((item) => {
        item.id !== action.payload;
      });
      return state;
    },
  },
});
