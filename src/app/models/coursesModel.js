const mongoose =  require("mongoose")

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  courseTime: {
    type: String, 
    required: true,
  },
  totalStudents: {
    type: Number,
    default: 0,
    min: 0,
  },
  imageLink: {
    type: String,
    required: true,
    
  },
}, { timestamps: true })

const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);

module.exports = Course;
