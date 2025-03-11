const express = require('express')
const route = express.Router();

const {register,logIn} = require('../Controllers/authentication.js')
const {user} = require("../Controllers/user.js");
const { Professionals,Professional, professionalRegister } = require('../Controllers/professionals.js');
const { showInquiry, postInquiry } = require('../Controllers/inquiry.js');
const { reviews, postReview } = require('../Controllers/review.js');

//AUTH ROUTES
route.post("/auth/sigup",register);
route.post("auth/login",logIn);

//USER ROUTES
route.get("/user/:id",user);

<<<<<<< Updated upstream
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

=======
//PROFESSIONALS ROUTES
route.get("professional/:profession",Professionals)
route.get("professional/profession/:id",Professional);
route.post("/register",professionalRegister);

//INQUIRY ROUTES
route.get("/inquiry/:id",showInquiry);
route.post("/inquiry",postInquiry);

//REVIEW ROUTES
route.get("/reviews/:userId",reviews);
route.post("/review",postReview);

//TRANSACTION 
route.get("/transaction/:id",transaction)
>>>>>>> Stashed changes
