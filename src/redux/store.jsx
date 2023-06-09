import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./studentSlice";

const store = configureStore({
    reducer: {
        students: studentSlice.reducer
    }
})
export default store