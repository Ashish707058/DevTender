const express = require('express');
const {adminAuth,userAuth} = require('./src/middleware/auth');
const app = express();


app.use("/admin",adminAuth);
app.use("/user", userAuth,
);
 
app.get("/admin/dashboard", (req, res) => {
  res.send('Welcome to the admin dashboard!');
});

app.get("/user/dashboard", (req, res) => {
  res.send('Hello, world!');
});

app.get("/user/delete",(req,res)=>{
  res.send("this is resp 2nd")

})
// app.get("/dashboard", (req, res) => {
//   res.send('Welcome to the dashboard!');
// });

// app.get("/profile", (req, res) => {
//   res.send('This is your profile page.');
// }); 
//
  // Exploring POST and DELETE methods
// app.post("/user", (req, res) => {
//   res.send('post User created successfully.');
// });
// app.delete("/user", (req, res) => {
//   res.send('User deleted successfully.');
// }); 

// app.get("/user/:userId/:name/:password", (req, res) => {
//   console.log(req.params);
//   res.send({firstNaame:"Ashish", lastName:"Kumar" });
// });



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
