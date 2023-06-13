import { createSelector } from "@reduxjs/toolkit";

export const studentSelector = (state) =>  state.students.students;


export const studentsSelector = createSelector(
    studentSelector,
    (students) => {
        return students
    }
)