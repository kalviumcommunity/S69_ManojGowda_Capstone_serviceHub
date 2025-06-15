const express = require('express')
const route = express.Router();
const userAuth = require('../middleware/userAuth.js')
const sendContactIssue = require('../Controllers/contact.js');


const {register,logIn, logout, googleLogin, sendResetOtp, resetPassword} = require('../Controllers/authentication.js')
const user= require("../Controllers/user.js");
const { Professionals,professional, professionalRegister, sendPro, approvePro, pro } = require('../Controllers/professionals.js');
const { showInquiry, postInquiry, updateInquiryStatus } = require('../Controllers/inquiry.js');
const { reviews, postReview } = require('../Controllers/review.js');
const transaction = require("../Controllers/transaction.js");   
const { profileUpdate, professionalUpd, updatePassword } = require('../Controllers/update.js');
const deleteUser = require("../Controllers/delete.js")

//AUTH ROUTES
route.post("/auth/signup",register);
route.post("/auth/login",logIn);
route.post("/auth/logout",logout)
route.post("/auth/google", googleLogin)
route.post("/auth/resetOtp",sendResetOtp)
route.post("/auth/reset-password",resetPassword)

//USER ROUTES
route.get("/user",userAuth,user);
route.put("/user-update",userAuth, profileUpdate)
route.put("/update-pass",userAuth,updatePassword)
route.delete("/delete",userAuth,deleteUser)
route.post("/contact",sendContactIssue)


//PROFESSIONALS ROUTES
route.get("/professionals/category",userAuth,Professionals)
route.get("/professional",userAuth,professional);
route.get("/recievePro",userAuth,sendPro)
route.post("/register",userAuth,professionalRegister);
route.put("/update-pro",userAuth,professionalUpd)
route.patch("/approvePro",userAuth,approvePro)
route.get("/professional/pro",userAuth,pro)

//INQUIRY ROUTES
route.get("/showInquiry",userAuth,showInquiry);
route.post("/inquiry",userAuth,postInquiry);
route.put('/updateInquiryStatus/:inquiryId',updateInquiryStatus)

//REVIEW ROUTES
route.get("/reviews",userAuth,reviews);
route.post("/review",userAuth,postReview);

//TRANSACTION 
route.get("/transaction",userAuth,transaction)

module.exports = route;