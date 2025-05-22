import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
  };
  
  const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
      setCurrentUser: (state, action) => {
        state.currentUser = action.payload;
      },
      enrollment: (state, action) => {
        const courseId = action.payload;
        if (!state.currentUser || state.currentUser.role !== "STUDENT") return;
        const enrolled = state.currentUser.enrolledCourses || [];
  
        if (enrolled.includes(courseId)) {
          state.currentUser.enrolledCourses = enrolled.filter((id) => id !== courseId);
        } else {
          state.currentUser.enrolledCourses = [...enrolled, courseId];
        }
      },
    },
  });
  
  export const { setCurrentUser, enrollment } = accountSlice.actions;
  export default accountSlice.reducer;
  