import userSlice from "@/redux/features/userSlice";
import counterSlice from "@/redux/features/counterSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    user: userSlice,
    counter: counterSlice,
  },
});
export default store;
