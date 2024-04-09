const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const DashboardModel = require('./models/Dashboard'); // Import Dashboard model
const EmployeeModel = require('./models/Employee.js');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee");

// Route to store dashboard data into the 'users' collection
app.post("/dashboard", async (req, res) => {
  try {
    const dashboardData = await DashboardModel.create(req.body); // Use DashboardModel
    res.status(201).json(dashboardData);
  } catch (error) {
    console.error('Error saving dashboard details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("No record existed");
      }
    })
});

app.post('/register', (req, res) => {
  EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
});

app.listen(3001, () => {
  console.log("server is running");
});
