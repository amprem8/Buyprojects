const mongoose = require('mongoose');

const dashboardSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true
  },
  domain: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  videoLink: {
    type: String,
    required: true
  },
  selectedFolder: {
    type: Object,
    required: true
  },
  sampleImage: {
    type: Object,
    required: true
  }
});

const Dashboard = mongoose.model('users', dashboardSchema, 'employee');

module.exports = Dashboard;