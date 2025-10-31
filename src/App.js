const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.send('Hello, world!');
});

app.get("/dashboard", (req, res) => {
  res.send('Welcome to the dashboard!');
});

app.get("/profile", (req, res) => {
  res.send('This is your profile page.');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
