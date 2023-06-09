import { createSelector } from "@reduxjs/toolkit";

export const studentSelector = (state) =>  state.students;


export const studentsSelector = createSelector(
    studentSelector,
    (student) => {
        console.log(student)
        return student
    }
)