"use client";

import React, { useEffect } from "react";
import { fetchCourses } from "@/actions/productActions"; // assumed to be an async thunk
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { setLoading } from "@/slices/productSlice"; // setCourses not needed if using thunk

const Home = () => {
  const { course, loading } = useSelector((state: RootState) => state.courses);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("fetching courses FROM useEffect");

    const loadCourses = async () => {
      dispatch(setLoading(true));
      await dispatch(fetchCourses()); // assume fetchCourses is an async thunk that calls setCourses
      dispatch(setLoading(false));
    };

    loadCourses();
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      <ul>
        {course.map((item) => (
          <li key={item._id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
