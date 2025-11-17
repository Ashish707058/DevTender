const adminAuth = (req, res, next) => {
  console.log("Middleware for /admin");
  const Token = "abc";
  const isAdminAuthenticated = Token === "abc"; // Simulated authentication check
  if (!isAdminAuthenticated){
    return res.status(403).send("Access denied");
  }
  else{    
    next();
  }
}

const userAuth =(req, res, next) => {
  console.log("Middleware for /user");
  const Token = "xyz";
  const isUserAuthenticated = Token === "xyz"; // Simulated authentication check
  if (!isUserAuthenticated){
    console.log("User authenticated");
    return res.status(403).send("Access denied");  

  }
  else{
    next();
  }
}
module.exports = { adminAuth, userAuth };