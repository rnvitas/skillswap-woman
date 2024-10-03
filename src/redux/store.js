import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import skillsSlice from "./skillsSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
    skills: skillsSlice,
  },
});

export default store;
