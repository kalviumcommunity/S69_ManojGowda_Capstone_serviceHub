const User = require("../models/user")
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const transporter = require('../config/nodemailer')
const axios = require('axios');
const user = require("../models/user");

require('dotenv').config()

const register =  async (req, res) => {
    try {
        const { name, email, role, password } = req.body;

        if (!name || !email || !role || !password) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });

        const token = jwt.sign({id : user._id}, process.env.JWT_SECRET, {expiresIn : process.env.JWT_EXP || '1h'});

        res.cookie('token', token, {
            httpOnly : true,
            secure : process.env.NODE_ENV === 'production',
            sameSite : process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge : 24 * 60 * 60 * 1000
        });

        const mail = {
            from: process.env.SMTP_USER,
            to: email,
            subject: "Welcome to ServiceHub",
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #e5e7eb; background-color: #111827; padding: 20px; border-radius: 10px; max-width: 600px; margin: auto;">
                    <h2 style="color:rgb(255, 255, 253); text-align: center;">Welcome to serviceHub!</h2>
        
                    <p class="text-gray-300">Dear <strong>${name}</strong>,</p>
        
                    <p class="text-gray-300">
                        We are excited to have you on board! <strong>serviceHub</strong> is designed to streamline your inquiries, making it easy to send, track, and manage requests effortlessly.
                    </p>
        
                    <p class="text-gray-300"><strong>What you can do with serviceHub:</strong></p>
                    <ul style="list-style-type: none; padding: 0;">
                        <li style="margin: 5px 0;">✅ Submit inquiries seamlessly</li>
                        <li style="margin: 5px 0;">✅ Track the status of your requests in real time</li>
                    </ul>
        
                    <p class="text-gray-300">
                        Get started by logging into your account and exploring the dashboard. If you have any questions, our support team is here to help!
                    </p>
        
                    <div style="text-align: center; margin-top: 20px;">
                        <a href="YOUR_LOGIN_LINK_HERE" 
                           style="display: inline-block; background-color: #3b82f6; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">
                            Login to ServiceHub
                        </a>
                    </div>
        
                    <p class="text-gray-300" style="margin-top: 20px;">We are glad to have you with us!</p>
        
                    <p class="text-gray-400">Best regards,</p>
                    <p class="text-gray-400"><strong>The ServiceHub Team</strong></p>
                </div>
            `
        };

        try {
            await transporter.sendMail(mail);
        } catch (emailErr) {
            console.error("Email not sent:", emailErr);
            return res.status(500).json({ message: "User created, but email sending failed. Please contact support." });
        }
        

        console.log(user);
        res.status(201).json({ message: "User signed up successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const logIn =  async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({message : "email and password are required"})
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: `No user found with email ${email}` });
        }
        
        //Authenticating user based on the hased password stored in the dataBase

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = jwt.sign({id : user._id}, process.env.JWT_SECRET, {expiresIn : '1h'});

        res.cookie('token', token, {
            httpOnly : true,
            secure : process.env.NODE_ENV === 'production',
            sameSite : process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge : 24 * 60 * 60 * 1000
        })

        return res.status(200).json({ message: "User logged in" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const logout = async(req,res) => {
   try{
    res.clearCookie('token', {
        httpOnly : true,
        secure : process.env.NODE_ENV === 'production',
        sameSite : process.env.NODE_ENV === 'production' ? 'none' : 'strict' 
    })

    return res.json({message : "logged out"});

   }catch(err){
      res.json({message : `${err}`})
   }
}

const googleLogin = async (req, res) => {
    const { token, role } = req.body; 

    try {
        
        const googleResponse = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`);
        
        if (!googleResponse.data.email) {
            return res.status(401).json({ message: "Invalid Google Token" });
        }

        const { email, name, picture, sub } = googleResponse.data; 

        
        let user = await User.findOne({ email});

        if (!user) {
            
            const randomPassword = Math.random().toString(36).slice(-8);
            const hashedPassword = await bcrypt.hash(randomPassword, 10);

            
            user = new User({
                googleId: sub,
                name,
                email,
                password: hashedPassword,  
                picture,
                provider: "google",
                role: role || "client"  
            });

            await user.save();
        }

        
        const jwtToken = jwt.sign(
            { id: user._id, name: user.name, email: user.email, picture: user.picture, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        
        res.cookie("token", jwtToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 1000 
        });

        res.json({ message: "Login successful", token: jwtToken });

    } catch (error) {
        console.error("Google Auth Error:", error);
        res.status(401).json({ message: "Invalid Google Token" });
    }
};

const sendResetOtp = async(req, res) => {
    try{
      const {email} = req.body;

      if(!email){
        return res.status(400).json({message : "email is required!"})
      }

      const User = await user.findOne({email});
      if(!User){
        return res.status(404).json({message : "No user found"})
      }

      const otp = String(Math.floor(10000 + Math.random() * 900000));
      User.resetOtp = otp;
      User.resetOtpExpireAt = Date.now() + 15 * 50 * 1000

      await User.save();

      const mail = {
        from: process.env.SMTP_USER,
        to: email,
        subject: "Reset Your Password - ServiceHub",
        html: `
          <div style="font-family: Arial, sans-serif; background-color: #111827; padding: 20px; border-radius: 10px; max-width: 600px; margin: auto; color: #e5e7eb;">
            <h2 style="color: #ffffff; text-align: center;">Reset Your Password</h2>
      
            <p>Hi ${User.name || 'there'},</p>
      
            <p>We received a request to reset your password for your <strong>ServiceHub</strong> account. Use the following OTP to reset your password:</p>
      
            <div style="text-align: center; margin: 20px 0;">
              <p style="font-size: 24px; background-color: #1f2937; display: inline-block; padding: 10px 20px; border-radius: 8px; color: #ffffff;">
                ${otp}
              </p>
            </div>
      
            <p><strong>This OTP is valid for 15 minutes.</strong> If you didn't request a password reset, you can safely ignore this email.</p>
      
            <p style="margin-top: 20px;">Thanks,<br><strong>The ServiceHub Team</strong></p>
          </div>
        `
      };

      try {
        await transporter.sendMail(mail);
    } catch (emailErr) {
        console.error("Email not sent:", emailErr);
        return res.status(500).json({ message: "User created, but email sending failed. Please contact support." });
    }


     res.status(200).json({message : "Otp sent successfull"}) 


    }catch(err){
        res.status(500).json({message : "Internal server Error"})
    }
}


const resetPassword = async(req,res)=>{
    const {email,otp,newpassword} = req.body;
    if(!email||!otp||!newpassword){
        return res.json({success:false,message:"Email, OTP and New Password are required."})
    }
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.json({success:false,message:"User not found!"});
        }
        const userId = user._id;
        const otpEntry = await user.findOne({ user: userId });
        // console.log(otp)

        if(!otpEntry){
            return res.json({success:false,message:"OTP missing"})
        }
        if(otpEntry.otp===""|| otpEntry.otp !== otp){
            return res.json({success:false,message:"Invalid OTP"})
        }
        if(otpEntry.expiresAt<Date.now()){
            return res.json({success:false,message:"OTP Expired"})
        }
        const hashedpassword = await bcrypt.hash(newpassword,10);
        user.password = hashedpassword;
        await user.save();
        // await user.deleteOne({res});
        return res.json({success:true,message:'Password has been reset Successfully.'})
        
    } catch (error) {
        console.log(error.message)
        res.json({success:false,message:"Internal Server Error"})
    }
}

module.exports = {register,logIn,logout,googleLogin,sendResetOtp,resetPassword};