const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    StudentId : Number,
    Name : String,
    Roll : Number,
    Birthday : Date, 
    Address : String
});

const student = mongoose.model("Student", studentSchema)

module.exports = student