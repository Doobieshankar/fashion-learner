import { AppDispatch } from "@/store/store";
import { setCourses } from "@/slices/productSlice"; // or courseSlice

export const fetchCourses = () => async (dispatch: AppDispatch) => {
  try {
    const res = await fetch("/api/v1/courses");
    if (!res.ok) {
      throw new Error("Failed to fetch courses");
    }

    const data = await res.json();
    dispatch(setCourses(data));
  } catch (error) {
    console.error("Error fetching courses:", error);
    // Optionally, dispatch an error action or show a toast
  }
};
