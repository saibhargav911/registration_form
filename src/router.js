const express=require('express');
const router=express.Router();
const db=require("./db");

router.get("/", (req, res) => {
    res.render("homePage");
  });
  //succesful page route
  router.post("/succesful", async(req, res) => {
      try{
    const employeeDetails=new db.RegistrationForm({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    emailId:req.body.email,
    password:req.body.password,
    mobileNumber:req.body.mobileNumber,
    companyName:req.body.companyName
    })
    const result=await employeeDetails.save();
    res.status(201).send(result);
  }
  catch(err){
    res.status(400).send(err);
  }
});
 
  module.exports=router;