import { configureStore } from "@reduxjs/toolkit";
import sidebarStateReducer from "./sidebarState";

export const store = configureStore({
  reducer: {
    sidebarState: sidebarStateReducer,
  },
});
