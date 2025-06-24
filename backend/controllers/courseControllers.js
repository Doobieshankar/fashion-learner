const Course = require("../models/courseModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middlewares/catchAsyncError");

// Create a new course
exports.createCourse = catchAsyncError(async (req, res, next) => {
  console.log("creating a course");

  const courseData = req.body;
  const course = new Course(courseData);
  await course.save();
  res.status(201).json(course);
});

// Get all courses
exports.getAllCourses = catchAsyncError(async (req, res, next) => {
  const courses = await Course.find();
  res.json(courses);
});

// Get a single course by ID
exports.getCourseById = catchAsyncError(async (req, res, next) => {
  const course = await Course.findById(req.params.id);
  if (!course) return res.status(404).json({ error: "Course not found" });
  res.json(course);
});

// Update a course
exports.updateCourse = catchAsyncError(async (req, res, next) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!course) return res.status(404).json({ error: "Course not found" });
  res.json(course);
});

// Delete a course
exports.deleteCourse = catchAsyncError(async (req, res, next) => {
  const course = await Course.findByIdAndDelete(req.params.id);
  if (!course) return res.status(404).json({ error: "Course not found" });
  res.json({ message: "Course deleted successfully" });
});
