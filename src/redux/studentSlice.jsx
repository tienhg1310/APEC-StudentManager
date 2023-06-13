import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import URL from "../component/Data/URL";
import axios from "axios";



const studentSlice =  createSlice({
  name: "students",
  initialState: {status : "idle", students: []},
  reducers: {
    
    addStudent: (state, action) => {
        state.push(action.payload)
    },
    deleteStudent: (state, action) =>{
      
      state.filter((item) => {item.id !== action.payload})
      return state
    }
  },
  extraReducers: (builder) =>{ 
    builder
    .addCase(fetchStudents.pending, (state, action) => {
      state.status = 'loading';
    })
    .addCase(fetchStudents.fulfilled, (state, action) => {
      state.students = action.payload;
      state.status = 'idle';
    })
  }
});


export const fetchStudents = createAsyncThunk("students/fetchStudents", async() => {
  const response = await axios.get(
    "https://647a1c60a455e257fa6453f5.mockapi.io/students",
  )
  const jsonData = response.data;
  console.log(jsonData)
  return jsonData
})

export default studentSlice;

