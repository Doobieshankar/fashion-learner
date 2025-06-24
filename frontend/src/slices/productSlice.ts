import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define course interface
export interface Course {
  _id?: string;
  title: string;
  description: string;
  duration: number;
  instructorEmail: string;
  image: string;
}

// Define state interface
interface CourseState {
  course: Course[];
  loading: boolean;
}

// Initial state with correct type
const initialState: CourseState = {
  course: [],
  loading: false,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourses: (state, action: PayloadAction<Course[]>) => {
      state.course = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setCourses, setLoading } = courseSlice.actions;
export default courseSlice.reducer;
