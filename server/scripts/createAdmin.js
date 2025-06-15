const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config({ path: './config/.env' });

const User = require("../models/user"); 

const createAdmin = async () => {
  try {
    await mongoose.connect(`${process.env.DB_URL}`, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });

    const existingAdmin = await User.findOne({ email: process.env.ADMIN_EMAIL });
    if (existingAdmin) {
      console.log("Admin already exists");
      return;
    }

    const hashedPassword =  bcrypt.hash(process.env.ADMIN_PASS, 10);
    
    const admin = new User({
      name: "Manoj Gowda",
      email: process.env.ADMIN_EMAIL,
      password: hashedPassword,
      role: "admin"
    });

    await admin.save();
    console.log("Admin created successfully!");
  } catch (err) {
    console.error("Error creating admin:", err);
  } finally {
    mongoose.connection.close();
  }
};

createAdmin();
