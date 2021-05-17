//db
//requiring mongoose
const mongoose = require('mongoose');
const validator = require('validator');

//creating database
mongoose.connect("mongodb://localhost:27017/mydb", {useCreateIndex:true, useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false})
.then(()=>{
   console.log('connected to database')
})
.catch((err)=>{
   console.log("error connecting database");
});
//creating a schema for with the following fields
const registerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength:3,
        maxlength:20,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        minlength:3,
        maxlength:20,
        trim:true
    },
    emailId: {
        type: String,
        required:true,
        unique:[true,"Email already exists"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    password: {
        type:String,
        required:true,
        minlength:5,
    },
    mobileNumber: {
        type: String,
        required: true,
        unique:[true,"mobile number already exists"],
        minlength:[10,"invalid mobile number"]
    },
    companyName:{
        type:String,
        required: true,
        trim:true,
        minlength:5
    }
    

});
//creating a collection
const RegistrationForm=new mongoose.model("RegistrationForm",registerSchema);


//exporting a document
module.exports={RegistrationForm};
