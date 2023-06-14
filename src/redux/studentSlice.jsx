import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import URL from "../component/Data/URL";
import axios from "axios";

const studentSlice = createSlice({
  name: "students",
  initialState: { status: "idle", students: [] },
  // reducers: {

  //   addStudent: (state, action) => {
  //       state.push(action.payload)
  //   },
  //   deleteStudent: (state, action) =>{
  //     state.filter((item) => {item.id !== action.payload})
  //     return state
  //   }
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.students = action.payload;
        state.status = "idle";
      })
      .addCase(addNewStudent.fulfilled, (state, action) => {
        state.students.push(action.payload);
      })
      .addCase(deleteTheStudent.fulfilled, (state, action) => {
        const selectedId = action.payload.id;
        const index = state.students.findIndex(
          (student) => student.id === selectedId
        );
        if (index !== -1) {
          state.students.splice(index, 1);
        }
      })
      .addCase(changeTheStudent.fulfilled, (state, action) => {
        const selectedId = action.payload.id;
        state.students.map((student) => {
          if (student.id === selectedId) {
            return {
              born: action.payload.born,
              english_point: action.payload.english_point,
              favorite: action.payload.favorite,
              first_name: action.payload.first_name,
              id: action.payload.id,
              last_name: action.payload.last_name,
              literature_point: action.payload.literature_point,
              math_point: action.payload.math_point,
              sex: action.payload.sex,
            };
          }
        });
      });
  },
});

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const response = await axios.get(`${URL}/students`);
    const jsonData = response.data;
    return jsonData;
  }
);

export const addNewStudent = createAsyncThunk(
  "students/addNewStudent",
  async (newStudent) => {
    const res = await axios.post(`${URL}/students`, newStudent);
    return res.data;
  }
);

export const deleteTheStudent = createAsyncThunk(
  "students/deleteStudent",
  async (id) => {
    const res = await axios.delete(`${URL}/students/${id}`);
    // console.log(res.data)
    return res.data;
  }
);

export const changeTheStudent = createAsyncThunk(
  "students/changeStudent",
  async (id, changeStudent) => {
    const res = await axios.put(`${URL}/students/${id}`, changeStudent);
    console.log(res.data);
    return res.data;
  }
);

export default studentSlice;
