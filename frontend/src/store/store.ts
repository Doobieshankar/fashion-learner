import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "@/slices/productSlice"; // or `courseSlice`

// Create the store
export function makeStore() {
  return configureStore({
    reducer: {
      courses: courseReducer, // you access this using state.courses in components
    },
  });
}

// Export a single store instance
export const store = makeStore();

// Export types for state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
