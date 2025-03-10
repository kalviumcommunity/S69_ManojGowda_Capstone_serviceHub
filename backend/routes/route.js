const express = require('express')
const route = express.Router();
const bcrypt = require("bcryptjs");

// Schemas import

const User = require('../models/user')
const Professional = require("../models/registerForm")
const Inquery = require("../models/inquery");
const Review = require('../models/review');
const Transaction = require("../models/transaction")

//routes

//GET

route.get("/professional/:profession", async(req, res) => {
    try{
        const professionals = await Professional.find({ profession : req.params.profession})

        if(professionals.length === 0){
            return res.status(404).json({message : `No users with the role: ${req.params.profession}`})
        }
        res.status(200).json(professionals)
    }catch(err){
        console.error(err);
        res.status(500).json({message : "Internal Server Error:",err})
    } 
});

route.get("/professional/:profession/:id", async(req, res) => {
    try{
         const professional = await Professional.findOne({ _id : req.params.id, role : "professional"})

         if(!professional){
            return res.status(404).json({message : `No professional found with this ${req.params.id}`})
         }
         res.status(200).json(professional)
    }catch(err){
        console.error(err);
         res.status(500).json({message : "Internal server Error:",err})
    }
})

route.get("/users/:id", async(req, res) => {
    try{
        const user = await User.findOne({_id : req.params.id})

        if(!user){
            return res.status(404).json({message : "user not found"})
        }
        res.status(200).json(user);
    }catch(err){
        console.error(err);
        res.status(500).json({message : "Internal server error"})
    }
})

route.get("/inquery/:id", async(req, res) => {
    try{
       const user = await User.findById(req.params.id)
       if(!user){
        return res.status(404).json({message :"user not found"})
       }
       let queries;

       if(user.role === "client"){
        queries = await Inquery.find({clientId : req.params.id})
          .populate("professionalId", "name email role")

       } else if(user.role === "professional"){
          queries = await Inquery.find({professionalId : req.params.id})
           .populate("clientId", "name email role")
       }
       
       res.status(200).json(queries)
    }catch(err){
        console.error(err);
        res.status(500).json({message : "Internal server error"})
    }
})

route.get("/reviews/:userId", async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        let reviews;
        if (user.role === "client") {
            reviews = await Review.find({ clientId: req.params.userId })
                .populate("professionalId", "name email role");
        } else if (user.role === "professional") {
            reviews = await Review.find({ professionalId: req.params.userId })
                .populate("clientId", "name email role");
        } else {
            return res.status(400).json({ message: "Invalid role" });
        }

        res.status(200).json(reviews);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error", error: err });
    }
});

route.get("/transactions/:id", async(req, res) => {
    try{
        const data = await Transaction.find({_id : req.params.id})
        if(data.length === 0){
            return res.status(404).json({message : "No transaction details"})
        }

        res.status(200).json(data)
    }catch(err){
        console.error(err);
        res.status(500).json({message : "Internal server Error"})
    }
}) 

//POST

route.post("/auth/signup", async(req,res) => {
    try{
        const {name, email, role, password} = req.body;
         
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "Email already exists" });
        }

        if(!name || !email || !role || !password){
         return res.status(400).json({message : "All fields are required!"});
        }
        
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({
            name,
            email,
            password : hashedPassword,
            role
        });
        console.log(user);
        res.status(201).json({message : "User signed up successfully"});

    }catch(err){
        console.error(err);
        return res.status(500).json({message : "Internal server Error"})
    }
});

route.post("/auth/login", async(req,res) => {
     try{
        const {email,password} = req.body;

        const user =await User.findOne({email});
        if(!user){
           return res.status(200).json({message : `No user found with email ${email}`});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }

        return res.status(200).json({ message: "User logged in" });
     }catch(err){
        console.error(err);
        res.status(500).json({message : "Internal server Error"})
     }
})

route.post("/register", async(req,res) => {
      try{
         const {fullName,email,profession,experience,location,bio,servicesOffered,availability} = req.body;

         if(!fullName || !email || !profession || !experience || !location || !bio || !servicesOffered || !availability){
            return res.status(400).json({message : "All fields are required"});
         }

         const register =await Professional.create({
            fullName,
            email,
            profession,
            experience,
            location,
            bio,
            servicesOffered,
            availability
         })

         console.log(register);
         res.status(201).json({message : "Registration form received!"})
      }catch(err){
        console.error(err);
        res.status(500).json({message : "Internal Server Error"})
      }
});

route.post("/inquery", async(req,res) => {
     try{
        const {serviceRequested,message,} = req.body;
        if(!message || !serviceRequested){
            return res.status(400).json({message : "All fields are required!"})
        }

        const info =await Inquery.create({
            serviceRequested,
            message
        });
        console.log(info);
        res.status(201).json({message : "Inquery sent successfully"});
     }catch(err){
        console.error(err);
        res.status(500).json({message : "Internal server error"})
     }
});

route.post("/review", async(req,res) => {
      try{
         const {rating,review} = req.body;
         if(!rating || !review){
            return res.status(400).json({message : "All fields are required!"})
        }
        if (typeof rating !== "number" || rating < 1 || rating > 5) {
            return res.status(400).json({ message: "Rating must be a number between 1 and 5." });
          }

        const feedBack = await Review.create({
            rating,
            review
        })
        console.log(feedBack);
        
        res.status(201).json({message : "Review added"})
         
      }catch(err){
        console.error(err);
        res.status(500).json({message : "Internal Server Error"});
      }
});