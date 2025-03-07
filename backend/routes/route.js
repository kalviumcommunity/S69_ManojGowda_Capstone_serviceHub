const express = require('express')
const route = express.Router();

// Schemas import

const User = require('../models/user')
const Professional = require("../models/registerForm")
const Inquery = require("../models/inquery");
const Review = require('../models/review');
const Transaction = require("../models/transaction")

//routes

route.get("/professional/:profession", async(req, res) => {
    try{
        const professionals = await Professional.find({ profession : req.params.profession})

        if(professionals.length === 0){
            return res.status(404).json({message : `No users with the role: ${req.params.profession}`})
        }
        res.status(200).json(professionals)
    }catch(err){
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
        res.status(500).json({message : "Internal server Error"})
    }
}) 

