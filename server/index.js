// server.js

const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const DashboardModel = require('./models/Dashboard');
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee");

app.post("/dashboard", async (req, res) => {
  try {
    const dashboardData = await DashboardModel.create(req.body);
    res.status(201).json(dashboardData);
  } catch (error) {
    console.error('Error saving dashboard details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await EmployeeModel.findOne({ email });
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record exists");
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/register', async (req, res) => {
  try {
    const newEmployee = await EmployeeModel.create(req.body);
    res.json(newEmployee);
  } catch (error) {
    console.error('Error registering new employee:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3001, () => {
  console.log("server is running");
});
