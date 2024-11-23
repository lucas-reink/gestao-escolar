const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  enrollment: { type: String, required: true, unique: true },
  class: { type: String, required: true },
  status: { type: String, required: true },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
