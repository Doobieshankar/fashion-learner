const mongoose = require("mongoose");
const validator = require("validator");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Course title is required"],
      unique: true,
      trim: true,
      minlength: [3, "Title must be at least 3 characters"],
      maxlength: [100, "Title must be under 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Course description is required"],
      minlength: [10, "Description must be at least 10 characters"],
    },
    duration: {
      type: Number,
      required: [true, "Course duration is required"],
      min: [1, "Duration must be at least 1 hour"],
      max: [1000, "Duration cannot exceed 1000 hours"],
    },
    instructorEmail: {
      type: String,
      required: [true, "Instructor email is required"],
      validate: {
        validator: (value) => validator.isEmail(value),
        message: "Invalid email format",
      },
    },
    image: {
      type: String,
      required: [true, "Course image URL is required"],
      validate: {
        validator: (value) => validator.isURL(value),
        message: "Invalid image URL format",
      },
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
