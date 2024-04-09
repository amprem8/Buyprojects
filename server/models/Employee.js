// models/Employee.js

const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: {
      type: String,
      unique: true, // Ensuring email uniqueness
      required: true
    },
    password: {
      type: String,
      required: true
    },
    domain: String
});

const EmployeeModel = mongoose.model("employees", EmployeeSchema);
module.exports = EmployeeModel;
